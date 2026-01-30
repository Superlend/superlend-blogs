"use client";

import Image from "next/image";
import DateFormatter from "@/components/date-formatter";
import { type Author } from "@/interfaces/author";
import { formatReadingTime } from "@/lib/reading-time";

interface ArticleMetadataSidebarProps {
  author: Author;
  date: string;
  readTime: number;
  category?: string;
  title: string;
}

export function ArticleMetadataSidebar({
  author,
  date,
  readTime,
  category,
  title,
}: ArticleMetadataSidebarProps) {
  const handleShareOnX = () => {
    const url = window.location.href;
    const text = `Learn more about ${title}`;
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        text,
      )}&url=${encodeURIComponent(url)}`,
      "_blank",
    );
  };

  const handleShareOnLinkedIn = () => {
    const url = window.location.href;
    const text = `Learn more about ${title}`;
    window.open(
      `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
        url,
      )}&title=${encodeURIComponent(text)}`,
      "_blank",
    );
  };

  return (
    <aside className="sticky top-24 space-y-6">
      {/* Author */}
      <div>
        {/* <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wide">
          By
        </p> */}
        <div className="flex items-center gap-2">
          <Image
            src={author.picture || "/assets/default-avatar.png"}
            alt={author.name}
            width={24}
            height={24}
            className="min-h-6 min-w-6 max-h-6 max-w-6 object-contain"
          />
          <span className="text-sm font-medium text-secondary-navy dark:text-white">
            {author.name}
          </span>
        </div>
      </div>

      {/* Date & Reading Time */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <DateFormatter dateString={date} />
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{formatReadingTime(readTime)}</span>
        </div>
      </div>

      {/* Category */}
      {category && (
        <div>
          <span className="inline-block px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
            {category}
          </span>
        </div>
      )}

      {/* Share Section */}
      <div className="pt-6 border-t border-secondary-navy/25 dark:border-gray-700">
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wide">
          Share this post
        </p>
        <div className="flex gap-2">
          {/* X/Twitter */}
          <button
            onClick={handleShareOnX}
            className="p-2.5 rounded-lg bg-gray-900 hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 text-white transition-colors"
            aria-label="Share on X"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </button>

          {/* LinkedIn */}
          <button
            onClick={handleShareOnLinkedIn}
            className="p-2.5 rounded-lg bg-[#0077B5] hover:bg-[#006399] text-white transition-colors"
            aria-label="Share on LinkedIn"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </button>
        </div>
      </div>
    </aside>
  );
}
