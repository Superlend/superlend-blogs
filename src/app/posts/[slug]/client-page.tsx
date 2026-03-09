"use client";

import { useTina } from "tinacms/dist/react";
import Image from "next/image";
import { type PostQuery } from "../../../../tina/__generated__/types";
import Container from "@/components/container";
import Header from "@/components/header";
import { PostHeader } from "@/components/post-header";
import { BackNavigation } from "@/components/analytics/back-navigation";
import { BlogEngagementTracker } from "@/components/analytics/blog-engagement-tracker";
import { ScrollProgress } from "@/components/scroll-progress";
import { ArticleMetadataSidebar } from "@/components/article-metadata-sidebar";
import { calculateReadingTime } from "@/lib/reading-time";
import { PostBody } from "@/components/post-body";
import { TableOfContents } from "@/components/table-of-contents";
import { extractHeadingsFromTina } from "@/lib/tina-extract-headings";

interface ClientPageProps {
  query: string;
  variables: {
    relativePath: string;
  };
  data: PostQuery;
}

export default function ClientPage(props: ClientPageProps) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const post = data.post;
  const contentString = JSON.stringify(post.body);
  const readTime = calculateReadingTime(contentString);
  const headings = extractHeadingsFromTina(post.body);

  // Derive slug from the file path (e.g. "my-post.md" → "my-post")
  const postSlug = props.variables.relativePath.replace(/\.md$/, "");

  // Approximate word count for analytics
  const wordCount = contentString
    .replace(/<[^>]*>/g, "")
    .trim()
    .split(/\s+/).length;

  return (
    <main className="min-h-screen bg-background">
      {/* PostHog engagement tracking (invisible) */}
      <BlogEngagementTracker
        postSlug={postSlug}
        postTitle={post.title}
        postCategory={post.category || "Article"}
        postAuthor={post.author?.name || "Superlend Team"}
        estimatedReadTimeMinutes={readTime}
        wordCount={wordCount}
      />

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
          coverImage={post.coverImage || ""}
          date={post.date || ""}
          author={{
            name: post.author?.name || "Superlend Team",
            picture: post.author?.picture || "",
          }}
          content={contentString}
        />

        {/* Three-column layout: metadata sidebar | content | TOC sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_260px] gap-4 max-w-7xl mx-auto pb-16">
          {/* Left Sidebar - Metadata (hidden on mobile, sticky on desktop) */}
          <div className="hidden lg:block">
            <ArticleMetadataSidebar
              author={{
                name: post.author?.name || "Superlend Team",
                picture: post.author?.picture || "",
              }}
              date={post.date || ""}
              readTime={readTime}
              category={post.category || "Article"}
              title={post.title}
            />
          </div>

          {/* Center - Article Content */}
          <article className="min-w-0 px-4 pt-5 rounded-4 bg-white bg-opacity-40 flex flex-col gap-6">
            <div className="relative aspect-[21/9] rounded-xl overflow-hidden shadow-lg">
              {post.coverImage && (
                <Image
                  src={post.coverImage}
                  alt={`Cover image for article: ${post.title}`}
                  width={736}
                  height={315}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 736px"
                  className="object-cover aspect-[21/9]"
                />
              )}
            </div>
            <PostBody content={post.body} />
          </article>

          {/* Right Sidebar - TOC */}
          <div className="hidden lg:block">
            <TableOfContents headings={headings} postSlug={postSlug} />
          </div>
        </div>
      </Container>
    </main>
  );
}
