import Footer from "@/app/_components/footer";
import { CMS_NAME, HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import cn from "classnames";

import "./globals.css";

// Theme script to prevent FOUC
const ThemeScript = () => (
  <script
    dangerouslySetInnerHTML={{
      __html: `
        (function() {
          const [SYSTEM, DARK, LIGHT] = ["system", "dark", "light"];
          const STORAGE_KEY = "superlend-blog-theme";
          
          const modifyTransition = () => {
            const css = document.createElement("style");
            css.textContent = "*,*:after,*:before{transition:none !important;}";
            document.head.appendChild(css);
            return () => {
              getComputedStyle(document.body);
              setTimeout(() => document.head.removeChild(css), 1);
            };
          };
          
          const media = matchMedia("(prefers-color-scheme: " + DARK + ")");
          
          const updateDOM = () => {
            const restoreTransitions = modifyTransition();
            const mode = localStorage.getItem(STORAGE_KEY) || SYSTEM;
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
          window.updateDOM = updateDOM;
        })();
      `,
    }}
  />
);

export const metadata: Metadata = {
  title: `Superlend Blog - DeFi Insights & Updates`,
  description: `Stay updated with the latest insights from Superlend - the leading DeFi lending and borrowing aggregator. Discover trends, strategies, and innovations in decentralized finance.`,
  openGraph: {
    images: [HOME_OG_IMAGE_URL],
    title: "Superlend Blog - DeFi Insights & Updates",
    description: "Stay updated with the latest insights from Superlend - the leading DeFi lending and borrowing aggregator.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ThemeScript />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#FF5B00"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#FF5B00" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#FF5B00" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body
        className={cn("font-sans bg-background text-secondary-dark min-h-screen")}
      >
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
