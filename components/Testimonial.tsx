"use client";

import React, { useState, useEffect } from "react";

const testimonials = [
  {
    quote: "The quality is amazing and you can really feel the love in every stitch. Will definitely be ordering again!",
    author: "Njeri W.",
  },
  {
    quote: "The pattern was so easy to follow with clear step-by-step instructions. My Daisy Tote turned out gorgeous!",
    author: "Sarah K.",
  },
  {
    quote: "Super fast delivery and the packaging was lovely. The handmade granny cardigan is my absolute favorite piece now.",
    author: "Amina M.",
  },
  {
    quote: "Such delicate, beautiful craftsmanship. Val Stitches is my go-to for unique gifts and beginner-friendly patterns.",
    author: "Wanjiku T.",
  },
];

export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-[#8b9580]/20 py-14 sm:py-16">
      <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Large Quote Mark */}
        <div className="font-serif text-5xl sm:text-6xl text-[#6e7a63] leading-none mb-3">
          “
        </div>

        {/* Quote Text */}
        <p className="font-serif italic text-base sm:text-lg md:text-xl text-[#2e2925] font-light max-w-2xl leading-relaxed transition-all duration-500 min-h-[60px] flex items-center justify-center">
          {testimonials[activeIndex].quote}
        </p>

        {/* Author */}
        <p className="text-xs tracking-[0.18em] uppercase text-[#675e54] font-medium mt-4">
          — {testimonials[activeIndex].author}
        </p>

        {/* Carousel Dots */}
        <div className="flex items-center space-x-2 mt-6">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              type="button"
              aria-label={`Go to slide ${idx + 1}`}
              onClick={() => setActiveIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                activeIndex === idx
                  ? "bg-[#6e7a63] w-4"
                  : "bg-[#cfc6b8] hover:bg-[#8b9580]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
