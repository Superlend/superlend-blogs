import Image from "next/image";

export function HeroBanner() {
  // Rotate through available cover images
  const coverImages = [
    "/assets/blog/covers/abstract-1.jpg",
    "/assets/blog/covers/abstract-2.jpg", 
    "/assets/blog/covers/abstract-3.jpg",
    "/assets/blog/covers/abstract-4.jpg"
  ];
  
  // Use a different image each time or pick one randomly
  const randomCover = coverImages[Math.floor(Math.random() * coverImages.length)];

  return (
    <section className="relative min-h-[40vh] md:min-h-[50vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={randomCover}
          alt="Hero Background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Simple gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-4">
          {/* Main Title */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Superlend DeFi Blog
          </h1>
          
          {/* Subtitle */}
          <p className="text-base md:text-lg lg:text-xl text-gray-200 max-w-2xl mx-auto">
            The latest insights from Superlend
          </p>
        </div>
      </div>
    </section>
  );
} 