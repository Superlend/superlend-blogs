"use client";

import { useEffect, useState } from "react";
import {
  getIndentClass,
  getActiveStyles,
  getInactiveStyles,
} from "@/lib/table-of-content";

export interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  headings: Heading[];
}

export function TableOfContents({ headings }: TableOfContentsProps) {
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
        rootMargin: "-100px 0px -66%", // Trigger when heading is in top 1/3
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

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100; // Offset for sticky header
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
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
                onClick={(e) => handleClick(e, heading.id)}
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
