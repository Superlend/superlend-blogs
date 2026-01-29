"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useState, useRef, useCallback, useEffect, Suspense } from "react";
import { motion, AnimatePresence } from "motion/react";
import type { Post } from "@/interfaces/post";
import { HeroPost } from "./hero-post";
import { BlogCardCompact } from "./blog-card-compact";

// Category slug helper
function toSlug(category: string): string {
  return category.toLowerCase().replace(/\s+/g, "-");
}

function fromSlug(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

interface CategoryWithCount {
  name: string;
  slug: string;
  count: number;
}

function PostsWithFilterContent({ posts }: { posts: Post[] }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const pillRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Get current category from URL
  const categoryParam = searchParams.get("category");
  const selectedCategorySlug = categoryParam || null;

  // Calculate categories with counts
  const categories: CategoryWithCount[] = [
    { name: "All", slug: "all", count: posts.length },
    ...Array.from(
      posts.reduce((acc, post) => {
        const existing = acc.get(post.category);
        if (existing) {
          existing.count++;
        } else {
          acc.set(post.category, {
            name: post.category,
            slug: toSlug(post.category),
            count: 1,
          });
        }
        return acc;
      }, new Map<string, CategoryWithCount>()),
    )
      .map(([, value]) => value)
      .sort((a, b) => b.count - a.count),
  ];

  // Filter posts based on selected category
  const filteredPosts = selectedCategorySlug
    ? posts.filter((post) => toSlug(post.category) === selectedCategorySlug)
    : posts;

  const featuredPost = filteredPosts[0];
  const gridPosts = filteredPosts.slice(1);

  // Get current focused index
  const currentIndex = selectedCategorySlug
    ? categories.findIndex((c) => c.slug === selectedCategorySlug)
    : 0;

  // Handle category selection
  const handleCategorySelect = useCallback(
    (category: CategoryWithCount) => {
      const params = new URLSearchParams(searchParams.toString());
      if (category.slug === "all") {
        params.delete("category");
      } else {
        params.set("category", category.slug);
      }
      const query = params.toString();
      router.push(query ? `${pathname}?${query}` : pathname, { scroll: false });
    },
    [searchParams, router, pathname],
  );

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, index: number) => {
      let nextIndex = index;

      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        nextIndex = (index + 1) % categories.length;
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        nextIndex = (index - 1 + categories.length) % categories.length;
      } else if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleCategorySelect(categories[index]);
        return;
      }

      pillRefs.current[nextIndex]?.focus();
    },
    [categories, handleCategorySelect],
  );

  return (
    <div>
      {/* Category Filter Pills */}
      <div className="max-w-7xl mx-auto pt-8 pb-4 px-2 md:px-6">
        <div
          className="flex flex-wrap gap-2 justify-center"
          role="tablist"
          aria-label="Filter posts by category"
        >
          {categories.map((category, index) => {
            const isSelected =
              category.slug === "all"
                ? !selectedCategorySlug
                : category.slug === selectedCategorySlug;

            return (
              <button
                key={category.slug}
                ref={(el) => {
                  pillRefs.current[index] = el;
                }}
                role="tab"
                aria-selected={isSelected}
                tabIndex={isSelected ? 0 : -1}
                onClick={() => handleCategorySelect(category)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className={`
                  px-4 py-2 rounded-full text-sm font-medium
                  transition-all duration-200 ease-out
                  focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2
                  ${
                    isSelected
                      ? "bg-primary text-white shadow-md"
                      : "bg-white/60 text-secondary-navy hover:bg-white/80 hover:shadow-sm"
                  }
                `}
              >
                {category.name}
                <span
                  className={`ml-2 px-1.5 py-0.5 rounded-full text-xs ${
                    isSelected
                      ? "bg-white/20 text-white"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  {category.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Hero / Featured Post */}
      <AnimatePresence mode="wait">
        {featuredPost && (
          <motion.div
            key={featuredPost.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <HeroPost featuredPost={featuredPost} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Grid of remaining posts */}
      {gridPosts.length > 0 && (
        <section className="pb-12 px-2 md:px-6">
          <motion.div
            className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto"
            layout
          >
            <AnimatePresence mode="popLayout">
              {gridPosts.map((post, index) => (
                <motion.div
                  key={post.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.05,
                  }}
                >
                  <BlogCardCompact
                    title={post.title}
                    coverImage={post.coverImage}
                    date={post.date}
                    excerpt={post.excerpt}
                    author={post.author}
                    slug={post.slug}
                    index={index}
                    content={post.content || ""}
                    category={post.category}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>
      )}

      {/* Empty state */}
      {filteredPosts.length === 0 && (
        <div className="max-w-7xl mx-auto px-2 md:px-6 py-16 text-center">
          <p className="text-gray-500 text-lg">
            No posts found in this category.
          </p>
          <button
            onClick={() => handleCategorySelect(categories[0])}
            className="mt-4 px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
          >
            View all posts
          </button>
        </div>
      )}
    </div>
  );
}

export function PostsWithFilter({ posts }: { posts: Post[] }) {
  return (
    <Suspense
      fallback={
        <div className="max-w-7xl mx-auto pt-8 pb-4 px-2 md:px-6">
          <div className="flex flex-wrap gap-2 justify-center animate-pulse">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-10 w-24 bg-gray-200 rounded-full" />
            ))}
          </div>
        </div>
      }
    >
      <PostsWithFilterContent posts={posts} />
    </Suspense>
  );
}
