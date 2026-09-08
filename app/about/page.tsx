import React from "react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="w-full bg-[#faf6f0] py-14 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        <div className="text-center space-y-3">
          <h1 className="font-serif text-3xl sm:text-4xl text-[#2c2724] uppercase tracking-wider">
            Our Story
          </h1>
          <p className="font-serif italic text-[#73695e] text-base">
            Handmade with love, stitched for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="aspect-[4/5] bg-[#ece3d6] rounded-sm overflow-hidden shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1584992236310-6edddc08acff?q=80&w=800&auto=format&fit=crop"
              alt="Val Stitches Craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-4 text-xs sm:text-sm text-[#5a5046] font-light leading-relaxed">
            <p>
              Welcome to <strong>Val Stitches</strong>. What started as a mindful hobby around kitchen tables has blossomed into a curated studio celebrating modern crochet art, downloadable maker patterns, and bespoke slow-fashion pieces.
            </p>
            <p>
              Every pattern is written with clarity and beginner-friendly guidance, empowering makers worldwide to experience the soothing joy of creating with their own hands.
            </p>
            <p>
              For our handmade collection, every single piece is made-to-order using high-quality cottons, gentle organic wools, and earth-toned palettes designed to endure season after season.
            </p>
            <div className="pt-4">
              <Link
                href="/patterns"
                className="inline-block px-6 py-3 bg-[#6d7760] text-white text-xs uppercase tracking-wider font-semibold"
              >
                Explore Patterns
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
