"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const BackgroundImage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const pathname = usePathname();

  if (pathname !== "/") {
    return null;
  }

  return (
    <div className="fixed inset-0 -z-10">
      <Image
        alt=""
        className={`object-cover transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        fetchPriority="low"
        fill
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        quality={75}
        src="/assets/decorative/bg-cloud.webp"
        style={{ objectPosition: "center" }}
        unoptimized
      />
    </div>
  );
};

export { BackgroundImage };
