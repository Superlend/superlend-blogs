"use client";

import { useEffect, useRef } from "react";
import { posthog } from "@/lib/analytics/posthog";
import { ANALYTICS_EVENTS } from "@/lib/analytics/events";
import type { ReadTimeProperties } from "@/lib/analytics/types";

interface UseTrackReadTimeOptions {
  postSlug: string;
  postTitle: string;
  /** Estimated reading time in minutes (from calculateReadingTime) */
  estimatedReadTimeMinutes: number;
}

/**
 * Track how long a user actively spends on a blog post.
 *
 * - Pauses the timer when the tab becomes hidden (alt-tab, minimise).
 * - Fires `blog_read_time` on component unmount with active seconds,
 *   estimated seconds, and the completion ratio.
 * - Only fires if the user spent at least 3 seconds on the page
 *   (filters out accidental navigations).
 */
export function useTrackReadTime({
  postSlug,
  postTitle,
  estimatedReadTimeMinutes,
}: UseTrackReadTimeOptions) {
  const activeTimeRef = useRef(0); // accumulated ms
  const lastTickRef = useRef(Date.now());
  const isVisibleRef = useRef(true);

  useEffect(() => {
    lastTickRef.current = Date.now();
    activeTimeRef.current = 0;
    isVisibleRef.current = true;

    // Tick every second to accumulate active time
    const interval = setInterval(() => {
      if (isVisibleRef.current) {
        activeTimeRef.current += Date.now() - lastTickRef.current;
      }
      lastTickRef.current = Date.now();
    }, 1000);

    // Pause / resume on visibility change
    const handleVisibility = () => {
      if (document.hidden) {
        // Accumulate time up to now before pausing
        if (isVisibleRef.current) {
          activeTimeRef.current += Date.now() - lastTickRef.current;
        }
        isVisibleRef.current = false;
      } else {
        isVisibleRef.current = true;
        lastTickRef.current = Date.now();
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      clearInterval(interval);
      document.removeEventListener("visibilitychange", handleVisibility);

      // Final accumulation
      if (isVisibleRef.current) {
        activeTimeRef.current += Date.now() - lastTickRef.current;
      }

      const activeSeconds = Math.round(activeTimeRef.current / 1000);

      // Only fire if user spent >3s (filter accidental visits)
      if (activeSeconds < 3) return;

      const estimatedSeconds = estimatedReadTimeMinutes * 60;

      const properties: ReadTimeProperties = {
        post_slug: postSlug,
        post_title: postTitle,
        active_seconds: activeSeconds,
        estimated_seconds: estimatedSeconds,
        completion_ratio:
          estimatedSeconds > 0
            ? parseFloat((activeSeconds / estimatedSeconds).toFixed(2))
            : 0,
      };

      posthog.capture(ANALYTICS_EVENTS.READ_TIME, properties);
    };
  }, [postSlug, postTitle, estimatedReadTimeMinutes]);
}
