import { Post } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  try {
    return fs.readdirSync(postsDirectory);
  } catch (error) {
    console.error('Error reading posts directory:', error);
    return []; // Return empty array if directory doesn't exist or can't be read
  }
}

export function getPostBySlug(slug: string): Post | null {
  try {
    const realSlug = slug.replace(/\.md$/, "");
    const fullPath = join(postsDirectory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    // Validate required fields and provide defaults
    const post = {
      slug: realSlug,
      title: data.title || `Untitled (${realSlug})`,
      excerpt: data.excerpt || "No excerpt available",
      coverImage: data.coverImage || "/assets/blog/covers/abstract-1.jpg",
      date: data.date || new Date().toISOString(),
      author: data.author || { name: "Superlend Team", picture: "/assets/blog/authors/superlend-team.jpeg" },
      ogImage: data.ogImage || { url: "/assets/blog/covers/abstract-1.jpg" },
      content: content || ""
    } as Post;

    return post;
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null; // Return null for invalid posts
  }
}

export function getAllPosts(): Post[] {
  try {
    const slugs = getPostSlugs();
    const posts = slugs
      .map((slug) => getPostBySlug(slug))
      .filter((post): post is Post => post !== null) // Filter out null values
      // sort posts by date in descending order
      .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
    return posts;
  } catch (error) {
    console.error('Error loading posts:', error);
    return []; // Return empty array instead of undefined
  }
}
