import Link from "next/link";
import CoverImage from "@/components/cover-image";
import DateFormatter from "@/components/date-formatter";
import { type Post } from "@/interfaces/post";
import { calculateReadingTime, formatReadingTime } from "@/lib/reading-time";

interface RelatedPostsProps {
  posts: Post[];
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto py-12">
      <h2 className="text-2xl font-bold text-secondary-navy dark:text-white mb-6">
        Related Articles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => {
          const readTime = calculateReadingTime(post.content);
          return (
            <Link
              key={post.slug}
              href={`/posts/${post.slug}`}
              className="group rounded-4 overflow-hidden bg-white bg-opacity-60 hover:bg-opacity-75 transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-100"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <CoverImage title={post.title} src={post.coverImage} />
              </div>
              <div className="p-4">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-2">
                  {post.category}
                </span>
                <h3 className="text-base font-semibold text-secondary-navy dark:text-white mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <DateFormatter dateString={post.date} />
                  <span>&middot;</span>
                  <span>{formatReadingTime(readTime)}</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
