import { type Post } from "@/interfaces/post";

const BASE_URL = "https://blog.superlend.xyz";

function safeJsonLd(obj: Record<string, unknown>): string {
  return JSON.stringify(obj).replace(/<\/script/gi, "<\\/script");
}

interface HomepageSchemaProps {
  posts: Post[];
}

export function HomepageSchema({ posts }: HomepageSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Superlend Blog",
    description:
      "Stay updated with the latest insights from Superlend - the leading DeFi lending and borrowing aggregator.",
    url: BASE_URL,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: posts.slice(0, 10).map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${BASE_URL}/posts/${post.slug}`,
        name: post.title,
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }}
    />
  );
}
