"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";

const handmadeDetails: Record<
  string,
  {
    name: string;
    price: number;
    description: string;
    images: string[];
    colors: { name: string; hex: string }[];
    category: string;
  }
> = {
  "crochet-tote-bag": {
    name: "Crochet Tote Bag",
    price: 2500,
    description:
      "Carefully handcrafted using premium 100% cotton yarn. Perfect everyday carry with reinforced shoulder straps and spacious interior.",
    images: [
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584992236310-6edddc08acff?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=800&auto=format&fit=crop",
    ],
    colors: [
      { name: "Olive Green", hex: "#6d7760" },
      { name: "Warm Cream", hex: "#f0e6d6" },
      { name: "Mustard", hex: "#c99a4c" },
      { name: "Mocha Brown", hex: "#7a5a43" },
    ],
    category: "Bags, Handmade",
  },
  "granny-square-cardigan": {
    name: "Granny Square Cardigan",
    price: 4500,
    description:
      "Hand-stitched vintage floral motif cardigan. Extremely soft, lightweight yet cozy warm for chilly evenings.",
    images: [
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
    ],
    colors: [
      { name: "Multicolor Pastel", hex: "#e2cfbd" },
      { name: "Earth Tones", hex: "#8c725d" },
    ],
    category: "Clothing, Handmade",
  },
  "bucket-hat": {
    name: "Bucket Hat",
    price: 1500,
    description:
      "Breathable cotton crochet bucket hat for sun protection with chic boho flair.",
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop",
    ],
    colors: [
      { name: "Sage Green", hex: "#828f76" },
      { name: "Natural Beige", hex: "#e5d9c8" },
    ],
    category: "Accessories, Handmade",
  },
  "crochet-baby-set": {
    name: "Crochet Baby Set",
    price: 2800,
    description:
      "Ultra-soft baby booties and bonnet set made with certified baby-friendly organic wool.",
    images: [
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=800&auto=format&fit=crop",
    ],
    colors: [
      { name: "Oatmeal", hex: "#dfd5c6" },
      { name: "Soft Sage", hex: "#95a38a" },
    ],
    category: "Baby, Handmade",
  },
};

export default function HandmadeDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = (params?.slug as string) || "crochet-tote-bag";
  const item = handmadeDetails[slug] || handmadeDetails["crochet-tote-bag"];

  const [selectedImg, setSelectedImg] = useState(0);
  const [selectedColor, setSelectedColor] = useState(item.colors[0]?.name || "Natural");
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(
      {
        id: `${slug}-${selectedColor}`,
        name: `${item.name} (${selectedColor})`,
        type: "handmade",
        typeLabel: "Handmade",
        price: item.price,
        image: item.images[0],
        color: selectedColor,
      },
      quantity
    );
  };

  return (
    <div className="w-full bg-[#faf6f0] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Breadcrumbs */}
        <nav className="text-[11px] text-[#857a6e] uppercase tracking-wider mb-6 flex items-center space-x-2">
          <Link href="/" className="hover:text-[#2c2724]">Home</Link>
          <span>/</span>
          <Link href="/handmade" className="hover:text-[#2c2724]">Handmade</Link>
          <span>/</span>
          <span className="text-[#2c2724] font-medium">{item.name}</span>
        </nav>

        {/* Product Page - Handmade Layout */}
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

              {/* Price */}
              <p className="font-serif text-xl font-medium text-[#2c2724]">
                KSh {item.price.toLocaleString()}
              </p>

              {/* Made to order notice */}
              <div className="flex items-center gap-2 text-xs text-[#6e7a60] font-medium">
                <span className="w-2 h-2 rounded-full bg-[#6e7a60] animate-pulse" />
                <span>Made to order</span>
              </div>
              <p className="text-[11px] text-[#8c8276] font-light -mt-2">
                Please allow 5-7 working days
              </p>

              {/* Color selector */}
              <div className="space-y-2 pt-2">
                <label className="text-xs font-semibold tracking-wider text-[#3d362f] uppercase">
                  Color: <span className="font-normal text-[#6f655b]">{selectedColor}</span>
                </label>
                <div className="flex items-center space-x-2.5">
                  {item.colors.map((color, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedColor(color.name)}
                      title={color.name}
                      style={{ backgroundColor: color.hex }}
                      className={`w-6 h-6 rounded-full border shadow-sm transition-transform ${
                        selectedColor === color.name
                          ? "ring-2 ring-[#6d7760] scale-110 border-white"
                          : "border-gray-300 hover:scale-105"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-[#6e6459] font-light leading-relaxed pt-2">
                {item.description}
              </p>
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

              {/* Wishlist */}
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="w-full flex items-center justify-center gap-2 text-xs text-[#73695e] hover:text-[#2c2724] py-2"
              >
                <span>{isWishlisted ? "♥" : "♡"}</span>
                <span>{isWishlisted ? "Saved to wishlist" : "Add to wishlist"}</span>
              </button>
            </div>

            {/* Value bullets */}
            <div className="pt-4 border-t border-[#e8dfd2] space-y-2 text-xs text-[#524940] font-light">
              <p className="flex items-center gap-2">
                <span>♡</span> Handmade with love
              </p>
              <p className="flex items-center gap-2">
                <span>✦</span> High quality yarn
              </p>
              <p className="flex items-center gap-2">
                <span>✂</span> Carefully crafted
              </p>
              <p className="text-[11px] text-[#8e8477] pt-2">
                Categories: <span className="text-[#3a342f] font-medium">{item.category}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
