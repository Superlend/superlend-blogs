import Link from "next/link";
import Image from "next/image";
import type { Post } from "@/interfaces/post";
import { TrackedLink } from "@/components/analytics/tracked-link";
import { calculateReadingTime, formatReadingTime } from "@/lib/reading-time";
import DateFormatter from "./date-formatter";

interface HeroBannerProps {
  featuredPost: Post;
}

const POPULAR_CATEGORIES = [
  "Yield Farming",
  "Staking",
  "Crypto Regulation",
  "Web3",
  "Crypto Funding",
  "DeFi Protocols",
];

export function HeroPost({ featuredPost }: HeroBannerProps) {
  console.log(featuredPost);
  const readTime = calculateReadingTime(featuredPost.content);

  return (
    <section className="relative pt-12 pb-6 px-2 md:px-6 overflow-hidden">
      {/* Cloud background */}
      {/* <div className="absolute inset-0 cloud-background" /> */}

      <div className="relative max-w-7xl w-full mx-auto">
        <div className="grid grid-cols-1 gap-6">
          {/* Featured Article (2 columns) */}
          <TrackedLink
            href={`/posts/${featuredPost.slug}`}
            className="active:scale-95 transition-transform duration-300 ease-out"
            eventName="featured_article_click"
            eventData={{
              section: "hero",
              element: "read_article_button",
              post_title: featuredPost.title,
              post_slug: featuredPost.slug,
            }}
          >
            <div className="lg:col-span-2">
              <div className="bg-white bg-opacity-40 hover:bg-opacity-70 transition duration-150 ease-in-out rounded-4 p-2 h-full flex flex-col md:flex-row gap-6">
                {/* Featured Image */}
                <div className="md:w-1/2 relative aspect-[4/3] md:aspect-auto md:min-h-[280px] rounded-soft overflow-hidden flex-shrink-0">
                  <Image
                    src={featuredPost.coverImage}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Content */}
                <div className="md:w-1/2 flex flex-col justify-between p-4 min-h-full">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-secondary-navy dark:text-white mb-4 line-clamp-3">
                    {featuredPost.title}
                  </h2>
                  {/* <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
                    {featuredPost.excerpt}
                  </p> */}
                  <div className="flex justify-between items-center gap-2 text-secondary-navy flex-wrap opacity-75">
                    <DateFormatter dateString={featuredPost.date} />
                    {/* <span>•</span> */}
                    <span>{formatReadingTime(readTime)}</span>
                  </div>
                </div>
              </div>
            </div>
          </TrackedLink>

          {/* Popular Categories (1 column) */}
          {/* <div
            className="glass-card rounded-4 p-6 animate-fade-in"
            style={{ animationDelay: "100ms" }}
          >
            <h3 className="text-xl font-semibold text-secondary-navy dark:text-white mb-4">
              Popular Categories
            </h3>
            <div className="flex flex-wrap gap-2">
              {POPULAR_CATEGORIES.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-primary/10 dark:hover:bg-primary/20 backdrop-blur-sm text-secondary-navy dark:text-white text-sm font-medium transition-all hover:scale-105"
                >
                  {category}
                </button>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
