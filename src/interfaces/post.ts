import { type Author } from "./author";

// Available blog categories - add new categories here
export const BLOG_CATEGORIES = [
  "DeFi Basics",
  "Yield Strategies",
  "Product Updates",
  "Guides",
] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

export type Post = {
  slug: string;
  title: string;
  date: string;
  modifiedDate?: string;
  coverImage: string;
  author: Author;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
  category: BlogCategory;
  preview?: boolean;
};
