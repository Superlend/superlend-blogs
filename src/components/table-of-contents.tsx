"use client";

import { useEffect, useState } from "react";
import {
  getIndentClass,
  getActiveStyles,
  getInactiveStyles,
} from "@/lib/table-of-content";
import { posthog } from "@/lib/analytics/posthog";
import { ANALYTICS_EVENTS } from "@/lib/analytics/events";
import type { TocClickProperties } from "@/lib/analytics/types";

export interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  headings: Heading[];
  /** Post slug for analytics context */
  postSlug?: string;
}

export function TableOfContents({ headings, postSlug }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (headings.length === 0) return;

    // Intersection Observer for scroll-spy
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-5px 0px -80% 0px", // Trigger when heading reaches top (minus 5px)
        threshold: 0,
      },
    );

    // Observe all heading elements
    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) {
    return null;
  }

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    heading: Heading,
  ) => {
    e.preventDefault();
    const element = document.getElementById(heading.id);
    if (element) {
      const yOffset = -10; // Offset for sticky header
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }

    // Track TOC click in PostHog
    const properties: TocClickProperties = {
      post_slug: postSlug || "",
      heading_id: heading.id,
      heading_text: heading.text,
      heading_level: heading.level,
    };
    posthog.capture(ANALYTICS_EVENTS.TOC_CLICK, properties);
  };

  return (
    <nav className="sticky top-24">
      <h3 className="text-sm font-semibold text-secondary-navy dark:text-white mb-4">
        Table of Content
      </h3>
      <ul className="space-y-1 text-sm max-h-[calc(100vh-8rem)] overflow-auto">
        {headings.map((heading) => {
          const isActive = activeId === heading.id;
          const indentClass = getIndentClass(heading.level);
          const stateStyles = isActive
            ? getActiveStyles(heading.level)
            : getInactiveStyles(heading.level);

          return (
            <li key={heading.id} className={indentClass}>
              <a
                href={`#${heading.id}`}
                onClick={(e) => handleClick(e, heading)}
                className={`block py-1.5 transition-all duration-200 ${stateStyles}`}
              >
                {heading.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
