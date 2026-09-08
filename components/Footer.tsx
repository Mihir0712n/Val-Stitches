import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#828f76] text-[#f4f2ec]">
      {/* Main Footer Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 items-start">
          {/* Column 1: Brand & Logo */}
          <div className="lg:col-span-1 flex flex-col items-start">
            <Link href="/" className="inline-block group">
              <span className="font-serif text-2xl sm:text-3xl font-normal tracking-[0.22em] text-[#faf8f4] uppercase block leading-none">
                VAL
              </span>
              <span className="font-serif text-xs sm:text-sm font-light tracking-[0.38em] text-[#f2efe8] uppercase block mt-0.5 ml-0.5">
                STITCHES
              </span>
              <span className="text-[8px] sm:text-[9px] tracking-[0.26em] text-[#ded9cd] uppercase block mt-1">
                HANDMADE WITH LOVE
              </span>
            </Link>
          </div>

          {/* Column 2: SHOP */}
          <div className="flex flex-col space-y-3">
            <h3 className="text-xs font-semibold tracking-[0.2em] text-[#faf8f4] uppercase">
              SHOP
            </h3>
            <ul className="space-y-2 text-xs font-light tracking-wide text-[#e9e6dd]">
              <li>
                <Link href="/patterns" className="hover:text-white transition-colors">
                  Patterns
                </Link>
              </li>
              <li>
                <Link href="/handmade" className="hover:text-white transition-colors">
                  Handmade
                </Link>
              </li>
              <li>
                <Link href="/gift-cards" className="hover:text-white transition-colors">
                  Gift Cards
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: HELP */}
          <div className="flex flex-col space-y-3">
            <h3 className="text-xs font-semibold tracking-[0.2em] text-[#faf8f4] uppercase">
              HELP
            </h3>
            <ul className="space-y-2 text-xs font-light tracking-wide text-[#e9e6dd]">
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-white transition-colors">
                  Shipping &amp; Delivery
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-white transition-colors">
                  Returns &amp; Refunds
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: ABOUT */}
          <div className="flex flex-col space-y-3">
            <h3 className="text-xs font-semibold tracking-[0.2em] text-[#faf8f4] uppercase">
              ABOUT
            </h3>
            <ul className="space-y-2 text-xs font-light tracking-wide text-[#e9e6dd]">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/care-instructions" className="hover:text-white transition-colors">
                  Care Instructions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: FOLLOW */}
          <div className="flex flex-col space-y-3">
            <h3 className="text-xs font-semibold tracking-[0.2em] text-[#faf8f4] uppercase">
              FOLLOW
            </h3>
            <div className="flex items-center space-x-3.5 pt-1 text-[#f4f2ec]">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full border border-[#9ca791] flex items-center justify-center hover:border-white hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeLinecap="round" strokeWidth="2.5" />
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-8 h-8 rounded-full border border-[#9ca791] flex items-center justify-center hover:border-white hover:text-white transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.88 2.89 2.89 0 01-2.89-2.88 2.89 2.89 0 012.89-2.89c.35 0 .69.06 1 .17V9.08a6.38 6.38 0 00-1-.08A6.34 6.34 0 003 15.34a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.22a8.28 8.28 0 004.91 1.62V7.39a4.88 4.88 0 01-1-.7z" />
                </svg>
              </a>

              {/* Pinterest */}
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
                className="w-8 h-8 rounded-full border border-[#9ca791] flex items-center justify-center hover:border-white hover:text-white transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.334 1.373-.056.23-.186.279-.429.167-1.602-.746-2.602-3.088-2.602-4.97 0-4.047 2.94-7.765 8.483-7.765 4.454 0 7.915 3.174 7.915 7.417 0 4.427-2.791 7.99-6.664 7.99-1.301 0-2.524-.676-2.942-1.474l-.801 3.052c-.29 1.111-1.076 2.503-1.603 3.359C9.728 23.834 10.844 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                </svg>
              </a>

              {/* Mail */}
              <a
                href="mailto:hello@valstitches.com"
                aria-label="Email"
                className="w-8 h-8 rounded-full border border-[#9ca791] flex items-center justify-center hover:border-white hover:text-white transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sub-Footer Bar */}
      <div className="border-t border-[#929e87]/60">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#ded9cb] font-light">
          <p>© 2025 Val Stitches. All Rights Reserved.</p>
          <div className="flex items-center space-x-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
