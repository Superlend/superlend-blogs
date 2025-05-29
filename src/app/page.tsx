import Container from "@/app/_components/container";
import { HeroBanner } from "@/app/_components/hero-banner";
import { MoreStories } from "@/app/_components/more-stories";
import Header from "@/app/_components/header";
import { getAllPosts } from "@/lib/api";

export default function Index() {
  const allPosts = getAllPosts() || []; // Fallback to empty array

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Banner Section */}
      <HeroBanner />
      
      {/* All posts in EO-style layout */}
      {allPosts.length > 0 && <MoreStories posts={allPosts} />}
    </main>
  );
}
