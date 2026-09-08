"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import FeaturedPatterns from "@/components/FeaturedPatterns";
import FeaturedHandmade from "@/components/FeaturedHandmade";

export default function CategoryPage() {
  const params = useParams();
  const slug = (params?.slug as string) || "bags";
  const title = slug.replace("-", " ").toUpperCase();

  return (
    <div className="w-full bg-[#faf6f0] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Breadcrumb */}
        <nav className="text-[11px] text-[#857a6e] uppercase tracking-wider mb-6 flex items-center space-x-2">
          <Link href="/" className="hover:text-[#2c2724]">Home</Link>
          <span>/</span>
          <span className="text-[#2c2724] font-medium">{title}</span>
        </nav>

        <div className="text-center py-6 mb-4">
          <h1 className="font-serif text-3xl sm:text-4xl text-[#2c2724] uppercase tracking-wide">
            {title}
          </h1>
          <p className="text-xs sm:text-sm text-[#73695e] font-light mt-2">
            Explore patterns and handmade collections in {title.toLowerCase()}.
          </p>
        </div>
      </div>

      <FeaturedPatterns />
      <FeaturedHandmade />
    </div>
  );
}
