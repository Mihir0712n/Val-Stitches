"use client";

import React from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    subtotal,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-[2px] transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-[#faf6f0] h-full shadow-2xl flex flex-col z-10 overflow-hidden border-l border-[#e5dcce]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#e7ded2]">
          <h2 className="font-serif text-base font-semibold tracking-[0.2em] text-[#2c2724] uppercase">
            YOUR CART
          </h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="text-xs uppercase tracking-wider text-[#7a7065] hover:text-[#2c2724] p-1"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {cart.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <p className="font-serif text-base text-[#6f655b] italic">
                Your cart is currently empty.
              </p>
              <Link
                href="/patterns"
                onClick={() => setIsCartOpen(false)}
                className="inline-block px-5 py-2.5 bg-[#6d7760] text-white text-xs uppercase tracking-wider font-semibold"
              >
                Browse Patterns
              </Link>
            </div>
          ) : (
            <div className="divide-y divide-[#ece3d6]">
              {/* Column labels */}
              <div className="grid grid-cols-12 text-[10px] uppercase font-semibold tracking-wider text-[#8b8074] pb-2">
                <span className="col-span-6">PRODUCT</span>
                <span className="col-span-2 text-center">PRICE</span>
                <span className="col-span-2 text-center">QTY</span>
                <span className="col-span-2 text-right">TOTAL</span>
              </div>

              {/* Items */}
              {cart.map((item) => (
                <div key={item.id} className="grid grid-cols-12 items-center py-3.5 gap-2 text-xs">
                  {/* Product Details */}
                  <div className="col-span-6 flex items-center space-x-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-14 object-cover rounded-sm bg-[#ece3d6] shrink-0"
                    />
                    <div className="min-w-0">
                      <p className="font-serif text-xs text-[#2b2723] font-medium truncate">
                        {item.name}
                      </p>
                      <p className="text-[10px] text-[#857a6e]">
                        ({item.typeLabel})
                      </p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="col-span-2 text-center text-[11px] text-[#453f39]">
                    KSh {item.price.toLocaleString()}
                  </div>

                  {/* Qty controls */}
                  <div className="col-span-2 flex items-center justify-center border border-[#d8cfc3] bg-white rounded-none">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-1.5 py-0.5 text-xs text-[#6e6357] hover:text-black"
                    >
                      -
                    </button>
                    <span className="px-1 text-[11px] font-medium">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-1.5 py-0.5 text-xs text-[#6e6357] hover:text-black"
                    >
                      +
                    </button>
                  </div>

                  {/* Total & Delete */}
                  <div className="col-span-2 flex items-center justify-end space-x-1.5">
                    <span className="text-[11px] font-semibold text-[#2c2724]">
                      KSh {(item.price * item.quantity).toLocaleString()}
                    </span>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-[#9e9488] hover:text-rose-600 text-xs pl-1"
                      title="Remove item"
                    >
                      ×
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer with subtotal & checkout */}
        {cart.length > 0 && (
          <div className="border-t border-[#e7ded2] bg-[#f5efe5] p-6 space-y-4">
            <div className="flex items-center justify-between text-xs tracking-wider">
              <span className="uppercase text-[#6e6357] font-medium">Subtotal</span>
              <span className="font-semibold text-sm text-[#2b2723]">
                KSh {subtotal.toLocaleString()}
              </span>
            </div>

            <Link
              href="/checkout"
              onClick={() => setIsCartOpen(false)}
              className="w-full block text-center py-3.5 bg-[#6d7760] hover:bg-[#5b644f] text-[#faf6f0] text-xs font-semibold tracking-[0.18em] uppercase transition-colors shadow-sm"
            >
              PROCEED TO CHECKOUT
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
