"use client";

import React, { useState } from "react";
import Link from "next/link";

const categories = [
  {
    name: "BAGS",
    href: "/category/bags",
    image: "/images/cat-bags.png",
    fallback:
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "CLOTHING",
    href: "/category/clothing",
    image: "/images/cat-clothing.png",
    fallback:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "ACCESSORIES",
    href: "/category/accessories",
    image: "/images/cat-accessories.png",
    fallback:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "HOME DÉCOR",
    href: "/category/home-decor",
    image: "/images/cat-home.png",
    fallback:
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "BABY",
    href: "/category/baby",
    image: "/images/cat-baby.png",
    fallback:
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "VIEW ALL",
    href: "/shop",
    isViewAll: true,
    image: "/images/cat-viewall.png",
    fallback:
      "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=400&auto=format&fit=crop",
  },
];

export default function ShopByCategory() {
  return (
    <section className="w-full bg-[#faf6f0] py-14 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header with decorative ornament */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="font-serif text-base sm:text-lg md:text-xl font-normal tracking-[0.24em] text-[#2c2724] uppercase">
            SHOP BY CATEGORY
          </h2>
          <div className="flex items-center justify-center gap-2 mt-2 text-[#a89d91]">
            <span className="w-6 h-[1px] bg-[#ddd3c5]" />
            <span className="text-[10px]">✦</span>
            <span className="w-6 h-[1px] bg-[#ddd3c5]" />
          </div>
        </div>

        {/* Categories Circle Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 justify-items-center">
          {categories.map((cat, idx) => (
            <Link
              key={idx}
              href={cat.href}
              className="flex flex-col items-center group cursor-pointer w-full max-w-[120px]"
            >
              {/* Circular Thumbnail Container */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full overflow-hidden border border-[#d8cec0] shadow-sm bg-[#ece4d8] transition-all duration-300 group-hover:scale-105 group-hover:border-[#b38865] group-hover:shadow-md">
                <img
                  src={cat.image}
                  alt={cat.name}
                  onError={(e) => {
                    // Fallback to high-res image if local crop is unavailable
                    (e.target as HTMLImageElement).src = cat.fallback;
                  }}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />

                {cat.isViewAll && (
                  <div className="absolute inset-0 bg-[#2b2520]/25 backdrop-blur-[0.5px] flex items-center justify-center text-white">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2] transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                )}
              </div>

              {/* Category Name Label */}
              <span className="mt-3 text-[10px] sm:text-[11px] font-medium tracking-[0.18em] uppercase text-[#38322d] group-hover:text-[#b38865] transition-colors text-center">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
