"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, subtotal, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("mpesa");
  const shippingFee = 200;
  const total = subtotal + shippingFee;

  const [formData, setFormData] = useState({
    email: "valentine@example.com",
    fullName: "Valentine M.",
    phone: "+254 712 345 678",
    address: "Westlands, Nairobi",
    city: "Nairobi",
    county: "Nairobi",
    postalCode: "00100",
    saveInfo: true,
  });

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/order-confirmed");
  };

  return (
    <div className="w-full bg-[#faf6f0] py-10 sm:py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-2xl sm:text-3xl text-center uppercase tracking-widest text-[#2c2724] mb-10">
          CHECKOUT
        </h1>

        <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Contact & Shipping */}
          <div className="lg:col-span-7 space-y-8 bg-[#fcfaf7] border border-[#e8dfd2] p-6 sm:p-8 rounded-sm">
            {/* Contact Info */}
            <div className="space-y-4">
              <h2 className="text-xs font-semibold tracking-[0.18em] uppercase text-[#332e29] border-b border-[#ece4d8] pb-2">
                CONTACT INFORMATION
              </h2>
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#6e6357] mb-1">
                  Email address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white border border-[#d8cec1] px-3.5 py-2 text-xs text-[#2c2724] outline-none focus:border-[#6d7760]"
                />
              </div>
            </div>

            {/* Shipping Info */}
            <div className="space-y-4">
              <h2 className="text-xs font-semibold tracking-[0.18em] uppercase text-[#332e29] border-b border-[#ece4d8] pb-2">
                SHIPPING INFORMATION
              </h2>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#6e6357] mb-1">
                  Full name
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-white border border-[#d8cec1] px-3.5 py-2 text-xs text-[#2c2724] outline-none focus:border-[#6d7760]"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#6e6357] mb-1">
                  Phone number
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-white border border-[#d8cec1] px-3.5 py-2 text-xs text-[#2c2724] outline-none focus:border-[#6d7760]"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#6e6357] mb-1">
                  Address
                </label>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full bg-white border border-[#d8cec1] px-3.5 py-2 text-xs text-[#2c2724] outline-none focus:border-[#6d7760]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#6e6357] mb-1">
                    City / Town
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-white border border-[#d8cec1] px-3.5 py-2 text-xs text-[#2c2724] outline-none focus:border-[#6d7760]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#6e6357] mb-1">
                    County / Region
                  </label>
                  <select
                    value={formData.county}
                    onChange={(e) => setFormData({ ...formData, county: e.target.value })}
                    className="w-full bg-white border border-[#d8cec1] px-3.5 py-2 text-xs text-[#2c2724] outline-none focus:border-[#6d7760]"
                  >
                    <option value="Nairobi">Nairobi</option>
                    <option value="Mombasa">Mombasa</option>
                    <option value="Kisumu">Kisumu</option>
                    <option value="Nakuru">Nakuru</option>
                    <option value="Kiambu">Kiambu</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#6e6357] mb-1">
                  Postal code
                </label>
                <input
                  type="text"
                  value={formData.postalCode}
                  onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                  className="w-full bg-white border border-[#d8cec1] px-3.5 py-2 text-xs text-[#2c2724] outline-none focus:border-[#6d7760]"
                />
              </div>

              <label className="flex items-center space-x-2 pt-2 text-xs text-[#6e6357] cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.saveInfo}
                  onChange={(e) => setFormData({ ...formData, saveInfo: e.target.checked })}
                  className="rounded border-[#c8bfae] text-[#6d7760] focus:ring-[#6d7760]"
                />
                <span>Save this information for next time</span>
              </label>
            </div>
          </div>

          {/* Right Column: Order Summary & Payment */}
          <div className="lg:col-span-5 space-y-6 bg-[#fcfaf7] border border-[#e8dfd2] p-6 sm:p-8 rounded-sm">
            {/* Order Items */}
            <div className="space-y-4">
              <h2 className="text-xs font-semibold tracking-[0.18em] uppercase text-[#332e29] border-b border-[#ece4d8] pb-2">
                YOUR ORDER
              </h2>

              <div className="divide-y divide-[#eee6db] max-h-60 overflow-y-auto">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center justify-between py-3 text-xs">
                    <div className="flex items-center space-x-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-10 h-12 object-cover rounded-sm bg-[#ece3d6]"
                      />
                      <div>
                        <p className="font-serif text-xs font-medium text-[#2c2724]">
                          {item.name}
                        </p>
                        <p className="text-[10px] text-[#7d7265]">
                          ({item.typeLabel}) x{item.quantity}
                        </p>
                      </div>
                    </div>
                    <span className="font-medium text-[#2c2724]">
                      KSh {(item.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>

              {/* Price Breakdown */}
              <div className="border-t border-[#ece4d8] pt-3 space-y-1.5 text-xs text-[#6e6357]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>KSh {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>KSh {shippingFee.toLocaleString()}</span>
                </div>
                <div className="flex justify-between font-semibold text-sm text-[#2c2724] pt-2 border-t border-[#eee6db]">
                  <span>Total</span>
                  <span>KSh {total.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="space-y-3 pt-2">
              <h2 className="text-xs font-semibold tracking-[0.18em] uppercase text-[#332e29] border-b border-[#ece4d8] pb-2">
                PAYMENT METHOD
              </h2>

              <div className="space-y-2 text-xs">
                {/* M-Pesa */}
                <label className="flex items-center justify-between p-3 border border-[#d8cfc3] bg-white cursor-pointer hover:border-[#6d7760]">
                  <div className="flex items-center space-x-2.5">
                    <input
                      type="radio"
                      name="payment"
                      value="mpesa"
                      checked={paymentMethod === "mpesa"}
                      onChange={() => setPaymentMethod("mpesa")}
                      className="text-[#6d7760] focus:ring-[#6d7760]"
                    />
                    <span className="font-medium text-[#2c2724]">M-Pesa</span>
                  </div>
                  <span className="text-[10px] font-bold bg-[#349a46] text-white px-2 py-0.5 rounded">
                    M-PESA
                  </span>
                </label>

                {/* Visa / Card */}
                <label className="flex items-center justify-between p-3 border border-[#d8cfc3] bg-white cursor-pointer hover:border-[#6d7760]">
                  <div className="flex items-center space-x-2.5">
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={paymentMethod === "card"}
                      onChange={() => setPaymentMethod("card")}
                      className="text-[#6d7760] focus:ring-[#6d7760]"
                    />
                    <span className="font-medium text-[#2c2724]">Visa / Mastercard</span>
                  </div>
                  <div className="flex items-center space-x-1 text-[10px] font-bold text-[#1a4099]">
                    <span>VISA</span>
                  </div>
                </label>

                {/* Other Mobile Money */}
                <label className="flex items-center justify-between p-3 border border-[#d8cfc3] bg-white cursor-pointer hover:border-[#6d7760]">
                  <div className="flex items-center space-x-2.5">
                    <input
                      type="radio"
                      name="payment"
                      value="other"
                      checked={paymentMethod === "other"}
                      onChange={() => setPaymentMethod("other")}
                      className="text-[#6d7760] focus:ring-[#6d7760]"
                    />
                    <span className="font-medium text-[#2c2724]">Other Mobile Money</span>
                  </div>
                </label>
              </div>
            </div>

            {/* Place Order Button */}
            <button
              type="submit"
              className="w-full py-3.5 bg-[#6d7760] hover:bg-[#5b644f] text-[#faf6f0] text-xs font-semibold tracking-[0.18em] uppercase transition-colors text-center shadow-sm"
            >
              PLACE ORDER — KSh {total.toLocaleString()}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
