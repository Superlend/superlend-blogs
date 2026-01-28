import { HeroPost } from "@/components/hero-post";
import { MoreStories } from "@/components/more-stories";
import Header from "@/components/header";
import { getAllPosts } from "@/lib/api";
import Hero from "@/components/hero";

export default function Index() {
  const allPosts = getAllPosts() || []; // Fallback to empty array

  // First post is featured in hero
  const featuredPost = allPosts[0];

  return (
    <main className="min-h-screen">
      <Header />

      <Hero />

      {/* Hero / Featured Post */}
      {featuredPost && <HeroPost featuredPost={featuredPost} />}

      {/* Grid of remaining posts */}
      {allPosts.length > 0 && <MoreStories posts={allPosts} />}
    </main>
  );
}
