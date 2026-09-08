import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full bg-[#faf6f0] overflow-hidden">
      {/* Main Hero Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-6 pb-10 sm:py-12 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-5 flex flex-col items-start justify-center z-10">
            <h1 className="font-serif text-[#292420] text-5xl sm:text-6xl lg:text-[68px] font-normal leading-[1.08] tracking-tight">
              Handmade
              <br />
              <span className="italic font-light font-serif text-[#484039]">with love.</span>
              <br />
              <span>Stitched for you.</span>
            </h1>

            <p className="mt-5 sm:mt-6 text-[#70675c] text-xs sm:text-sm font-light leading-relaxed max-w-sm">
              Crochet patterns for makers &amp; handmade pieces for everyday beauty.
            </p>

            {/* Buttons */}
            <div className="mt-7 sm:mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/patterns"
                className="px-6 py-3 bg-[#6b765f] hover:bg-[#5a644f] text-[#faf6f0] text-[11px] font-semibold tracking-[0.16em] uppercase transition-colors shadow-sm text-center"
              >
                SHOP PATTERNS
              </Link>
              <Link
                href="/handmade"
                className="px-6 py-3 bg-[#d5bfab] hover:bg-[#caa993] text-[#2c2621] text-[11px] font-semibold tracking-[0.16em] uppercase transition-colors shadow-sm text-center"
              >
                SHOP HANDMADE
              </Link>
            </div>
          </div>

          {/* Right Column: Exact Hero Image from Mockup */}
          <div className="lg:col-span-7 relative w-full flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[560px] aspect-[4/3] sm:aspect-[16/11] lg:aspect-[1.25/1] overflow-hidden rounded-sm bg-[#ece4d8] shadow-[0_8px_24px_rgba(0,0,0,0.04)]">
              <img
                src="/images/hero-daisy-bag.png"
                alt="Handmade Crochet Daisy Square Tote Bag on table with yarn and dried florals"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 4-Item Feature & Trust Proposition Bar */}
      <div className="w-full border-t border-b border-[#eae1d5] bg-[#faf6f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-5 sm:py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-6 lg:gap-8">
            {/* 1: Digital Patterns */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 shrink-0 flex items-center justify-center text-[#738069]">
                <svg
                  className="w-5 h-5 stroke-[1.5]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#292420]">
                  DIGITAL PATTERNS
                </h4>
                <p className="text-[11px] text-[#7d746a] font-light mt-0.5">
                  Instant download
                </p>
              </div>
            </div>

            {/* 2: Handmade Items */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 shrink-0 flex items-center justify-center text-[#738069]">
                <svg
                  className="w-5 h-5 stroke-[1.5]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#292420]">
                  HANDMADE ITEMS
                </h4>
                <p className="text-[11px] text-[#7d746a] font-light mt-0.5">
                  Made to order
                </p>
              </div>
            </div>

            {/* 3: Secure Payments */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 shrink-0 flex items-center justify-center text-[#738069]">
                <svg
                  className="w-5 h-5 stroke-[1.5]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <rect
                    x="2"
                    y="5"
                    width="20"
                    height="14"
                    rx="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <line
                    x1="2"
                    y1="10"
                    x2="22"
                    y2="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#292420]">
                  SECURE PAYMENTS
                </h4>
                <p className="text-[11px] text-[#7d746a] font-light mt-0.5">
                  M-Pesa &amp; Card
                </p>
              </div>
            </div>

            {/* 4: Worldwide Shipping */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 shrink-0 flex items-center justify-center text-[#738069]">
                <svg
                  className="w-5 h-5 stroke-[1.5]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h2m-7 0a2 2 0 100 4 2 2 0 000-4zm10 0a2 2 0 100 4 2 2 0 000-4z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#292420]">
                  WORLDWIDE SHIPPING
                </h4>
                <p className="text-[11px] text-[#7d746a] font-light mt-0.5">
                  Fast &amp; reliable
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}