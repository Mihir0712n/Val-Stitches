import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full min-h-[70vh] bg-[#faf6f0] flex items-center justify-center py-16 sm:py-24 px-4">
      <div className="max-w-xl mx-auto text-center space-y-6">
        {/* Subtle decorative motif */}
        <div className="flex items-center justify-center gap-2 text-[#9e9386]">
          <span className="w-8 h-[1px] bg-[#dcd3c5]" />
          <span className="text-sm">✦</span>
          <span className="w-8 h-[1px] bg-[#dcd3c5]" />
        </div>

        {/* Large 404 number */}
        <p className="font-serif text-7xl sm:text-8xl text-[#6d7760]/80 font-light tracking-widest leading-none">
          404
        </p>

        {/* Heading */}
        <div className="space-y-2">
          <h1 className="font-serif text-2xl sm:text-3xl text-[#2c2724] font-normal uppercase tracking-wide">
            Looks like we dropped a stitch!
          </h1>
          <p className="font-serif italic text-base text-[#6d6357] font-light">
            The page you are looking for has unraveled or doesn&apos;t exist.
          </p>
        </div>

        <p className="text-xs sm:text-sm text-[#7e7469] font-light max-w-md mx-auto leading-relaxed">
          Don&apos;t worry, you can easily find your way back to our collection of handmade crochet pieces and beginner-friendly digital patterns.
        </p>

        {/* Action buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
          <Link
            href="/"
            className="px-7 py-3 bg-[#6d7760] hover:bg-[#5b644f] text-[#faf6f0] text-xs font-semibold tracking-[0.18em] uppercase transition-colors shadow-sm"
          >
            RETURN HOME
          </Link>
          <Link
            href="/patterns"
            className="px-7 py-3 bg-[#d5bfab] hover:bg-[#caa993] text-[#2c2621] text-xs font-semibold tracking-[0.18em] uppercase transition-colors shadow-sm"
          >
            BROWSE PATTERNS
          </Link>
        </div>

        {/* Helpful quick links */}
        <div className="pt-8 border-t border-[#e8dfd2] mt-8">
          <p className="text-[11px] font-medium tracking-wider uppercase text-[#887e72] mb-3">
            POPULAR DESTINATIONS
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-[#524a41]">
            <Link href="/patterns/daisy-tote-bag" className="hover:text-[#6d7760] underline underline-offset-4">
              Daisy Tote Bag Pattern
            </Link>
            <span>•</span>
            <Link href="/handmade/crochet-tote-bag" className="hover:text-[#6d7760] underline underline-offset-4">
              Crochet Tote Bag
            </Link>
            <span>•</span>
            <Link href="/handmade" className="hover:text-[#6d7760] underline underline-offset-4">
              Handmade Collection
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-[#6d7760] underline underline-offset-4">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
