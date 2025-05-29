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

    // Check if post is published (default to true if not specified)
    const isPublished = data.published !== false;
    if (!isPublished) {
      return null; // Hide unpublished posts
    }

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
      .filter((post): post is Post => post !== null) // Filter out null values (including unpublished posts)
      // sort posts by date in descending order
      .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
    return posts;
  } catch (error) {
    console.error('Error loading posts:', error);
    return []; // Return empty array instead of undefined
  }
}

// Function to get all posts including unpublished ones (useful for development)
export function getAllPostsIncludingUnpublished(): Post[] {
  try {
    const slugs = getPostSlugs();
    const posts = slugs
      .map((slug) => {
        try {
          const realSlug = slug.replace(/\.md$/, "");
          const fullPath = join(postsDirectory, `${realSlug}.md`);
          const fileContents = fs.readFileSync(fullPath, "utf8");
          const { data, content } = matter(fileContents);

          // Don't check published status - include all posts
          const post = {
            slug: realSlug,
            title: data.title || `Untitled (${realSlug})`,
            excerpt: data.excerpt || "No excerpt available",
            coverImage: data.coverImage || "/assets/blog/covers/abstract-1.jpg",
            date: data.date || new Date().toISOString(),
            author: data.author || { name: "Superlend Team", picture: "/assets/blog/authors/superlend-team.jpeg" },
            ogImage: data.ogImage || { url: "/assets/blog/covers/abstract-1.jpg" },
            content: content || "",
            published: data.published !== false // Add published status to the post object
          } as Post & { published: boolean };

          return post;
        } catch (error) {
          console.error(`Error reading post ${slug}:`, error);
          return null;
        }
      })
      .filter((post): post is Post & { published: boolean } => post !== null)
      // sort posts by date in descending order
      .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
    return posts;
  } catch (error) {
    console.error('Error loading all posts:', error);
    return [];
  }
}
