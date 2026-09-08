import React from "react";
import FeaturedHandmade from "@/components/FeaturedHandmade";
import SplitPromoBanner from "@/components/SplitPromoBanner";

export default function HandmadePage() {
  return (
    <div className="w-full bg-[#faf6f0] py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mb-6">
        <div className="text-center py-8">
          <h1 className="font-serif text-3xl sm:text-4xl text-[#2c2724] font-normal tracking-wide uppercase">
            Handmade Collection
          </h1>
          <p className="text-xs sm:text-sm text-[#73695e] font-light mt-2 max-w-md mx-auto">
            Each piece is made to order and crocheted with love, stitch by stitch.
          </p>
        </div>
      </div>
      <FeaturedHandmade />
      <SplitPromoBanner />
    </div>
  );
}
