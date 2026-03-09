import { PostsWithFilter } from "@/components/posts-with-filter";
import Header from "@/components/header";
import { getAllPosts } from "@/lib/api";
import Hero from "@/components/hero";
import { HomepageSchema } from "@/components/homepage-schema";

export const revalidate = 3600;

export default function Index() {
  const allPosts = getAllPosts() || []; // Fallback to empty array

  return (
    <main className="min-h-screen">
      <HomepageSchema posts={allPosts} />
      <Header />

      <Hero />

      {/* Posts with category filtering */}
      <PostsWithFilter posts={allPosts} />
    </main>
  );
}
