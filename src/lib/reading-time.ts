/**
 * Calculate reading time for blog content
 * Average reading speed: 225 words per minute
 */
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 225;

  // Remove HTML tags and count words
  const text = content.replace(/<[^>]*>/g, "");
  const wordCount = text.trim().split(/\s+/).length;

  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return Math.max(1, minutes); // Minimum 1 minute
}

export function formatReadingTime(minutes: number): string {
  return `${minutes} min read`;
}
