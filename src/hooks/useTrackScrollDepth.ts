"use client";

import { useEffect, useRef, useCallback } from "react";
import { posthog } from "@/lib/analytics/posthog";
import { ANALYTICS_EVENTS } from "@/lib/analytics/events";
import type { ScrollDepthProperties } from "@/lib/analytics/types";

interface UseTrackScrollDepthOptions {
  postSlug: string;
  postTitle: string;
}

/**
 * Track scroll depth milestones (25%, 50%, 75%, 100%) for a blog post.
 *
 * Each milestone fires exactly once per page load. Uses scroll
 * position rather than IntersectionObserver for accuracy on
 * dynamically-sized content.
 */
export function useTrackScrollDepth({
  postSlug,
  postTitle,
}: UseTrackScrollDepthOptions) {
  const firedMilestones = useRef(new Set<number>());
  const pageLoadTime = useRef(Date.now());

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    if (docHeight <= 0) return;

    const scrollPercent = (scrollTop / docHeight) * 100;
    const milestones = [25, 50, 75, 100];

    for (const milestone of milestones) {
      if (
        scrollPercent >= milestone &&
        !firedMilestones.current.has(milestone)
      ) {
        firedMilestones.current.add(milestone);

        const properties: ScrollDepthProperties = {
          depth_percent: milestone,
          post_slug: postSlug,
          post_title: postTitle,
          time_on_page: Math.round((Date.now() - pageLoadTime.current) / 1000),
        };

        posthog.capture(ANALYTICS_EVENTS.SCROLL_DEPTH, properties);
      }
    }
  }, [postSlug, postTitle]);

  useEffect(() => {
    // Reset on mount (new page)
    firedMilestones.current = new Set();
    pageLoadTime.current = Date.now();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);
}
