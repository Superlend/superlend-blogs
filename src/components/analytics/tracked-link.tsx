"use client";

import Link, { LinkProps } from "next/link";
import { useAnalytics } from "@/context/amplitude-analytics-provider";
import { posthog } from "@/lib/analytics/posthog";
import { ANALYTICS_EVENTS } from "@/lib/analytics/events";
import { ReactNode, MouseEvent } from "react";
import { ArrowUpRight } from "lucide-react";

interface TrackedLinkProps extends LinkProps {
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  eventName?: string;
  eventData?: Record<string, any>;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
}

export function TrackedLink({
  children,
  eventName,
  eventData = {},
  onClick,
  ...linkProps
}: TrackedLinkProps) {
  const analytics = useAnalytics();
  const isExternalLink =
    (linkProps?.target ?? "") === "_blank" && typeof children === "string";

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // Track the click event
    const defaultEventName = eventName || "link_click";
    const defaultEventData = {
      link_url: linkProps.href.toString(),
      link_text: typeof children === "string" ? children : "Link",
      timestamp: new Date().toISOString(),
      ...eventData,
    };

    // Fire to Amplitude
    analytics.logEvent(defaultEventName, defaultEventData);

    // Fire to PostHog
    posthog.capture(ANALYTICS_EVENTS.LINK_CLICK, {
      element_text: typeof children === "string" ? children : "Link",
      element_url: linkProps.href.toString(),
      page_url: typeof window !== "undefined" ? window.location.href : "",
      original_event_name: defaultEventName,
      ...eventData,
    });

    // Call the original onClick handler if provided
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Link {...linkProps} onClick={handleClick}>
      {children}
      {isExternalLink && (
        <ArrowUpRight
          size="14"
          className="inline-block ml-0.5"
          aria-hidden="true"
        />
      )}
    </Link>
  );
}
