"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { TrackedLink } from "@/components/analytics/tracked-link";
import { LINKS } from "@/lib/constants";

const BLOG_TABS = [
  "DeFi Insights",
  "Market Trends",
  "Product Updates",
  "About",
];

const Header = () => {
  // const [activeTab, setActiveTab] = useState("DeFi Insights");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        bg-white bg-opacity-50 backdrop-blur-lg
    `}
    >
      <div className="max-w-7xl mx-auto max-md:px-2">
        {/* Top Row: Logo + External Links + Subscribe */}
        <div className="flex items-center justify-between py-4 border-b border-gray-200/20 dark:border-gray-700/20">
          {/* Logo */}
          <TrackedLink
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            eventName="header_logo_click"
            eventData={{ section: "header", element: "logo" }}
          >
            <Image
              src="/assets/superlend-logo.webp"
              alt="Superlend"
              width={176}
              height={24.59}
              className="my-auto w-28 shrink-0 cursor-pointer object-contain lg:w-44 "
            />
          </TrackedLink>

          {/* Right: External Links + Subscribe (Desktop) */}
          <div className="hidden md:flex items-center gap-6">
            <TrackedLink
              href={LINKS.AGGREGATOR}
              target="_blank"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
              eventName="header_external_click"
              eventData={{ section: "header", element: "aggregator" }}
            >
              Discover
            </TrackedLink>
            <TrackedLink
              href={LINKS.MARKETS}
              target="_blank"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
              eventName="header_external_click"
              eventData={{ section: "header", element: "markets" }}
            >
              Markets
            </TrackedLink>
            <TrackedLink
              href={LINKS.SUPERFUND}
              target="_blank"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
              eventName="header_external_click"
              eventData={{ section: "header", element: "superfund" }}
            >
              SuperFund
            </TrackedLink>
            <TrackedLink
              href={LINKS.VAULTS}
              target="_blank"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
              eventName="header_external_click"
              eventData={{ section: "header", element: "superloop" }}
            >
              Vaults
            </TrackedLink>

            {/* <button
              className="px-6 py-2 bg-primary hover:bg-primary/90 text-white rounded-full text-sm font-medium transition-all hover:scale-105"
              onClick={() => {
                // Add newsletter subscription logic here
                alert("Newsletter subscription coming soon!");
              }}
            >
              Subscribe Now
            </button> */}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-600 dark:text-gray-400"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Bottom Row: Horizontal Tabs (Desktop) */}
        {/* <div className="hidden md:flex items-center gap-8 py-3">
          {BLOG_TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                text-sm font-medium transition-all pb-2 border-b-2
                ${
                  activeTab === tab
                    ? "text-primary border-primary"
                    : "text-gray-600 dark:text-gray-400 border-transparent hover:text-primary hover:border-primary/50"
                }
              `}
            >
              {tab}
            </button>
          ))}
        </div> */}
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200/20 dark:border-gray-700/20 bg-white/40 dark:bg-gray-900/95 backdrop-blur-lg">
          <div className="py-4 space-y-3">
            {/* Blog Tabs */}
            {/* {BLOG_TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setIsMobileMenuOpen(false);
                }}
                className={`
                  block w-full text-left px-4 py-2 rounded-lg transition-colors
                  ${
                    activeTab === tab
                      ? "bg-primary/10 text-primary font-medium"
                      : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }
                `}
              >
                {tab}
              </button>
            ))} */}

            <div className="space-y-3">
              <TrackedLink
                href={LINKS.MARKETS}
                target="_blank"
                className="block px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                eventName="mobile_external_click"
                eventData={{ element: "markets" }}
              >
                Markets
              </TrackedLink>
              <TrackedLink
                href={LINKS.AGGREGATOR}
                target="_blank"
                className="block px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                eventName="mobile_external_click"
                eventData={{ element: "aggregator" }}
              >
                Aggregator
              </TrackedLink>
              <TrackedLink
                href={LINKS.SUPERFUND}
                target="_blank"
                className="block px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                eventName="mobile_external_click"
                eventData={{ element: "superfund" }}
              >
                SuperFund
              </TrackedLink>
            </div>

            {/* <button
              className="w-full px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-full font-medium transition-all"
              onClick={() => alert("Newsletter subscription coming soon!")}
            >
              Subscribe Now
            </button> */}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
