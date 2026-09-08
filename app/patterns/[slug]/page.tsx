"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";

const patternDetails: Record<
  string,
  {
    name: string;
    price: number;
    rating: number;
    reviewsCount: number;
    description: string;
    features: string[];
    images: string[];
    category: string;
    tag: string;
  }
> = {
  "daisy-tote-bag": {
    name: "Daisy Tote Bag Pattern",
    price: 500,
    rating: 5,
    reviewsCount: 24,
    description:
      "A beginner friendly pattern to make your own daisy square tote bag. Includes detailed step-by-step stitch guides and video assistance.",
    features: [
      "Digital PDF",
      "Step-by-step instructions",
      "Photo tutorial",
      "Instant download",
    ],
    images: [
      "https://images.unsplash.com/photo-1584992236310-6edddc08acff?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop",
    ],
    category: "Bags",
    tag: "Beginner",
  },
  "summer-top": {
    name: "Summer Top Pattern",
    price: 500,
    rating: 5,
    reviewsCount: 18,
    description:
      "Lightweight, breezy crochet crop top pattern perfect for warm sunny days and festival layering.",
    features: [
      "Digital PDF",
      "Size inclusive (XS - XXL)",
      "Photo tutorial",
      "Instant download",
    ],
    images: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584992236310-6edddc08acff?q=80&w=800&auto=format&fit=crop",
    ],
    category: "Clothing",
    tag: "Intermediate",
  },
  "granny-cardigan": {
    name: "Granny Cardigan Pattern",
    price: 600,
    rating: 5,
    reviewsCount: 31,
    description:
      "Cozy oversized patchwork cardigan pattern featuring classic daisy motifs with modern ribbing.",
    features: [
      "Digital PDF",
      "Assembly schematic & layout",
      "Photo tutorial",
      "Instant download",
    ],
    images: [
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=800&auto=format&fit=crop",
    ],
    category: "Clothing",
    tag: "Intermediate",
  },
  "mesh-market-bag": {
    name: "Mesh Market Bag Pattern",
    price: 400,
    rating: 5,
    reviewsCount: 16,
    description:
      "Stretchy, durable eco-friendly market bag pattern. Fast project that can be completed in a single afternoon.",
    features: [
      "Digital PDF",
      "Quick weekend project",
      "Photo tutorial",
      "Instant download",
    ],
    images: [
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop",
    ],
    category: "Bags",
    tag: "Beginner",
  },
};

export default function PatternDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = (params?.slug as string) || "daisy-tote-bag";
  const item = patternDetails[slug] || patternDetails["daisy-tote-bag"];

  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(
      {
        id: `${slug}-pattern`,
        name: item.name,
        type: "pattern",
        typeLabel: "Digital",
        price: item.price,
        image: item.images[0],
      },
      quantity
    );
  };

  const handleBuyNow = () => {
    handleAddToCart();
    router.push("/checkout");
  };

  return (
    <div className="w-full bg-[#faf6f0] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Breadcrumbs */}
        <nav className="text-[11px] text-[#857a6e] uppercase tracking-wider mb-6 flex items-center space-x-2">
          <Link href="/" className="hover:text-[#2c2724]">Home</Link>
          <span>/</span>
          <Link href="/patterns" className="hover:text-[#2c2724]">Patterns</Link>
          <span>/</span>
          <span className="text-[#2c2724] font-medium">{item.name}</span>
        </nav>

        {/* Product Page - Pattern Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-[#faf6f0]">
          {/* Left Column: Vertical Thumbnails + Main Image */}
          <div className="lg:col-span-7 flex flex-col-reverse sm:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex sm:flex-col gap-3 shrink-0">
              {item.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImg(idx)}
                  className={`w-16 h-20 rounded-sm overflow-hidden bg-[#ece3d6] border transition-all ${
                    selectedImg === idx
                      ? "border-[#b38865] ring-1 ring-[#b38865]"
                      : "border-[#e0d6c8] opacity-70 hover:opacity-100"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 aspect-[4/5] bg-[#ece3d6] rounded-sm overflow-hidden shadow-sm">
              <img
                src={item.images[selectedImg]}
                alt={item.name}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Right Column: Details & Purchase */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h1 className="font-serif text-2xl sm:text-3xl font-normal text-[#2c2724]">
                {item.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-1.5 text-amber-500 text-xs">
                <span>★★★★★</span>
                <span className="text-[#887f74] text-xs">({item.reviewsCount} reviews)</span>
              </div>

              {/* Price */}
              <p className="font-serif text-xl font-medium text-[#2c2724]">
                KSh {item.price.toLocaleString()}
              </p>

              {/* Description */}
              <p className="text-xs text-[#6e6459] font-light leading-relaxed">
                {item.description}
              </p>

              {/* Feature bullets */}
              <ul className="space-y-1.5 text-xs text-[#524940] font-light list-disc list-inside pt-2">
                {item.features.map((feat, idx) => (
                  <li key={idx}>{feat}</li>
                ))}
              </ul>
            </div>

            {/* Action buttons */}
            <div className="space-y-3 pt-4 border-t border-[#e8dfd2]">
              <div className="flex items-center gap-3">
                {/* Qty Selector */}
                <div className="flex items-center border border-[#d8cec1] bg-white h-11 px-2 rounded-none">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-2 text-sm text-[#73695d] hover:text-black"
                  >
                    -
                  </button>
                  <span className="px-3 text-xs font-semibold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-2 text-sm text-[#73695d] hover:text-black"
                  >
                    +
                  </button>
                </div>

                {/* Add to Cart */}
                <button
                  onClick={handleAddToCart}
                  className="flex-1 h-11 bg-[#6d7760] hover:bg-[#5a644f] text-[#faf6f0] text-xs font-semibold tracking-[0.18em] uppercase transition-colors flex items-center justify-center rounded-none"
                >
                  ADD TO CART
                </button>
              </div>

              {/* Buy Now */}
              <button
                onClick={handleBuyNow}
                className="w-full h-11 bg-[#d5bfab] hover:bg-[#caa993] text-[#2c2621] text-xs font-semibold tracking-[0.18em] uppercase transition-colors rounded-none"
              >
                Buy now
              </button>

              {/* Wishlist */}
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="w-full flex items-center justify-center gap-2 text-xs text-[#73695e] hover:text-[#2c2724] py-2"
              >
                <span>{isWishlisted ? "♥" : "♡"}</span>
                <span>{isWishlisted ? "Saved to wishlist" : "Add to wishlist"}</span>
              </button>
            </div>

            {/* Meta tags & Badges */}
            <div className="pt-4 border-t border-[#e8dfd2] space-y-3">
              <div className="flex items-center gap-4 text-[11px] text-[#73695e]">
                <span className="flex items-center gap-1">⚡ Instant Download</span>
                <span className="flex items-center gap-1">🌱 Beginner Friendly</span>
                <span className="flex items-center gap-1">📖 Detailed Instructions</span>
              </div>
              <p className="text-[11px] text-[#8e8477]">
                Category: <span className="text-[#3a342f] font-medium">{item.category}</span> | Tag: <span className="text-[#3a342f] font-medium">{item.tag}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
