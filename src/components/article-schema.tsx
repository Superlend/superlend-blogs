import { Post } from "@/interfaces/post";

const BASE_URL = "https://blog.superlend.xyz";

function toAbsoluteUrl(path: string): string {
  return path.startsWith("http") ? path : `${BASE_URL}${path}`;
}

function safeJsonLd(obj: Record<string, unknown>): string {
  return JSON.stringify(obj).replace(/<\/script/gi, "<\\/script");
}

interface ArticleSchemaProps {
  post: Post;
  url: string;
}

export function ArticleSchema({ post, url }: ArticleSchemaProps) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: toAbsoluteUrl(post.coverImage),
    datePublished: post.date,
    dateModified: post.modifiedDate || post.date,
    author: {
      "@type": "Person",
      name: post.author.name,
      image: post.author.picture ? toAbsoluteUrl(post.author.picture) : undefined,
    },
    publisher: {
      "@type": "Organization",
      name: "Superlend",
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/favicon/apple-touch-icon.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BASE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: post.title,
        item: url,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(breadcrumbSchema) }}
      />
    </>
  );
}
