"use client";

import React from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export const featuredPatternsData = [
  {
    id: "daisy-tote-bag",
    name: "Daisy Tote Bag Pattern",
    slug: "daisy-tote-bag",
    price: 500,
    rating: 5,
    reviewsCount: 24,
    image: "/images/pat-daisy-tote.png",
    type: "pattern" as const,
    typeLabel: "Digital" as const,
  },
  {
    id: "summer-top",
    name: "Summer Top Pattern",
    slug: "summer-top",
    price: 500,
    rating: 5,
    reviewsCount: 18,
    image: "/images/pat-summer-top.png",
    type: "pattern" as const,
    typeLabel: "Digital" as const,
  },
  {
    id: "granny-cardigan",
    name: "Granny Cardigan Pattern",
    slug: "granny-cardigan",
    price: 600,
    rating: 5,
    reviewsCount: 31,
    image: "/images/pat-granny-cardigan.png",
    type: "pattern" as const,
    typeLabel: "Digital" as const,
  },
  {
    id: "mesh-market-bag",
    name: "Mesh Market Bag Pattern",
    slug: "mesh-market-bag",
    price: 400,
    rating: 5,
    reviewsCount: 16,
    image: "/images/pat-mesh-bag.png",
    type: "pattern" as const,
    typeLabel: "Digital" as const,
  },
];

export default function FeaturedPatterns() {
  const { addToCart } = useCart();

  return (
    <section className="w-full bg-[#faf6f0] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex items-end justify-between border-b border-[#e7ded3] pb-4 mb-8">
          <h2 className="font-serif text-lg sm:text-xl font-medium tracking-[0.22em] text-[#2c2724] uppercase">
            FEATURED PATTERNS
          </h2>
          <Link
            href="/patterns"
            className="text-[11px] font-medium tracking-[0.16em] uppercase text-[#73695e] hover:text-[#b38865] flex items-center gap-1 transition-colors"
          >
            <span>VIEW ALL PATTERNS</span>
            <span>→</span>
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6 lg:gap-7">
          {featuredPatternsData.map((product) => (
            <div key={product.id} className="group flex flex-col">
              {/* Image Container with Quick Cart Button */}
              <div className="relative aspect-[4/5] bg-[#eee7dd] rounded-sm overflow-hidden mb-3">
                <Link href={`/patterns/${product.slug}`} className="block w-full h-full">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                  />
                </Link>

                {/* Add to Cart Icon Button */}
                <button
                  type="button"
                  aria-label="Add pattern to cart"
                  onClick={() =>
                    addToCart({
                      id: product.id,
                      name: product.name,
                      type: product.type,
                      typeLabel: product.typeLabel,
                      price: product.price,
                      image: product.image,
                    })
                  }
                  className="absolute bottom-2.5 right-2.5 w-8 h-8 bg-white/90 hover:bg-white text-[#2c2724] hover:text-[#b38865] rounded-full flex items-center justify-center shadow-md transition-transform hover:scale-110"
                >
                  <svg
                    className="w-4 h-4 stroke-[1.6]"
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
                </button>
              </div>

              {/* Product Info */}
              <Link href={`/patterns/${product.slug}`}>
                <h3 className="font-serif text-sm font-normal text-[#2b2723] group-hover:text-[#b38865] transition-colors line-clamp-1">
                  {product.name}
                </h3>
              </Link>
              <p className="text-xs font-semibold text-[#443e38] mt-0.5">
                KSh {product.price.toLocaleString()}
              </p>

              {/* Star Rating */}
              <div className="flex items-center gap-1 mt-1 text-amber-500 text-[10px]">
                <span>★★★★★</span>
                <span className="text-[#887f75] text-[10px]">({product.reviewsCount})</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
