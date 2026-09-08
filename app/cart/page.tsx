"use client";

import React from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, subtotal } = useCart();

  return (
    <div className="w-full bg-[#faf6f0] py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h1 className="font-serif text-2xl sm:text-3xl text-center uppercase tracking-widest text-[#2c2724] mb-8">
          YOUR CART
        </h1>

        {cart.length === 0 ? (
          <div className="text-center py-16 bg-[#f4ede3] rounded-sm p-8 space-y-4">
            <p className="font-serif italic text-lg text-[#6f655b]">
              Your cart is currently empty.
            </p>
            <Link
              href="/patterns"
              className="inline-block px-6 py-3 bg-[#6d7760] text-white text-xs font-semibold uppercase tracking-wider"
            >
              Browse Patterns &amp; Handmade
            </Link>
          </div>
        ) : (
          <div className="bg-[#fcfaf7] border border-[#eae0d4] rounded-sm p-6 sm:p-8 shadow-sm">
            {/* Column Headers */}
            <div className="grid grid-cols-12 text-xs uppercase font-semibold tracking-wider text-[#8b8074] pb-4 border-b border-[#eae0d4]">
              <span className="col-span-6">PRODUCT</span>
              <span className="col-span-2 text-center">PRICE</span>
              <span className="col-span-2 text-center">QTY</span>
              <span className="col-span-2 text-right">TOTAL</span>
            </div>

            {/* List */}
            <div className="divide-y divide-[#eee6db]">
              {cart.map((item) => (
                <div key={item.id} className="grid grid-cols-12 items-center py-5 gap-2 text-xs">
                  {/* Product Details */}
                  <div className="col-span-6 flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-16 object-cover rounded-sm bg-[#eee7de] shrink-0"
                    />
                    <div>
                      <p className="font-serif text-sm text-[#2b2723] font-medium">
                        {item.name}
                      </p>
                      <p className="text-[11px] text-[#83786c]">
                        ({item.typeLabel})
                      </p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="col-span-2 text-center text-xs text-[#3a342e]">
                    KSh {item.price.toLocaleString()}
                  </div>

                  {/* Qty */}
                  <div className="col-span-2 flex items-center justify-center">
                    <div className="flex items-center border border-[#d8cfc3] bg-white">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-2 py-1 text-xs text-[#6e6357] hover:text-black"
                      >
                        -
                      </button>
                      <span className="px-2 text-xs font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-2 py-1 text-xs text-[#6e6357] hover:text-black"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Total */}
                  <div className="col-span-2 flex items-center justify-end space-x-3">
                    <span className="text-xs font-semibold text-[#2c2724]">
                      KSh {(item.price * item.quantity).toLocaleString()}
                    </span>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-[#9e9488] hover:text-rose-600 text-sm"
                      title="Remove item"
                    >
                      ×
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Subtotal & Proceed */}
            <div className="border-t border-[#eae0d4] pt-6 mt-4 flex flex-col items-end space-y-4">
              <div className="flex items-center gap-8 text-sm">
                <span className="uppercase text-[#71675c] font-medium tracking-wider">Subtotal</span>
                <span className="font-semibold text-base text-[#2c2724]">
                  KSh {subtotal.toLocaleString()}
                </span>
              </div>

              <Link
                href="/checkout"
                className="w-full sm:w-auto px-10 py-3.5 bg-[#6d7760] hover:bg-[#5b644f] text-[#faf6f0] text-xs font-semibold tracking-[0.18em] uppercase transition-colors text-center shadow-sm"
              >
                PROCEED TO CHECKOUT
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
