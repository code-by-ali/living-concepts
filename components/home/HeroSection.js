// components/home/HeroSection.js

"use client";

import { useState } from "react";
import { SendHorizonal } from "lucide-react";
import CommonImage from "../common/CommonImage";
import BgImage from "@/public/assets/home-hero-section-bg-image.jpg";

export default function HeroSection() {
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [whatsapp, setWhatsapp] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <CommonImage
          src={BgImage.src || BgImage}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center px-4 sm:px-6 text-center py-24 md:py-32">
        {/* Tagline */}
        <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-medium max-w-2xl leading-relaxed mb-6 md:mb-8 px-4">
          We craft beautiful, functional living spaces from architecture to
          interiors tailored to your lifestyle and vision.
        </p>

        {/* View Works */}
        <button className="mb-8 md:mb-10 flex items-center gap-2 text-white/90 hover:text-white text-sm md:text-base">
          View Works <span className="animate-bounce">↓</span>
        </button>

        {/* Contact Form */}
        <div className="w-full max-w-5xl bg-white/20 backdrop-blur-xl p-4 md:p-5 rounded-xl mb-16 md:mb-20">
          {/* Large screen: single row, Tablet/Mobile: two rows */}
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Name and Phone Inputs */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 flex-1">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="flex-1 px-4 py-3 bg-white/10 text-white placeholder-white/70 rounded-xl outline-none border border-white/20 focus:border-white/40 transition-colors"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                value={formData.phone}
                onChange={handleChange}
                className="flex-1 px-4 py-3 bg-white/10 text-white placeholder-white/70 rounded-xl outline-none border border-white/20 focus:border-white/40 transition-colors"
              />
            </div>

            {/* WhatsApp Toggle and Submit */}
            <div className="flex items-center justify-between lg:justify-start gap-4">
              {/* Toggle Button */}
              <label className="flex items-center gap-2 text-white cursor-pointer text-sm md:text-base"> 
                <div
                  onClick={() => setWhatsapp(!whatsapp)}
                  className={`relative w-12 h-6 rounded-full transition-colors duration-300 cursor-pointer shrink-0 ${
                    whatsapp ? "bg-secondary-orange" : "bg-white/30"
                  }`}
                >
                  <div
                    className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-300 ${
                      whatsapp ? "translate-x-6" : "translate-x-0"
                    }`}
                  />
                </div>
                <span>WhatsApp Updates</span>
              </label>

              {/* Submit Button */}
              <button
                type="submit"
                onClick={handleSubmit}
                className="bg-secondary-orange text-white p-3 rounded-full flex items-center justify-center transition-colors shrink-0"
              >
                <SendHorizonal size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Title - Responsive positioning */}
        <div className="w-full px-4 mt-8 md:mt-12">
          <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-semibold text-white/90 tracking-wide drop-shadow-lg">
            Living Concept<span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl align-super">®</span>
          </h1>
        </div>
      </div>
    </section>
  );
}