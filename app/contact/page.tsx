"use client";

import React, { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-[#faf6f0] py-14 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-3 mb-10">
          <h1 className="font-serif text-3xl sm:text-4xl text-[#2c2724] uppercase tracking-wider">
            Contact Us
          </h1>
          <p className="text-xs sm:text-sm text-[#73695e] font-light">
            Have a question about a pattern or custom handmade order? We&apos;d love to hear from you.
          </p>
        </div>

        {submitted ? (
          <div className="bg-[#eef3ea] border border-[#cfdfc4] p-8 text-center rounded-sm space-y-2">
            <h3 className="font-serif text-lg text-[#3b4c30]">Message Sent!</h3>
            <p className="text-xs text-[#526347]">
              Thank you for reaching out. We will get back to you within 24-48 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-[#fcfaf7] border border-[#e8dfd2] p-6 sm:p-8 rounded-sm space-y-4">
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-[#6e6357] mb-1">
                Name
              </label>
              <input
                type="text"
                required
                placeholder="Your Name"
                className="w-full bg-white border border-[#d8cec1] px-3.5 py-2.5 text-xs text-[#2c2724] outline-none focus:border-[#6d7760]"
              />
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider text-[#6e6357] mb-1">
                Email
              </label>
              <input
                type="email"
                required
                placeholder="your@email.com"
                className="w-full bg-white border border-[#d8cec1] px-3.5 py-2.5 text-xs text-[#2c2724] outline-none focus:border-[#6d7760]"
              />
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider text-[#6e6357] mb-1">
                Message
              </label>
              <textarea
                rows={5}
                required
                placeholder="How can we help you?"
                className="w-full bg-white border border-[#d8cec1] px-3.5 py-2.5 text-xs text-[#2c2724] outline-none focus:border-[#6d7760]"
              />
            </div>

            <button
              type="submit"
              className="px-8 py-3 bg-[#6d7760] hover:bg-[#5a644f] text-white text-xs font-semibold uppercase tracking-widest transition-colors"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
