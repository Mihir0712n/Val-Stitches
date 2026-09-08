"use client";

import React, { useState } from "react";

export default function NewsletterInstagram() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section className="w-full bg-[#faf6f0] py-12 sm:py-16 border-t border-[#e8ded2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left: Newsletter Form */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-3">
            <h3 className="font-serif text-sm sm:text-base font-semibold tracking-[0.2em] uppercase text-[#2b2723]">
              BE THE FIRST TO KNOW
            </h3>
            <p className="text-xs text-[#73695e] font-light">
              New patterns, handmade drops, behind the scenes and more.
            </p>

            {subscribed ? (
              <div className="bg-[#eef3ea] text-[#4f6143] text-xs px-4 py-2.5 rounded-sm border border-[#cfdfc4]">
                ✓ Thank you for subscribing! Check your inbox soon.
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex items-center w-full max-w-md gap-2 pt-2"
              >
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white border border-[#d8cfc3] px-3.5 py-2.5 text-xs text-[#2c2724] placeholder-[#948b81] outline-none focus:border-[#6e7a63] transition-colors rounded-none"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#6b765f] hover:bg-[#5a6450] text-white text-[11px] font-semibold tracking-[0.16em] uppercase transition-colors rounded-none"
                >
                  SUBSCRIBE
                </button>
              </form>
            )}
          </div>

          {/* Right: 3-Image Instagram Showcase Grid */}
          <div className="lg:col-span-6 grid grid-cols-3 gap-3">
            <div className="aspect-square bg-[#ece4d8] overflow-hidden rounded-sm group relative">
              <img
                src="https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=400&auto=format&fit=crop"
                alt="Crochet granny square motif detail"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                <span className="text-xs">✦</span>
              </div>
            </div>

            <div className="aspect-square bg-[#ece4d8] overflow-hidden rounded-sm group relative">
              <img
                src="https://images.unsplash.com/photo-1584992236310-6edddc08acff?q=80&w=400&auto=format&fit=crop"
                alt="Handmade crochet top detail"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                <span className="text-xs">✦</span>
              </div>
            </div>

            <div className="aspect-square bg-[#ece4d8] overflow-hidden rounded-sm group relative">
              <img
                src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=400&auto=format&fit=crop"
                alt="Cozy coffee and handmade yarn textures"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                <span className="text-xs">✦</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
