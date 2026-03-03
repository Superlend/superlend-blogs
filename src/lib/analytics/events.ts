/**
 * Centralised event name constants.
 *
 * Every custom PostHog event name lives here so there are
 * no magic strings scattered across components.
 */

export const ANALYTICS_EVENTS = {
  // ── Page-level ────────────────────────────────────────
  PAGE_VIEW: "blog_page_view",
  PAGE_LEAVE: "blog_page_leave",

  // ── Blog engagement ──────────────────────────────────
  SCROLL_DEPTH: "blog_scroll_depth",
  READ_TIME: "blog_read_time",

  // ── Navigation & interaction ─────────────────────────
  TOC_CLICK: "blog_toc_click",
  CATEGORY_FILTER: "blog_category_filter",
  LINK_CLICK: "blog_link_click",
  BUTTON_CLICK: "blog_button_click",
  BACK_NAVIGATION: "blog_back_navigation",

  // ── Content discovery ────────────────────────────────
  BLOG_CARD_CLICK: "blog_card_click",
  HERO_POST_CLICK: "blog_hero_post_click",
} as const;

export type AnalyticsEventName =
  (typeof ANALYTICS_EVENTS)[keyof typeof ANALYTICS_EVENTS];
