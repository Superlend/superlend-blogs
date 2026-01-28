"use client";

import { motion } from "motion/react";

export default function Hero() {
  const text = "The latest insights from Superlend";

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.03,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="max-w-7xl mx-auto pt-12 flex gap-4 flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-sm text-secondary-navy dark:text-white font-medium flex items-center justify-center py-2 px-4 rounded-[12px] w-fit bg-white bg-opacity-50 opacity-75"
      >
        Superlend Blog
      </motion.div>
      <motion.h1
        variants={container}
        initial="hidden"
        animate="show"
        className="text-4xl md:text-6xl xl:text-[60px] font-medium text-secondary-navy dark:text-white text-center max-w-[14ch] leading-tight"
      >
        {text.split("").map((char, index) => (
          <motion.span key={index} variants={letter} className="inline-block">
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
}
