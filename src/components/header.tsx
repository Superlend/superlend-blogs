"use client";

import Image from "next/image";
import { TrackedLink } from "@/components/analytics/tracked-link";
import { LINKS } from "@/lib/constants";

const BLOG_TABS = [
  "DeFi Insights",
  "Market Trends",
  "Product Updates",
  "About",
];

const Header = () => {
  return (
    <header>
      <div className="max-w-7xl mx-auto max-md:px-2 max-xl:px-4">
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
          <div className="flex items-center gap-6">
            {/* <TrackedLink
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
            </TrackedLink> */}

            <TrackedLink
              href={LINKS.LANDING}
              target="_blank"
              className="md:px-6 md:py-2 px-4 py-2 bg-primary hover:bg-primary/90 active:scale-100 text-white rounded-full text-sm font-medium transition-all hover:scale-105"
              eventName="header_launch_app_click"
              eventData={{ section: "header", element: "launch_app" }}
            >
              Launch App
            </TrackedLink>
          </div>

          {/* Mobile menu button */}
          {/* <button
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
          </button> */}
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
      {/* <AnimatePresence key="mobile-menu">
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 400 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 400 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 top-12 left-0 right-0 h-full flex items-center justify-center md:hidden border-t border-gray-200/20 dark:border-gray-700/20 bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg"
          >
            <div className="space-y-8 text-2xl">
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
          </motion.div>
        )}
      </AnimatePresence> */}
    </header>
  );
};

export default Header;
