import Footer from "@/components/footer";
import { CMS_NAME, HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import cn from "classnames";
import localFont from "next/font/local";
import { AmplitudeAnalyticsProvider } from "@/context/amplitude-analytics-provider";
import { PostHogProvider } from "@/context/posthog-provider";
import { PostHogPageView } from "@/components/analytics/posthog-page-view";
import { SiteSchema } from "@/components/site-schema";

import "./globals.css";
import { BackgroundImage } from "../components/background-image";
import Script from "next/script";

const basierCircle = localFont({
  src: [
    { path: "../../public/fonts/basier-circle/BasierCircle-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/basier-circle/BasierCircle-Italic.woff2", weight: "400", style: "italic" },
    { path: "../../public/fonts/basier-circle/BasierCircle-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/basier-circle/BasierCircle-MediumItalic.woff2", weight: "500", style: "italic" },
    { path: "../../public/fonts/basier-circle/BasierCircle-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/basier-circle/BasierCircle-SemiBoldItalic.woff2", weight: "600", style: "italic" },
    { path: "../../public/fonts/basier-circle/BasierCircle-Bold.woff2", weight: "700", style: "normal" },
    { path: "../../public/fonts/basier-circle/BasierCircle-BoldItalic.woff2", weight: "700", style: "italic" },
  ],
  variable: "--font-basier",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://blog.superlend.xyz"),
  title: `Superlend Blog - DeFi Insights & Updates`,
  description: `Stay updated with the latest insights from Superlend - the leading DeFi lending and borrowing aggregator. Discover trends, strategies, and innovations in decentralized finance.`,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    images: [HOME_OG_IMAGE_URL],
    title: "Superlend Blog - DeFi Insights & Updates",
    description:
      "Stay updated with the latest insights from Superlend - the leading DeFi lending and borrowing aggregator.",
    type: "website",
    siteName: "Superlend Blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Superlend Blog - DeFi Insights & Updates",
    description:
      "Stay updated with the latest insights from Superlend - the leading DeFi lending and borrowing aggregator.",
    images: [HOME_OG_IMAGE_URL],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Get Amplitude API key from environment variables
  const amplitudeApiKey = process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY || "";

  return (
    <html lang="en" data-mode="light" className={basierCircle.variable} suppressHydrationWarning>
      <head>
        <SiteSchema />
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
        className={cn(
          "font-sans bg-background text-secondary-dark min-h-screen",
        )}
        suppressHydrationWarning
      >
        <BackgroundImage />
        <AmplitudeAnalyticsProvider apiKey={amplitudeApiKey}>
          <PostHogProvider>
            <PostHogPageView />
            <div className="min-h-screen">{children}</div>
            <Footer />
          </PostHogProvider>
        </AmplitudeAnalyticsProvider>
      </body>
      <Script
        src="https://scripts.ahrefs.com/ae.js"
        strategy="afterInteractive"
        data-project-id="EbD32RmwTubQE3StFq2h4Q"
      />
    </html>
  );
}
