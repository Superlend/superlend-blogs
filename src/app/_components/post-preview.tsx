import { type Author } from "@/interfaces/author";
import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <article className="group">
      <Link href={`/posts/${slug}`} className="block">
        <div className="mb-4 overflow-hidden rounded-lg aspect-[16/9] bg-gray-100 dark:bg-gray-800">
          <CoverImage title={title} src={coverImage} />
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center text-sm text-muted">
            <DateFormatter dateString={date} />
            <span className="mx-2">•</span>
            <span>{author.name}</span>
          </div>
          
          <h3 className="text-lg md:text-xl font-semibold leading-tight text-adaptive group-hover:text-primary transition-colors">
            {title}
          </h3>
          
          <p className="text-muted leading-relaxed line-clamp-2 text-sm md:text-base">
            {excerpt}
          </p>
        </div>
      </Link>
    </article>
  );
}
