"use client";

import { useEffect, useRef } from "react";

/**
 * LayerZero-inspired scroll progress indicator
 * Appears as a thin line at the bottom of the sticky header
 */
export function ScrollProgress() {
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      if (progressBarRef.current) {
        progressBarRef.current.style.width = `${scrollPercent}%`;
      }
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress(); // Initial calculation

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div
      className="fixed left-0 right-0 h-1.5 bg-transparent z-50"
      style={{ top: "var(--header-height, 0px)" }}
    >
      <div
        ref={progressBarRef}
        className="h-full bg-primary"
        style={{ width: "0%" }}
      />
    </div>
  );
}
