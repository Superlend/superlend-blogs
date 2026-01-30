import type { Heading } from "./extract-headings";
import { slugify } from "./slugify";

// Recursive helper to extract text from Tina JSON nodes
function getJsonNodeText(node: any): string {
  if (!node) return "";
  // Leaf text node
  if (node.type === "text" && node.text) {
    return node.text;
  }
  // Parent node (paragraph, bold, link, etc)
  if (node.children && Array.isArray(node.children)) {
    return node.children.map(getJsonNodeText).join("");
  }
  return "";
}

/**
 * Extract headings from TinaCMS Rich Text JSON
 * Used to build table of contents efficiently on client side
 */
export function extractHeadingsFromTina(content: any): Heading[] {
  if (!content || !content.children || !Array.isArray(content.children)) {
    return [];
  }

  const headings: Heading[] = [];

  content.children.forEach((node: any) => {
    if (node.type === "h2" || node.type === "h3") {
      const text = getJsonNodeText(node);

      if (text.trim()) {
        const id = slugify(text);
        const level = node.type === "h2" ? 2 : 3;
        headings.push({ id, text, level });
      }
    }
  });

  return headings;
}
