import Footer from "@/app/_components/footer";
import { CMS_NAME, HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import cn from "classnames";
import { AmplitudeAnalyticsProvider } from "@/context/amplitude-analytics-provider";

import "./globals.css";

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
  // Get Amplitude API key from environment variables
  const amplitudeApiKey = process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY || '';

  return (
    <html lang="en" data-mode="light">
      <head>
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
        <AmplitudeAnalyticsProvider apiKey={amplitudeApiKey}>
          <div className="min-h-screen">{children}</div>
          <Footer />
        </AmplitudeAnalyticsProvider>
      </body>
    </html>
  );
}
