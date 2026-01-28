import { HeroPost } from "@/app/_components/hero-post";
import { MoreStories } from "@/app/_components/more-stories";
import Header from "@/app/_components/header";
import { getAllPosts } from "@/lib/api";

export default function Index() {
  const allPosts = getAllPosts() || []; // Fallback to empty array

  // First post is featured in hero
  const featuredPost = allPosts[0];

  return (
    <main className="min-h-screen">
      <Header />

      <div className="max-w-7xl mx-auto pt-12 flex gap-4 flex-col items-center justify-center">
        <div className="text-sm text-secondary-navy dark:text-white font-medium flex items-center justify-center py-2 px-4 rounded-[12px] w-fit bg-white bg-opacity-50 opacity-75">
          Superlend Blog
        </div>
        <h1 className="text-4xl md:text-6xl xl:text-[60px] font-medium text-secondary-navy dark:text-white text-center max-w-[16ch] leading-tight">
          The latest insights from Superlend
        </h1>
      </div>

      {/* Hero / Featured Post */}
      {featuredPost && <HeroPost featuredPost={featuredPost} />}

      {/* Grid of remaining posts */}
      {allPosts.length > 0 && <MoreStories posts={allPosts} />}
    </main>
  );
}
