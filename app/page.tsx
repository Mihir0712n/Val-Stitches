import React from "react";
import Hero from "@/components/Hero";
import ShopByCategory from "@/components/ShopByCategory";
import FeaturedPatterns from "@/components/FeaturedPatterns";
import SplitPromoBanner from "@/components/SplitPromoBanner";
import FeaturedHandmade from "@/components/FeaturedHandmade";
import Testimonial from "@/components/Testimonial";
import NewsletterInstagram from "@/components/NewsletterInstagram";

export default function Home() {
  return (
    <div className="w-full">
      {/* 1. Hero & Trust Bar */}
      <Hero />

      {/* 2. Shop By Category */}
      <ShopByCategory />

      {/* 3. Featured Patterns */}
      <FeaturedPatterns />

      {/* 4. Split Promo Banner (Make it yourself OR Let Val make it) */}
      <SplitPromoBanner />

      {/* 5. Featured Handmade */}
      <FeaturedHandmade />

      {/* 6. Testimonial Quote */}
      <Testimonial />

      {/* 7. Newsletter & Instagram Showcase */}
      <NewsletterInstagram />
    </div>
  );
}
