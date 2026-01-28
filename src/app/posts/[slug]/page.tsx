import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import { CMS_NAME } from "@/lib/constants";
import markdownToHtml from "@/lib/markdownToHtml";
import Alert from "@/app/_components/alert";
import Container from "@/app/_components/container";
import Header from "@/app/_components/header";
import { PostBody } from "@/app/_components/post-body";
import { PostHeader } from "@/app/_components/post-header";
import { BackNavigation } from "@/components/analytics/back-navigation";
import { ScrollProgress } from "@/components/scroll-progress";
import { TableOfContents } from "@/components/table-of-contents";
import { ArticleMetadataSidebar } from "@/components/article-metadata-sidebar";
import { extractHeadings } from "@/lib/extract-headings";
import { calculateReadingTime } from "@/lib/reading-time";

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
          <article className="min-w-0 px-4 pt-5 rounded-4 bg-white bg-opacity-40">
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
