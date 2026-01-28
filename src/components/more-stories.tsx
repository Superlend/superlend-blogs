import { Post } from "@/interfaces/post";
import { BlogCardCompact } from "./blog-card-compact";

type Props = {
  posts: Post[];
};

export function MoreStories({ posts }: Props) {
  // Add null check to prevent runtime error
  if (!posts || !Array.isArray(posts) || posts.length === 0) {
    return null;
  }

  // Skip first post (it's featured in hero)
  const gridPosts = posts.slice(1);

  if (gridPosts.length === 0) {
    return null;
  }

  return (
    <section className="pb-12 px-2 md:px-6">
      {/* Section Header */}
      {/* <h2 className="text-3xl font-semibold text-secondary-navy dark:text-white mb-8 text-center">
        Latest Articles
      </h2> */}

      {/* Tighter Grid (gap-6 instead of gap-8) */}
      <div
        className="
        grid gap-6
        grid-cols-1 
        md:grid-cols-2 
        lg:grid-cols-3
        max-w-7xl mx-auto
      "
      >
        {gridPosts.map((post, index) => (
          <BlogCardCompact
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            excerpt={post.excerpt}
            author={post.author}
            slug={post.slug}
            index={index}
            content={post.content || ""}
          />
        ))}
      </div>
    </section>
  );
}
