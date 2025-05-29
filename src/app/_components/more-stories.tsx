import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";
import { FeaturedPostCard } from "./featured-post-card";

type Props = {
  posts: Post[];
};

export function MoreStories({ posts }: Props) {
  // Add null check to prevent runtime error
  if (!posts || !Array.isArray(posts) || posts.length === 0) {
    return null;
  }

  // First post is the large featured card
  const featuredPost = posts[0];
  // Next 4 posts are smaller cards
  const gridPosts = posts.slice(1, 5);
  // Remaining posts in standard grid
  const remainingPosts = posts.slice(5);

  return (
    <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-adaptive mb-4">Recent Articles</h2>
        <div className="w-16 h-1 bg-emerald-500 rounded"></div>
      </div>

      {/* Featured large card + 4 smaller cards grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
        {/* Large featured card taking 2 columns */}
        {featuredPost && (
          <div className="lg:col-span-2">
            <FeaturedPostCard
              title={featuredPost.title}
              coverImage={featuredPost.coverImage}
              date={featuredPost.date}
              author={featuredPost.author}
              slug={featuredPost.slug}
              excerpt={featuredPost.excerpt}
              readTime="2 min read"
              isFeatured={true}
            />
          </div>
        )}
        
        {/* Right column with smaller cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
          {gridPosts.map((post, index) => (
            <FeaturedPostCard
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
              slug={post.slug}
              excerpt={post.excerpt}
              readTime={`${Math.ceil((post.excerpt || "").length / 200)} min read`}
              isSmall={true}
            />
          ))}
        </div>
      </div>

      {/* Standard grid for remaining posts */}
      {remainingPosts.length > 0 && (
        <>
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-adaptive">More Stories</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {remainingPosts.map((post) => (
              <PostPreview
                key={post.slug}
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
                slug={post.slug}
                excerpt={post.excerpt}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
