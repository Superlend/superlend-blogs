"use client";

import { memo, useEffect, useState } from "react";

declare global {
  var updateDOM: () => void;
}

type ColorSchemePreference = "system" | "dark" | "light";

const STORAGE_KEY = "superlend-blog-theme";
const modes: ColorSchemePreference[] = ["system", "dark", "light"];

/** function to be injected in script tag for avoiding FOUC (Flash of Unstyled Content) */
export const NoFOUCScript = (storageKey: string) => {
  const [SYSTEM, DARK, LIGHT] = ["system", "dark", "light"];

  const modifyTransition = () => {
    const css = document.createElement("style");
    css.textContent = "*,*:after,*:before{transition:none !important;}";
    document.head.appendChild(css);

    return () => {
      getComputedStyle(document.body);
      setTimeout(() => document.head.removeChild(css), 1);
    };
  };

  const media = matchMedia(`(prefers-color-scheme: ${DARK})`);

  const updateDOM = () => {
    const restoreTransitions = modifyTransition();
    const mode = localStorage.getItem(storageKey) ?? SYSTEM;
    const systemMode = media.matches ? DARK : LIGHT;
    const resolvedMode = mode === SYSTEM ? systemMode : mode;
    const classList = document.documentElement.classList;
    if (resolvedMode === DARK) classList.add(DARK);
    else classList.remove(DARK);
    document.documentElement.setAttribute("data-mode", mode);
    restoreTransitions();
  };

  updateDOM();
  media.addEventListener("change", updateDOM);
  
  // Make updateDOM available globally
  window.updateDOM = updateDOM;
};

// Icon components
const SunIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const MoonIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

const SystemIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

/**
 * Switch button to quickly toggle user preference.
 */
const Switch = () => {
  const [mode, setMode] = useState<ColorSchemePreference>("system");
  const [mounted, setMounted] = useState(false);

  // Only run on client side after hydration
  useEffect(() => {
    setMounted(true);
    const savedMode = localStorage.getItem(STORAGE_KEY) as ColorSchemePreference;
    if (savedMode && modes.includes(savedMode)) {
      setMode(savedMode);
    }

    // Sync across tabs
    const handleStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY && e.newValue) {
        setMode(e.newValue as ColorSchemePreference);
      }
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem(STORAGE_KEY, mode);
      if (window.updateDOM) {
        window.updateDOM();
      }
    }
  }, [mode, mounted]);

  const handleModeSwitch = () => {
    const index = modes.indexOf(mode);
    setMode(modes[(index + 1) % modes.length]);
  };

  // Get the actual resolved theme (what's currently being displayed)
  const getResolvedTheme = () => {
    if (mode === "system") {
      // Check if user prefers dark mode
      if (typeof window !== "undefined") {
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      }
      return "light";
    }
    return mode;
  };

  const getIcon = () => {
    // Show icon based on selected mode, not resolved theme
    switch (mode) {
      case "light":
        return <SunIcon />;
      case "dark":
        return <MoonIcon />;
      case "system":
        return <SystemIcon />;
      default:
        return <SystemIcon />;
    }
  };

  const getTooltip = () => {
    const nextMode = modes[(modes.indexOf(mode) + 1) % modes.length];
    const currentDisplay = mode === "system" ? `${mode} (${getResolvedTheme()})` : mode;
    return `Current: ${currentDisplay}. Click to switch to ${nextMode}.`;
  };

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <button
        className="p-2 rounded-lg text-adaptive hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors opacity-0 pointer-events-none"
        aria-label="Loading theme switcher"
      >
        <SystemIcon />
      </button>
    );
  }

  return (
    <button
      onClick={handleModeSwitch}
      className="p-2 rounded-lg text-adaptive hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label={`Switch to ${modes[(modes.indexOf(mode) + 1) % modes.length]} mode`}
      title={getTooltip()}
    >
      {getIcon()}
    </button>
  );
};

const Script = memo(() => (
  <script
    dangerouslySetInnerHTML={{
      __html: `(${NoFOUCScript.toString()})('${STORAGE_KEY}')`,
    }}
  />
));

Script.displayName = 'ThemeScript';

/**
 * This component applies theme classes and transitions.
 */
export const ThemeSwitcher = () => {
  return (
    <>
      <Script />
      <Switch />
    </>
  );
};
