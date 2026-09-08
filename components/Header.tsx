"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();

  return (
    <header className="w-full sticky top-0 z-40 shadow-[0_1px_3px_rgba(0,0,0,0.03)] bg-[#faf6f0]">
      {/* Top Announcement Bar */}
      <div className="bg-[#b38865] text-[#faf6f0] text-[11px] sm:text-xs tracking-wider py-2 px-4 text-center font-normal flex items-center justify-center gap-2">
        <svg
          className="w-3.5 h-3.5 opacity-90"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>
        <span>Free shipping on orders over KSh 7,000</span>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-20 sm:h-24 flex items-center justify-between">
        {/* Left: Brand Logo */}
        <Link href="/" className="flex flex-col items-start group">
          <span className="font-serif text-2xl sm:text-3xl font-normal tracking-[0.22em] text-[#2c2724] uppercase leading-none">
            VAL
          </span>
          <span className="font-serif text-xs sm:text-sm font-light tracking-[0.38em] text-[#3d3733] uppercase -mt-0.5 ml-0.5">
            STITCHES
          </span>
          <span className="text-[8px] sm:text-[9px] tracking-[0.26em] text-[#8c8278] uppercase mt-0.5">
            HANDMADE WITH LOVE
          </span>
        </Link>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-7 lg:space-x-9 text-[11px] lg:text-xs font-medium tracking-[0.18em] text-[#332e2a] uppercase">
          <Link
            href="/"
            className="transition-colors hover:text-[#b38865] py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-[#b38865] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
          >
            HOME
          </Link>

          {/* Patterns Dropdown */}
          <div className="relative group">
            <Link
              href="/patterns"
              className="flex items-center gap-1 transition-colors hover:text-[#b38865] py-1"
            >
              <span>PATTERNS</span>
              <svg
                className="w-3 h-3 text-[#776e65] group-hover:text-[#b38865] transition-transform group-hover:rotate-180"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            <div className="absolute top-full left-0 pt-2 w-48 hidden group-hover:block transition-all z-50">
              <div className="bg-[#faf6f0] border border-[#e7e0d6] rounded-md shadow-lg py-2 text-[11px] tracking-normal capitalize font-normal text-[#443e38]">
                <Link
                  href="/patterns/daisy-tote-bag"
                  className="block px-4 py-2 hover:bg-[#ede6dc] transition-colors"
                >
                  Daisy Tote Bag Pattern
                </Link>
                <Link
                  href="/patterns/summer-top"
                  className="block px-4 py-2 hover:bg-[#ede6dc] transition-colors"
                >
                  Summer Top Pattern
                </Link>
                <Link
                  href="/patterns/granny-cardigan"
                  className="block px-4 py-2 hover:bg-[#ede6dc] transition-colors"
                >
                  Granny Cardigan Pattern
                </Link>
                <Link
                  href="/patterns/mesh-market-bag"
                  className="block px-4 py-2 hover:bg-[#ede6dc] transition-colors"
                >
                  Mesh Market Bag Pattern
                </Link>
                <div className="border-t border-[#e5ddd3] my-1" />
                <Link
                  href="/patterns"
                  className="block px-4 py-2 font-medium text-[#b38865] hover:bg-[#ede6dc] transition-colors"
                >
                  View All Patterns →
                </Link>
              </div>
            </div>
          </div>

          <Link
            href="/handmade"
            className="transition-colors hover:text-[#b38865] py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-[#b38865] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
          >
            HANDMADE
          </Link>
          <Link
            href="/about"
            className="transition-colors hover:text-[#b38865] py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-[#b38865] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
          >
            ABOUT
          </Link>
          <Link
            href="/journal"
            className="transition-colors hover:text-[#b38865] py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-[#b38865] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
          >
            JOURNAL
          </Link>
          <Link
            href="/contact"
            className="transition-colors hover:text-[#b38865] py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-[#b38865] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
          >
            CONTACT
          </Link>
        </nav>

        {/* Right: Actions (Search, Account, Cart, Mobile Toggle) */}
        <div className="flex items-center space-x-4 sm:space-x-5 text-[#332e2a]">
          {/* Search Button */}
          <button
            type="button"
            aria-label="Search"
            onClick={() => setSearchOpen(!searchOpen)}
            className="p-1.5 hover:text-[#b38865] transition-colors rounded-full focus:outline-none focus:ring-1 focus:ring-[#b38865]"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M17 10.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
              />
            </svg>
          </button>

          {/* Account Icon */}
          <Link
            href="/account"
            aria-label="Account"
            className="p-1.5 hover:text-[#b38865] transition-colors rounded-full focus:outline-none focus:ring-1 focus:ring-[#b38865]"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </Link>

          {/* Cart Icon with Live Counter */}
          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            aria-label="Cart"
            className="p-1.5 hover:text-[#b38865] transition-colors rounded-full relative focus:outline-none focus:ring-1 focus:ring-[#b38865]"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#b38865] text-[#faf6f0] text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center leading-none">
                {totalItems}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-[#332e2a] hover:text-[#b38865] transition-colors focus:outline-none"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Expandable Search Bar */}
      {searchOpen && (
        <div className="bg-[#f3ede3] border-t border-[#e6ddd2] py-3 px-4 sm:px-8 transition-all">
          <div className="max-w-3xl mx-auto flex items-center gap-3">
            <svg
              className="w-5 h-5 text-[#8c8278]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M17 10.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search patterns, handmade pieces, crochet yarns..."
              className="w-full bg-transparent text-sm text-[#332e2a] placeholder-[#8c8278] outline-none border-b border-[#b38865]/40 focus:border-[#b38865] pb-1 font-light"
              autoFocus
            />
            <button
              onClick={() => setSearchOpen(false)}
              className="text-xs uppercase tracking-wider text-[#8c8278] hover:text-[#332e2a]"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#faf6f0] border-t border-[#eae3d9] px-6 py-5 space-y-4 text-xs font-medium tracking-[0.16em] uppercase text-[#332e2a]">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1 hover:text-[#b38865]"
          >
            HOME
          </Link>
          <div className="space-y-2">
            <Link
              href="/patterns"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1 text-[#b38865] font-semibold"
            >
              PATTERNS
            </Link>
            <div className="pl-4 space-y-2 text-[11px] capitalize tracking-normal text-[#5a524a]">
              <Link href="/patterns/daisy-tote-bag" onClick={() => setMobileMenuOpen(false)} className="block">
                Daisy Tote Bag Pattern
              </Link>
              <Link href="/patterns/summer-top" onClick={() => setMobileMenuOpen(false)} className="block">
                Summer Top Pattern
              </Link>
              <Link href="/patterns/granny-cardigan" onClick={() => setMobileMenuOpen(false)} className="block">
                Granny Cardigan Pattern
              </Link>
              <Link href="/patterns/mesh-market-bag" onClick={() => setMobileMenuOpen(false)} className="block">
                Mesh Market Bag Pattern
              </Link>
            </div>
          </div>
          <Link
            href="/handmade"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1 hover:text-[#b38865]"
          >
            HANDMADE
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1 hover:text-[#b38865]"
          >
            ABOUT
          </Link>
          <Link
            href="/journal"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1 hover:text-[#b38865]"
          >
            JOURNAL
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1 hover:text-[#b38865]"
          >
            CONTACT
          </Link>
        </div>
      )}
    </header>
  );
}
