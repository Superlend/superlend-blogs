import Image from "next/image";
import DateFormatter from "./date-formatter";
import { type Author } from "@/interfaces/author";
import { calculateReadingTime, formatReadingTime } from "@/lib/reading-time";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
  content: string; // Added to calculate reading time
};

export function PostHeader({
  title,
  coverImage,
  date,
  author,
  content,
}: Props) {
  const readTime = calculateReadingTime(content);

  return (
    <header className="mb-12">
      {/* Title - MASSIVE for impact */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-secondary-navy dark:text-white mb-6 leading-tight tracking-tight md:max-w-[80%]">
        {title}
      </h1>

      {/* Meta Bar - Clean, High Contrast, NO glassmorphic blur */}
      <div className="lg:hidden flex items-center gap-4 md:gap-6 text-sm text-gray-600 dark:text-gray-400 border-l-4 border-primary pl-4 md:pl-6 py-3 mb-8">
        <div className="flex items-center gap-2">
          <Image
            src={author.picture || "/assets/default-avatar.png"}
            alt={author.name}
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="font-medium text-secondary-navy dark:text-white">
            {author.name}
          </span>
        </div>
        <span className="hidden sm:inline">•</span>
        <div className="flex items-center gap-2">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <DateFormatter dateString={date} />
        </div>
        <span className="hidden sm:inline">•</span>
        <div className="flex items-center gap-2">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{formatReadingTime(readTime)}</span>
        </div>
      </div>

      {/* Cover Image - Clean, No Blur */}
      {/* <div className="relative aspect-[21/9] rounded-xl overflow-hidden shadow-lg">
        <Image
          src={coverImage}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </div> */}
    </header>
  );
}
