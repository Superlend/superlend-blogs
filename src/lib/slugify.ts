/**
 * Generate a URL-friendly slug from text
 * Used for heading IDs and URL segments
 */
export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric chars with hyphen
    .replace(/^-+|-+$/g, ""); // Remove leading/trailing hyphens
}
