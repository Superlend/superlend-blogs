export default function Hero() {
  const badgeText = "Superlend Blog";
  const mainTitle = "The latest insights from Superlend";

  return (
    <div className="max-w-7xl mx-auto pt-12 flex gap-4 flex-col items-center justify-center ">
      <div className="text-sm text-secondary-navy dark:text-white font-medium flex items-center justify-center py-2 px-4 rounded-[12px] w-fit bg-white bg-opacity-50 opacity-75">
        {badgeText}
      </div>
      <h1 className="text-4xl md:text-6xl xl:text-[60px] font-medium text-secondary-navy dark:text-white text-center max-w-[14ch] leading-tight">
        {mainTitle}
      </h1>
    </div>
  );
}
