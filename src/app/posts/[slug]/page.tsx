import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import Container from "@/components/container";
import Header from "@/components/header";
import { PostBody } from "@/components/post-body";
import { PostHeader } from "@/components/post-header";
import { BackNavigation } from "@/components/analytics/back-navigation";
import { ScrollProgress } from "@/components/scroll-progress";
import { TableOfContents } from "@/components/table-of-contents";
import { ArticleMetadataSidebar } from "@/components/article-metadata-sidebar";
import { extractHeadings } from "@/lib/extract-headings";
import { calculateReadingTime } from "@/lib/reading-time";
import Image from "next/image";

export default async function Post(props: Params) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");
  const headings = extractHeadings(content);
  const readTime = calculateReadingTime(post.content || "");

  return (
    <main className="min-h-screen bg-background">
      {/* LayerZero-style scroll progress indicator */}
      <ScrollProgress />

      <Header />

      {/* Clean tinted background */}
      <Container>
        <div className="py-6">
          <BackNavigation />
        </div>

        <PostHeader
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          author={post.author}
          content={post.content ?? ""}
        />

        {/* Three-column layout: metadata sidebar | content | TOC sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_260px] gap-4 max-w-7xl mx-auto pb-16">
          {/* Left Sidebar - Metadata (hidden on mobile, sticky on desktop) */}
          <div className="hidden lg:block">
            <ArticleMetadataSidebar
              author={post.author}
              date={post.date}
              readTime={readTime}
              category="Article"
            />
          </div>

          {/* Center - Article Content */}
          <article className="min-w-0 px-4 pt-5 rounded-4 bg-white bg-opacity-40 flex flex-col gap-6">
            <div className="relative aspect-[21/9] rounded-xl overflow-hidden shadow-lg">
              <Image
                src={post.coverImage}
                alt={post.title}
                width={736}
                height={315}
                className="object-cover aspect-[21/9]"
              />
            </div>
            <PostBody content={content} />
          </article>

          {/* Right Sidebar - Table of Content (hidden on mobile, sticky on desktop) */}
          <div className="hidden lg:block">
            <TableOfContents headings={headings} />
          </div>
        </div>
      </Container>
    </main>
  );
}

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | Superlend Blog`;

  return {
    title,
    description: post.excerpt,
    openGraph: {
      title,
      description: post.excerpt,
      images: [post.ogImage.url],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
