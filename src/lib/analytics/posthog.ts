import posthog from "posthog-js";

/**
 * PostHog client singleton.
 *
 * Initialisation is deferred until `initPostHog()` is called from the
 * React provider so the SDK never runs on the server.
 */

let isInitialized = false;

export function initPostHog() {
  if (typeof window === "undefined") return;
  if (isInitialized) return;

  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  const host = process.env.NEXT_PUBLIC_POSTHOG_HOST;

  if (!key) {
    console.warn("[PostHog] Missing NEXT_PUBLIC_POSTHOG_KEY – skipping init");
    return;
  }

  posthog.init(key, {
    api_host: host || "https://us.i.posthog.com",

    /* We fire $pageview manually so we can attach richer metadata */
    capture_pageview: false,

    /* Fires an event when users navigate away / close the tab */
    capture_pageleave: true,

    /* Autocapture clicks, form submissions, etc. */
    autocapture: true,

    /* Session recording – captures full user sessions for replay */
    session_recording: {
      maskAllInputs: false,
      maskTextSelector: undefined,
    },

    /* Respect Do-Not-Track browser setting */
    respect_dnt: true,

    /* Persistence via cookies (survives cross-subdomain) */
    persistence: "localStorage+cookie",

    /* Load feature flags on page load (useful later) */
    loaded: (ph) => {
      // In dev mode, enable debug logging
      if (process.env.NODE_ENV === "development") {
        ph.debug();
      }
    },
  });

  isInitialized = true;
}

export { posthog };
