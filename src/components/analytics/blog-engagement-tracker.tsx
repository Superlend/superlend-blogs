"use client";

import { useEffect } from "react";
import { posthog } from "@/lib/analytics/posthog";
import { ANALYTICS_EVENTS } from "@/lib/analytics/events";
import { useTrackScrollDepth } from "@/hooks/useTrackScrollDepth";
import { useTrackReadTime } from "@/hooks/useTrackReadTime";
import type { BlogPageViewProperties } from "@/lib/analytics/types";

interface BlogEngagementTrackerProps {
  postSlug: string;
  postTitle: string;
  postCategory: string;
  postAuthor: string;
  estimatedReadTimeMinutes: number;
  wordCount: number;
}

/**
 * Invisible tracking component for individual blog post pages.
 *
 * Fires:
 * - `blog_page_view` with rich metadata on mount
 * - `blog_scroll_depth` at 25/50/75/100% milestones
 * - `blog_read_time` on unmount with active reading duration
 *
 * Place this inside the blog post client component.
 */
export function BlogEngagementTracker({
  postSlug,
  postTitle,
  postCategory,
  postAuthor,
  estimatedReadTimeMinutes,
  wordCount,
}: BlogEngagementTrackerProps) {
  // Fire enriched page view on mount
  useEffect(() => {
    const properties: BlogPageViewProperties = {
      url: window.location.href,
      title: document.title,
      referrer: document.referrer,
      post_slug: postSlug,
      post_title: postTitle,
      post_category: postCategory,
      post_author: postAuthor,
      post_word_count: wordCount,
      post_estimated_read_time: estimatedReadTimeMinutes,
    };

    posthog.capture(ANALYTICS_EVENTS.PAGE_VIEW, properties);
  }, [
    postSlug,
    postTitle,
    postCategory,
    postAuthor,
    wordCount,
    estimatedReadTimeMinutes,
  ]);

  // Scroll depth tracking
  useTrackScrollDepth({ postSlug, postTitle });

  // Read time tracking (idle-aware)
  useTrackReadTime({ postSlug, postTitle, estimatedReadTimeMinutes });

  // Renders nothing — pure tracking
  return null;
}
