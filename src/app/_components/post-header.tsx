import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { PostTitle } from "@/app/_components/post-title";
import { type Author } from "@/interfaces/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
};

export function PostHeader({ title, coverImage, date, author }: Props) {
  return (
    <header className="mb-12">
      {/* Title and Meta */}
      <div className="text-center mb-8">
        <PostTitle>{title}</PostTitle>
        <div className="flex items-center justify-center space-x-4 text-sm text-muted mt-4">
          <DateFormatter dateString={date} />
          <span>•</span>
          <span>{author.name}</span>
        </div>
      </div>
      
      {/* Cover Image */}
      <div className="mb-8 rounded-xl overflow-hidden max-w-full max-h-64 md:max-h-80">
        <CoverImage title={title} src={coverImage} />
      </div>
    </header>
  );
}
