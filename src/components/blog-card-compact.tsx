"use client";

import { useState } from "react";
import Image from "next/image";
import { type Author } from "@/interfaces/author";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { TrackedLink } from "@/components/analytics/tracked-link";

import { calculateReadingTime, formatReadingTime } from "@/lib/reading-time";
import { BlogCategory } from "@/interfaces/post";

interface BlogCardCompactProps {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
  index: number;
  content: string; // Added for reading time calculation
  category: BlogCategory;
}

export function BlogCardCompact({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  index,
  content,
  category,
}: BlogCardCompactProps) {
  const readTime = calculateReadingTime(content);

  return (
    <article
      className={`
        group max-h-full h-full relative p-3 pb-8
        rounded-4 overflow-hidden
        transition-all duration-300 ease-out
        hover:scale-105 active:scale-100 hover:shadow-xl
        animate-slide-up bg-white bg-opacity-60
        hover:bg-opacity-75
      `}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <TrackedLink
        href={`/posts/${slug}`}
        className="inline-block h-full"
        eventName="blog_card_cta_click"
        eventData={{
          section: "blog_grid",
          element: "read_more_button",
          post_title: title,
          post_slug: slug,
        }}
      >
        {/* Compact Image (shorter aspect ratio) */}
        <div className="relative aspect-[16/10] rounded-[16px] overflow-hidden">
          <div
            className={`
            h-full w-full
            transition-transform duration-500
            group-hover:scale-105
          `}
          >
            <CoverImage title={title} src={coverImage} />
          </div>
        </div>

        {/* Compact Content */}
        <div className="mt-4 pb-12">
          {/* Category Badge */}
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3 w-fit">
            {category}
          </span>

          {/* Title (smaller, 2 lines max) */}
          <h3 className="text-lg font-semibold text-secondary-navy dark:text-white mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>

          {/* Excerpt (2 lines max) */}
          {/* <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
            {excerpt}
          </p> */}

          {/* Author + Meta + CTA */}
          <div className="absolute bottom-3 flex items-center gap-3">
            {/* Avatar */}
            <Image
              src={author.picture ?? "/assets/default-avatar.png"}
              alt={author.name}
              width={32}
              height={32}
              className="rounded-full shrink-0 grow-0 object-cover max-w-[32px] max-h-[32px] min-w-[32px] min-h-[32px]"
            />

            {/* Info */}
            <div className="flex flex-col text-xs text-gray-500 dark:text-gray-400 flex-1 min-w-0">
              <span className="font-medium truncate">{author.name}</span>
              <div className="flex items-center gap-2 flex-wrap">
                <DateFormatter dateString={date} />
                <span>•</span>
                <span>{formatReadingTime(readTime)}</span>
              </div>
            </div>
          </div>
        </div>
      </TrackedLink>
    </article>
  );
}
