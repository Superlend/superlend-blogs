import { remark } from "remark";
import html from "remark-html";

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(html, { sanitize: false }) // Allow HTML tags
    .process(markdown);
  
  let htmlContent = result.toString();
  
  // Post-process to add target="_blank" to external links
  htmlContent = htmlContent.replace(
    /<a href="(https?:\/\/[^"]+)"([^>]*)>/g,
    '<a href="$1" target="_blank" rel="noopener noreferrer"$2>'
  );
  
  return htmlContent;
}
