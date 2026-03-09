import { getAllPosts } from "@/lib/api";

export async function GET() {
  const posts = getAllPosts();
  const baseUrl = "https://blog.superlend.xyz";

  const items = posts
    .map((post) => {
      const pubDate = new Date(post.date).toUTCString();
      const url = `${baseUrl}/posts/${post.slug}`;

      return `    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description><![CDATA[${post.excerpt}]]></description>
      <pubDate>${pubDate}</pubDate>
      <author>blog@superlend.xyz (${post.author.name})</author>
      <category>${post.category}</category>
    </item>`;
    })
    .join("\n");

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Superlend Blog</title>
    <link>${baseUrl}</link>
    <description>Stay updated with the latest insights from Superlend - the leading DeFi lending and borrowing aggregator.</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(feed, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
