"use client";

import React from "react";
import Link from "next/link";

export default function OrderConfirmedPage() {
  return (
    <div className="w-full bg-[#faf6f0] py-14 sm:py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        {/* Encircled Checkmark */}
        <div className="w-14 h-14 rounded-full bg-[#6d7760]/15 text-[#6d7760] flex items-center justify-center mx-auto mb-4 border border-[#6d7760]/30">
          <svg className="w-7 h-7 stroke-[2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* Order Header */}
        <h1 className="font-serif text-2xl sm:text-3xl font-medium tracking-wide uppercase text-[#2c2724]">
          ORDER CONFIRMED!
        </h1>
        <p className="text-xs sm:text-sm text-[#73695e] font-light mt-2">
          Thank you, Valentine! Your order has been received.
        </p>
        <p className="text-xs text-[#8c8276] tracking-wider mt-1">
          Order number: <span className="font-semibold text-[#2c2724]">#VS1025</span>
        </p>

        {/* Split Order Summary Box */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 text-left">
          {/* Box 1: DIGITAL DOWNLOAD */}
          <div className="bg-[#fcfaf7] border border-[#e8dfd2] p-5 sm:p-6 rounded-sm flex flex-col justify-between space-y-4">
            <div>
              <h2 className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#6d7760]">
                DIGITAL DOWNLOAD
              </h2>
              <p className="text-xs text-[#2c2724] font-medium mt-1">
                Your pattern is ready!
              </p>
            </div>

            <button
              onClick={() => alert("Downloading Daisy Tote Bag Pattern PDF...")}
              className="w-full py-2.5 bg-[#6d7760] hover:bg-[#5a644f] text-[#faf6f0] text-[11px] font-semibold tracking-[0.16em] uppercase transition-colors text-center rounded-none shadow-sm"
            >
              DOWNLOAD PATTERN
            </button>

            <p className="text-[10px] text-[#8e8477] font-light">
              A download link has also been sent to your email.
            </p>
          </div>

          {/* Box 2: ORDER DETAILS */}
          <div className="bg-[#fcfaf7] border border-[#e8dfd2] p-5 sm:p-6 rounded-sm flex flex-col justify-between space-y-4">
            <div>
              <h2 className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#6d7760]">
                ORDER DETAILS
              </h2>
              <p className="text-xs text-[#2c2724] font-medium mt-1">
                Crochet Tote Bag (Handmade) x1
              </p>
              <p className="text-[11px] text-[#786d62] font-light mt-1">
                Estimated delivery: 5-7 working days
              </p>
              <p className="text-[10px] text-[#8e8477] font-light">
                We&apos;ll notify you when it&apos;s on the way.
              </p>
            </div>

            <button
              onClick={() => alert("Order status: In Production (Stitching with love)")}
              className="w-full py-2.5 bg-[#e8dfd2] hover:bg-[#ded2c3] text-[#2c2724] text-[11px] font-semibold tracking-[0.16em] uppercase transition-colors text-center rounded-none"
            >
              VIEW MY ORDER
            </button>
          </div>
        </div>

        {/* Continue Shopping Button */}
        <div className="mt-8">
          <Link
            href="/"
            className="inline-block px-8 py-3 bg-[#6d7760] hover:bg-[#5b644f] text-[#faf6f0] text-xs font-semibold tracking-[0.18em] uppercase transition-colors shadow-sm"
          >
            CONTINUE SHOPPING
          </Link>
        </div>
      </div>
    </div>
  );
}
