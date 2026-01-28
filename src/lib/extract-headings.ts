import { JSDOM } from "jsdom";

export interface Heading {
  id: string;
  text: string;
  level: number; // 2 or 3 (h2, h3)
}

/**
 * Extract headings from rendered HTML content
 * Used to build table of contents
 */
export function extractHeadings(html: string): Heading[] {
  const dom = new JSDOM(html);
  const document = dom.window.document;

  const headings: Heading[] = [];
  const headingElements = document.querySelectorAll("h2, h3");

  headingElements.forEach((element) => {
    const level = parseInt(element.tagName.substring(1)); // h2 -> 2, h3 -> 3
    const text = element.textContent || "";
    let id = element.id;

    // Generate ID if missing (fallback)
    if (!id) {
      id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
      element.id = id;
    }

    headings.push({ id, text, level });
  });

  return headings;
}
