import { Post } from "@/interfaces/post";

interface ArticleSchemaProps {
  post: Post;
  url: string;
}

export function ArticleSchema({ post, url }: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage.startsWith("http")
      ? post.coverImage
      : `https://blog.superlend.xyz${post.coverImage}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author.name,
      image: post.author.picture?.startsWith("http")
        ? post.author.picture
        : `https://blog.superlend.xyz${post.author.picture}`,
    },
    publisher: {
      "@type": "Organization",
      name: "Superlend",
      logo: {
        "@type": "ImageObject",
        url: "https://blog.superlend.xyz/favicon/apple-touch-icon.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
