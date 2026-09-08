import React from "react";
import Link from "next/link";

export default function SplitPromoBanner() {
  return (
    <section className="w-full bg-[#faf6f0] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-stretch">
          {/* Left Card: MAKE IT YOURSELF */}
          <div className="relative overflow-hidden bg-[#ebe2d6] p-6 sm:p-8 lg:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-sm">
            {/* Left Image thumbnail */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 shrink-0 rounded-sm overflow-hidden bg-[#ded3c3] shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=400&auto=format&fit=crop"
                alt="Make it yourself crochet pattern sample"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col items-center sm:items-start text-center sm:text-left space-y-2">
              <h3 className="font-serif text-base sm:text-lg font-medium tracking-[0.16em] uppercase text-[#2b2723]">
                MAKE IT YOURSELF
              </h3>
              <p className="text-xs text-[#6e6459] font-light leading-relaxed max-w-xs">
                Download a pattern and create something beautiful with your own hands.
              </p>
              <div className="pt-2">
                <Link
                  href="/patterns"
                  className="inline-block px-5 py-2 bg-white/80 hover:bg-white text-[#2b2723] text-[10px] font-semibold tracking-[0.18em] uppercase transition-colors shadow-sm"
                >
                  SHOP PATTERNS
                </Link>
              </div>
            </div>
          </div>

          {/* Center OR Badge (Desktop overlap) */}
          <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-[#6d7760] text-white items-center justify-center font-serif text-xs font-medium tracking-widest shadow-md border-2 border-[#faf6f0]">
            OR
          </div>

          {/* Right Card: LET VAL MAKE IT FOR YOU */}
          <div className="relative overflow-hidden bg-[#e6dfd3] p-6 sm:p-8 lg:p-10 flex flex-col sm:flex-row-reverse items-center justify-between gap-6 rounded-sm">
            {/* Right Image thumbnail */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 shrink-0 rounded-sm overflow-hidden bg-[#ded3c3] shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1584992236310-6edddc08acff?q=80&w=400&auto=format&fit=crop"
                alt="Let Val make it handmade yarn pieces"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col items-center sm:items-start text-center sm:text-left space-y-2">
              <h3 className="font-serif text-base sm:text-lg font-medium tracking-[0.16em] uppercase text-[#2b2723]">
                LET VAL MAKE IT FOR YOU
              </h3>
              <p className="text-xs text-[#6e6459] font-light leading-relaxed max-w-xs">
                Choose a handmade piece and we&apos;ll stitch it with love for you.
              </p>
              <div className="pt-2">
                <Link
                  href="/handmade"
                  className="inline-block px-5 py-2 bg-[#6d7760] hover:bg-[#5c6652] text-[#faf6f0] text-[10px] font-semibold tracking-[0.18em] uppercase transition-colors shadow-sm"
                >
                  SHOP HANDMADE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
