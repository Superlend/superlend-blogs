import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { HeroBanner } from "@/app/_components/hero-banner";
import { MoreStories } from "@/app/_components/more-stories";
import Header from "@/app/_components/header";
import { getAllPosts } from "@/lib/api";

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Banner Section */}
      <HeroBanner />
      
      {heroPost && (
        <Container>
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        </Container>
      )}
      
      {morePosts.length > 0 && <MoreStories posts={morePosts} />}
    </main>
  );
}
