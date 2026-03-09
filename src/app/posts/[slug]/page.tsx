import { Metadata } from "next";
import { notFound } from "next/navigation";
import { client } from "../../../../tina/__generated__/client";
import ClientPage from "./client-page";
import { ArticleSchema } from "@/components/article-schema";
import { RelatedPosts } from "@/components/related-posts";
import { getAllPosts } from "@/lib/api";
import Container from "@/components/container";
import { type Post as PostType, type BlogCategory } from "@/interfaces/post";

export const revalidate = 3600;

export default async function Post(props: Params) {
  const params = await props.params;
  const { slug } = params;

  let response;
  try {
    response = await client.queries.post({
      relativePath: `${slug}.md`,
    });
  } catch (error) {
    return notFound();
  }

  if (!response.data.post) {
    return notFound();
  }

  const post = response.data.post;
  const postUrl = `https://blog.superlend.xyz/posts/${slug}`;

  const modifiedDate = (post as any).modifiedDate || undefined;

  const schemaPost: PostType = {
    slug: slug,
    title: post.title,
    date: post.date || "",
    modifiedDate,
    coverImage: post.coverImage || "",
    author: {
      name: post.author?.name || "Superlend Team",
      picture: post.author?.picture || "",
    },
    excerpt: post.excerpt || "",
    ogImage: {
      url: post.ogImage?.url || "",
    },
    content: JSON.stringify(post.body),
    category: (post.category as BlogCategory) || "Guides",
  };

  const category = (post.category as BlogCategory) || "Guides";
  const relatedPosts = getAllPosts()
    .filter((p) => p.slug !== slug && p.category === category)
    .slice(0, 3);

  return (
    <>
      <ArticleSchema post={schemaPost} url={postUrl} />
      <ClientPage
        query={response.query}
        variables={response.variables}
        data={response.data}
      />
      <Container>
        <RelatedPosts posts={relatedPosts} />
      </Container>
    </>
  );
}

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const { slug } = params;

  let post;
  try {
    const response = await client.queries.post({
      relativePath: `${slug}.md`,
    });
    post = response.data.post;
  } catch (error) {
    return {
      title: "Superlend Blog",
      description: "Read the latest from Superlend.",
    };
  }

  if (!post) {
    return {
      title: "Superlend Blog",
    };
  }

  const title = `${post.title} | Superlend Blog`;
  const url = `/posts/${slug}`;
  const imageUrl = post.ogImage?.url
    ? post.ogImage.url.startsWith("http")
      ? post.ogImage.url
      : `https://blog.superlend.xyz${post.ogImage.url}`
    : post.coverImage || "";

  return {
    title,
    description: post.excerpt || "",
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description: post.excerpt || "",
      type: "article",
      publishedTime: post.date || "",
      modifiedTime: (post as any).modifiedDate || post.date || "",
      authors: [post.author?.name || "Superlend Team"],
      images: imageUrl ? [imageUrl] : [],
      url,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: post.excerpt || "",
      images: imageUrl ? [imageUrl] : [],
    },
  };
}

export async function generateStaticParams() {
  const postsResponse = await client.queries.postConnection();
  const edges = postsResponse.data.postConnection.edges || [];

  return edges
    .map((edge) => ({
      slug: edge?.node?._sys.filename || "",
    }))
    .filter((p) => p.slug !== "");
}
