import Avatar from "@/app/_components/avatar";
import CoverImage from "@/app/_components/cover-image";
import { type Author } from "@/interfaces/author";
import Link from "next/link";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <section className="max-w-4xl mx-auto mb-20 mt-12">
      <div className="mb-8 rounded-xl overflow-hidden max-w-full max-h-64 md:max-h-80">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      
      <div className="text-center space-y-6">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight text-adaptive">
            <Link href={`/posts/${slug}`} className="hover:text-primary transition-colors">
              {title}
            </Link>
          </h2>
          
          <p className="text-lg text-muted leading-relaxed max-w-2xl mx-auto">
            {excerpt}
          </p>
        </div>
        
        <div className="flex items-center justify-center space-x-4 text-sm text-muted">
          <DateFormatter dateString={date} />
          <span>•</span>
          <span>{author.name}</span>
        </div>
        
        <Link 
          href={`/posts/${slug}`}
          className="inline-block btn-primary"
        >
          Read More
        </Link>
      </div>
    </section>
  );
}
