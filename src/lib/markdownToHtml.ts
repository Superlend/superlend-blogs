import { remark } from "remark";
import html from "remark-html";
import rehypeSlug from "rehype-slug";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";

export default async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkParse) // Parse markdown
    .use(remarkRehype) // Convert to HTML AST
    .use(rehypeSlug) // Add IDs to headings
    .use(rehypeStringify, { allowDangerousHtml: true }) // Convert to HTML string
    .process(markdown);

  let htmlContent = result.toString();

  // Post-process to add target="_blank" to external links
  htmlContent = htmlContent.replace(
    /<a href="(https?:\/\/[^"]+)"([^>]*)>/g,
    '<a href="$1" target="_blank" rel="noopener noreferrer"$2>',
  );

  return htmlContent;
}
