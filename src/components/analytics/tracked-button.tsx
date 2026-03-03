"use client";

import { useAnalytics } from "@/context/amplitude-analytics-provider";
import { posthog } from "@/lib/analytics/posthog";
import { ANALYTICS_EVENTS } from "@/lib/analytics/events";
import { ReactNode, MouseEvent, ButtonHTMLAttributes } from "react";

interface TrackedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  eventName?: string;
  eventData?: Record<string, any>;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export function TrackedButton({
  children,
  eventName,
  eventData = {},
  onClick,
  ...buttonProps
}: TrackedButtonProps) {
  const analytics = useAnalytics();

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    // Track the click event
    const defaultEventName = eventName || "button_click";
    const defaultEventData = {
      button_text: typeof children === "string" ? children : "Button",
      button_type: buttonProps.type || "button",
      timestamp: new Date().toISOString(),
      ...eventData,
    };

    // Fire to Amplitude
    analytics.logEvent(defaultEventName, defaultEventData);

    // Fire to PostHog
    posthog.capture(ANALYTICS_EVENTS.BUTTON_CLICK, {
      element_text: typeof children === "string" ? children : "Button",
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
    <button {...buttonProps} onClick={handleClick}>
      {children}
    </button>
  );
}
