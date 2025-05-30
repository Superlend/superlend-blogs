"use client";

import { TrackedLink } from "./tracked-link";

export function BackNavigation() {
  return (
    <div className="max-w-4xl mx-auto pt-8 pb-4">
      <TrackedLink 
        href="/"
        className="inline-flex items-center text-muted hover:text-primary transition-colors text-sm"
        eventName="back_navigation_click"
        eventData={{ section: 'post_detail', element: 'back_to_blog' }}
      >
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Blog
      </TrackedLink>
    </div>
  );
} 