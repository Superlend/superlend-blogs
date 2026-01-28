import { type Author } from "@/interfaces/author";
import Link from "next/link";
import DateFormatter from "./date-formatter";
import { Badge } from "./badge";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
  readTime?: string;
  isFeatured?: boolean;
  isSmall?: boolean;
};

export function FeaturedPostCard({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  readTime = "2 min read",
  isFeatured = false,
  isSmall = false,
}: Props) {
  const cardHeight = isSmall ? "h-64" : "h-96 lg:h-[500px]";

  return (
    <article className={`group relative overflow-hidden rounded-2xl ${cardHeight}`}>
      <Link href={`/posts/${slug}`} className="block h-full">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0">
          <img
            src={coverImage}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out transform-gpu will-change-transform group-hover:scale-[1.02] origin-center"
          />
          {/* Gradient overlay similar to EO blog */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 group-hover:from-black/70" />
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/30 via-transparent to-orange-500/20 transition-opacity duration-300 group-hover:from-emerald-600/40" />
        </div>

        {/* Content Overlay */}
        <div className="relative h-full flex flex-col justify-between p-6 text-white">
          {/* Top section with badges */}
          <div className="flex items-start justify-between">
            {/* EO Protocol Logo/Icon equivalent */}
            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <img
                  src={'/assets/superlend-orange-symbol.svg'}
                  alt={title}
                  className="w-4 h-4"
                />
              </div>
            </div>

            {/* Featured badge */}
            {isFeatured && (
              <Badge variant="secondary" className="bg-white/50 backdrop-blur-sm text-yellow-800/75 border-white/30">
                ⭐ Featured
              </Badge>
            )}
          </div>

          {/* Bottom section with content */}
          <div className="space-y-4">
            <h3 className={`font-bold leading-tight text-white transition-all duration-300 ease-out group-hover:text-emerald-300 group-hover:transform group-hover:translate-y-[-2px] ${isSmall ? "text-lg" : "text-2xl lg:text-3xl"
              }`}>
              {title}
            </h3>

            <div className="flex items-center space-x-3 text-white/80 text-sm transition-all duration-300 group-hover:text-white/90">
              <DateFormatter dateString={date} />
              <span>•</span>
              <span>{readTime}</span>
            </div>
          </div>
        </div>

        {/* Hover effect overlay */}
        <div className="absolute inset-0 bg-emerald-600/0 group-hover:bg-emerald-600/5 transition-all duration-500 ease-out" />
      </Link>
    </article>
  );
} 