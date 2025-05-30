"use client";

import Link, { LinkProps } from 'next/link';
import { useAnalytics } from '@/context/amplitude-analytics-provider';
import { ReactNode, MouseEvent } from 'react';

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

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // Track the click event
    const defaultEventName = eventName || 'link_click';
    const defaultEventData = {
      link_url: linkProps.href.toString(),
      link_text: typeof children === 'string' ? children : 'Link',
      timestamp: new Date().toISOString(),
      ...eventData,
    };

    analytics.logEvent(defaultEventName, defaultEventData);

    // Call the original onClick handler if provided
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Link {...linkProps} onClick={handleClick}>
      {children}
    </Link>
  );
} 