"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { TrackedLink } from "@/components/analytics/tracked-link";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="header-bg border-b relative z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo and Brand */}
            <TrackedLink 
              href="/" 
              className="flex items-center space-x-1 hover:opacity-80 transition-opacity"
              eventName="header_logo_click"
              eventData={{ section: 'header', element: 'logo' }}
            >
              <Image
                src="/assets/superlend-logo.svg"
                alt="Superlend Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <div>
                <h1 className="text-xl font-bold text-adaptive">
                  Superlend <span className="text-primary">Blog</span>
                </h1>
              </div>
            </TrackedLink>

            {/* Navigation */}
            <div className="flex items-center space-x-6">
              {/* Navigation Links */}
              <nav className="hidden md:flex items-center space-x-6">
                <TrackedLink 
                  href="https://markets.superlend.xyz/" 
                  target="_blank"
                  className="text-adaptive hover:text-primary transition-colors text-sm font-medium"
                  eventName="header_nav_click"
                  eventData={{ section: 'header', element: 'markets_link' }}
                >
                  Markets
                </TrackedLink>
                <TrackedLink 
                  href="https://app.superlend.xyz/" 
                  target="_blank"
                  className="text-adaptive hover:text-primary transition-colors text-sm font-medium"
                  eventName="header_nav_click"
                  eventData={{ section: 'header', element: 'aggregator_link' }}
                >
                  Aggregator
                </TrackedLink>
                <TrackedLink 
                  href="https://funds.superlend.xyz/" 
                  target="_blank"
                  className="text-adaptive hover:text-primary transition-colors text-sm font-medium"
                  eventName="header_nav_click"
                  eventData={{ section: 'header', element: 'superfund_link' }}
                >
                  SuperFund
                </TrackedLink>
                <TrackedLink 
                  href="/" 
                  className="btn-primary text-sm px-4 py-2"
                  eventName="header_nav_click"
                  eventData={{ section: 'header', element: 'all_posts_button' }}
                >
                  All Posts
                </TrackedLink>
              </nav>
              
              {/* Mobile menu button */}
              <div className="md:hidden">
                <button 
                  onClick={toggleMobileMenu}
                  className="text-adaptive hover:text-primary transition-colors"
                  aria-label="Toggle mobile menu"
                >
                  {isMobileMenuOpen ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <div 
        className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={closeMobileMenu}
        ></div>
        
        {/* Mobile Menu Panel */}
        <div 
          className={`absolute top-20 left-0 right-0 header-bg border-b border-gray-200 dark:border-gray-700 shadow-lg transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="px-4 py-3 space-y-1">
            <TrackedLink 
              href="https://markets.superlend.xyz/" 
              target="_blank"
              onClick={closeMobileMenu}
              className="block px-3 py-3 text-adaptive hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors text-base font-medium"
              eventName="mobile_nav_click"
              eventData={{ section: 'mobile_menu', element: 'markets_link' }}
            >
              Markets
            </TrackedLink>
            <TrackedLink 
              href="https://app.superlend.xyz/" 
              target="_blank"
              onClick={closeMobileMenu}
              className="block px-3 py-3 text-adaptive hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors text-base font-medium"
              eventName="mobile_nav_click"
              eventData={{ section: 'mobile_menu', element: 'aggregator_link' }}
            >
              Aggregator
            </TrackedLink>
            <TrackedLink 
              href="https://funds.superlend.xyz/" 
              target="_blank"
              onClick={closeMobileMenu}
              className="block px-3 py-3 text-adaptive hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors text-base font-medium"
              eventName="mobile_nav_click"
              eventData={{ section: 'mobile_menu', element: 'superfund_link' }}
            >
              SuperFund
            </TrackedLink>
            <div className="pt-2">
              <TrackedLink 
                href="/" 
                onClick={closeMobileMenu}
                className="block btn-primary text-center py-3"
                eventName="mobile_nav_click"
                eventData={{ section: 'mobile_menu', element: 'all_posts_button' }}
              >
                All Posts
              </TrackedLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
