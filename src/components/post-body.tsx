"use client";

import { TinaMarkdown } from "tinacms/dist/rich-text";
import markdownStyles from "../../public/assets/styles/markdown-styles.module.css";
import React, { useEffect, useRef } from "react";
import { slugify } from "@/lib/slugify";

type Props = {
  content: any; // Tina Rich Text JSON
};

export function PostBody({ content }: Props) {
  const contentRef = useRef<HTMLDivElement>(null);

  // Fallback: Manually inject IDs into headings for TOC compatibility
  // This mimics standard markdown behavior where headings have IDs
  useEffect(() => {
    if (contentRef.current) {
      const headings = contentRef.current.querySelectorAll("h2, h3");
      headings.forEach((heading) => {
        if (!heading.id) {
          const text = heading.textContent || "";
          heading.id = slugify(text);
        }
      });
    }
  }, [content]);

  return (
    <div className="max-w-3xl mx-auto">
      <div
        ref={contentRef}
        className={`
            ${markdownStyles["markdown"]} 
            prose prose-lg dark:prose-invert max-w-none
            prose-headings:text-secondary-navy
            prose-p:text-secondary-navy
            prose-a:text-primary
            prose-strong:text-secondary-navy
            prose-code:text-secondary-navy
            prose-code:bg-gray-100
            prose-pre:bg-gray-50
            dark:prose-headings:text-white
            dark:prose-p:text-gray-300
            dark:prose-code:bg-gray-800
            dark:prose-pre:bg-gray-900
            first-letter:uppercase
            prose-p:first-of-type:mt-0
            prose-h1:first-of-type:mt-0
            prose-h2:first-of-type:mt-0
            prose-h3:first-of-type:mt-0
            prose-h4:first-of-type:mt-0
            prose-h5:first-of-type:mt-0
            prose-h6:first-of-type:mt-0
          `}
      >
        <TinaMarkdown content={content} />
      </div>
    </div>
  );
}
