"use client";

import { TrackedLink } from "./tracked-link";

export function BackNavigation() {
  return (
    <TrackedLink
      href="/"
      className="inline-flex items-center px-5 py-2.5 rounded-full glass-card transition-transform duration-150 active:scale-100 hover:scale-105 text-sm font-medium text-secondary-navy dark:text-white"
      eventName="back_navigation_click"
      eventData={{ section: "post_detail", element: "back_to_blog" }}
    >
      <svg
        className="w-4 h-4 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
      Back to All
    </TrackedLink>
  );
}
