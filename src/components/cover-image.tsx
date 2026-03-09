import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  src: string;
  slug?: string;
  isPriority?: boolean;
};

const CoverImage = ({ title, src, slug, isPriority = false }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className="shadow-sm w-full h-full object-cover object-center hover:shadow-lg transition-shadow duration-200"
      width={1300}
      height={630}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      priority={isPriority}
      loading={isPriority ? undefined : "lazy"}
    />
  );
  return (
    <div className="sm:mx-0 w-full h-full">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
