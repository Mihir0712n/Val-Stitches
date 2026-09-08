"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export const featuredHandmadeData = [
  {
    id: "crochet-tote-bag",
    name: "Crochet Tote Bag",
    slug: "crochet-tote-bag",
    price: 2500,
    image: "/images/hand-crochet-tote.png",
    type: "handmade" as const,
    typeLabel: "Handmade" as const,
  },
  {
    id: "granny-square-cardigan",
    name: "Granny Square Cardigan",
    slug: "granny-square-cardigan",
    price: 4500,
    image: "/images/hand-cardigan.png",
    type: "handmade" as const,
    typeLabel: "Handmade" as const,
  },
  {
    id: "bucket-hat",
    name: "Bucket Hat",
    slug: "bucket-hat",
    price: 1500,
    image: "/images/hand-bucket-hat.png",
    type: "handmade" as const,
    typeLabel: "Handmade" as const,
  },
  {
    id: "crochet-baby-set",
    name: "Crochet Baby Set",
    slug: "crochet-baby-set",
    price: 2800,
    image: "/images/hand-baby-set.png",
    type: "handmade" as const,
    typeLabel: "Handmade" as const,
  },
];

export default function FeaturedHandmade() {
  const { addToCart } = useCart();
  const [wishlist, setWishlist] = useState<string[]>([]);

  const toggleWishlist = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <section className="w-full bg-[#faf6f0] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex items-end justify-between border-b border-[#e7ded3] pb-4 mb-8">
          <h2 className="font-serif text-lg sm:text-xl font-medium tracking-[0.22em] text-[#2c2724] uppercase">
            FEATURED HANDMADE
          </h2>
          <Link
            href="/handmade"
            className="text-[11px] font-medium tracking-[0.16em] uppercase text-[#73695e] hover:text-[#b38865] flex items-center gap-1 transition-colors"
          >
            <span>VIEW ALL HANDMADE</span>
            <span>→</span>
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6 lg:gap-7">
          {featuredHandmadeData.map((product) => (
            <div key={product.id} className="group flex flex-col">
              {/* Image Container with Wishlist Heart Button */}
              <div className="relative aspect-[4/5] bg-[#eee7dd] rounded-sm overflow-hidden mb-3">
                <Link href={`/handmade/${product.slug}`} className="block w-full h-full">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                  />
                </Link>

                {/* Wishlist Heart Icon */}
                <button
                  type="button"
                  aria-label="Add to wishlist"
                  onClick={(e) => toggleWishlist(product.id, e)}
                  className="absolute top-2.5 right-2.5 w-7 h-7 bg-white/80 hover:bg-white text-[#554d45] hover:text-rose-500 rounded-full flex items-center justify-center shadow-sm transition-transform hover:scale-110"
                >
                  <svg
                    className={`w-3.5 h-3.5 stroke-[1.8] ${
                      wishlist.includes(product.id)
                        ? "fill-rose-500 stroke-rose-500"
                        : "fill-none stroke-current"
                    }`}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>

                {/* Quick Add overlay button */}
                <button
                  type="button"
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
                  className="absolute bottom-0 inset-x-0 bg-[#6d7760]/90 hover:bg-[#5c6652] text-white text-[10px] tracking-widest uppercase font-semibold py-2 text-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Quick Add
                </button>
              </div>

              {/* Product Info */}
              <Link href={`/handmade/${product.slug}`}>
                <h3 className="font-serif text-sm font-normal text-[#2b2723] group-hover:text-[#b38865] transition-colors line-clamp-1">
                  {product.name}
                </h3>
              </Link>
              <p className="text-xs font-semibold text-[#443e38] mt-0.5">
                KSh {product.price.toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
