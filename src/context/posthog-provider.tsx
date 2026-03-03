"use client";

import { createContext, ReactNode, useContext, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { posthog, initPostHog } from "@/lib/analytics/posthog";
import type PostHogType from "posthog-js";

interface PostHogContextValue {
  posthog: typeof PostHogType | null;
}

const PostHogContext = createContext<PostHogContextValue>({ posthog: null });

export function PostHogProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    initPostHog();
  }, []);

  return (
    <PostHogContext.Provider value={{ posthog }}>
      {children}
    </PostHogContext.Provider>
  );
}

/**
 * Access the PostHog instance from any client component.
 *
 * Returns `null` when PostHog hasn't initialised yet (e.g. SSR,
 * missing API key, or before the provider mounts).
 */
export function usePostHog(): typeof PostHogType | null {
  const ctx = useContext(PostHogContext);
  return ctx.posthog ?? null;
}
