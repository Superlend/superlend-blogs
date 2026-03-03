/**
 * Shared TypeScript types for PostHog event properties.
 *
 * Every event payload is typed here to keep tracking consistent
 * and self-documenting.
 */

/** Properties sent with blog_page_view */
export interface BlogPageViewProperties {
  url: string;
  title: string;
  referrer: string;
  /** Only present on blog post pages */
  post_slug?: string;
  post_title?: string;
  post_category?: string;
  post_author?: string;
  post_word_count?: number;
  post_estimated_read_time?: number;
}

/** Properties sent with blog_scroll_depth */
export interface ScrollDepthProperties {
  /** 25 | 50 | 75 | 100 */
  depth_percent: number;
  post_slug: string;
  post_title: string;
  /** Seconds elapsed since page load when this milestone was reached */
  time_on_page: number;
}

/** Properties sent with blog_read_time */
export interface ReadTimeProperties {
  post_slug: string;
  post_title: string;
  /** Actual active seconds spent on the page (paused when tab hidden) */
  active_seconds: number;
  /** Estimated reading time in seconds (based on word count) */
  estimated_seconds: number;
  /** active_seconds / estimated_seconds — >1 means user read slower */
  completion_ratio: number;
}

/** Properties sent with blog_toc_click */
export interface TocClickProperties {
  post_slug: string;
  heading_id: string;
  heading_text: string;
  heading_level: number;
}

/** Properties sent with blog_category_filter */
export interface CategoryFilterProperties {
  category_name: string;
  category_slug: string;
  post_count: number;
}

/** Properties sent with blog_link_click / blog_button_click */
export interface InteractionProperties {
  element_text: string;
  element_url?: string;
  page_url: string;
  [key: string]: unknown;
}
