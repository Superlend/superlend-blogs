import { PostsWithFilter } from "@/components/posts-with-filter";
import Header from "@/components/header";
import { getAllPosts } from "@/lib/api";
import Hero from "@/components/hero";

export default function Index() {
  const allPosts = getAllPosts() || []; // Fallback to empty array

  return (
    <main className="min-h-screen">
      <Header />

      <Hero />

      {/* Posts with category filtering */}
      <PostsWithFilter posts={allPosts} />
    </main>
  );
}
