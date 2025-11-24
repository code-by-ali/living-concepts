"use client";

import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import Card1Icon from "@/public/assets/projects-design-portfolio-icon-1.svg";
import Card2Icon from "@/public/assets/projects-design-portfolio-icon-2.svg";
import CommonImage from "../common/CommonImage";

const DesignPortfolioSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const marqueeImages = [
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit-crop",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit-crop",
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400&h=300&fit-crop",
    "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=400&h=300&fit-crop",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=400&h=300&fit-crop",
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400&h=300&fit-crop",
  ];

  const upcomingImages = [
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit-crop",
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit-crop",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit-crop",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit-crop",
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit-crop",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit-crop",
  ];

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % upcomingImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [upcomingImages.length]);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Row - Logo, Label, and Line */}
        <div className="flex items-center gap-4 mb-12">
          <div className="shrink-0 inline-flex items-center justify-center w-10 h-10 border border-primary">
            <span className="text-xl font-medium text-primary">A</span>
          </div>
          <p className="shrink-0 text-sm font-normal text-primary uppercase tracking-wider">
            WORK
          </p>
          <div className="grow border-t border-[#DCDCDC]"></div>
        </div>

        {/* Heading and Description */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-primary leading-tight">
              Design Portfolio
            </h2>
          </div>
          <div className="flex items-center">
            <p className="text-[#8F8F8F] text-base font-normal leading-relaxed">
              Proposed and completed residential projects by LivingConcept,
              featuring innovative designs, latest trends, and personalized
              aesthetics to match your lifestyle.
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-12">
          {/* Left Section - Delivered Projects with Marquee */}
          <div className="shadow-lg border border-gray-200 rounded-lg p-4">
            {/* Marquee Container */}
            <div className="mb-8 overflow-hidden">
              <Marquee speed={30} gradient={false} pauseOnHover={true}>
                {marqueeImages.map((image, index) => (
                  <div
                    key={index}
                    className={`mx-3 ${
                      index % 2 === 1 ? "mt-12" : "mt-0"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Project ${index + 1}`}
                      className="w-48 h-36 md:w-56 md:h-42 object-cover rounded-lg shadow-lg"
                    />
                  </div>
                ))}
              </Marquee>
            </div>

            {/* Delivered Projects Text with Arrow */}
            <div className="flex items-center justify-between mt-16">
              <h3 className="text-2xl md:text-3xl font-medium text-primary">
                Delivered
                <br />
                Projects
              </h3>
              <div className="flex flex-col items-center gap-2">
                <div className="w-px h-12 bg-[#DCDCDC]"></div>
                <CommonImage
                  src={Card1Icon.src || Card1Icon}
                  alt="Arrow icon"
                />
                <div className="w-px h-12 bg-[#DCDCDC]"></div>
              </div>
            </div>
          </div>

          {/* Right Section - Upcoming Projects with Stacked Images */}
          <div className="shadow-lg border border-gray-200 rounded-lg p-4">
            <div className="flex items-start justify-between mb-6">
              <h3 className="text-2xl md:text-3xl font-medium text-primary">
                Upcoming
                <br />
                Projects
              </h3>
              <CommonImage
                src={Card2Icon.src || Card2Icon}
                alt="Maximize icon"
              />
            </div>

            {/* Stacked Images with Animation */}
            <div className="relative w-full h-[400px] md:h-[500px] mt-8 flex items-end justify-center overflow-hidden">
              {upcomingImages.map((image, index) => {
                const position =
                  (index - currentImageIndex + upcomingImages.length) %
                  upcomingImages.length;

                // Only render the top 3 images in the stack
                if (position > 2) return null;

                const getStyle = (pos) => {
                  // FURTHER REDUCED SIZE AND TIGHTENED STACKING
                  const BASE_HEIGHT = 60; // Reduced from 70% to 65%
                  const PEEK_AMOUNT = 40;  // Reduced from 5% to 3% (visible height of overlap)
                  const STACK_GAP = 15;    // The small visible gap between the peeking tops

                  switch (pos) {
                    case 0: // Current (Bottommost, fully visible)
                      return {
                        width: "95%",
                        height: `${BASE_HEIGHT}%`,
                        bottom: "0%", 
                        opacity: 1,
                        transform: "translateX(-50%) scale(1)",
                        zIndex: 30,
                      };
                    case 1: // Next (Middle, partially visible top)
                      return {
                        width: "90%",
                        height: `${BASE_HEIGHT}%`,
                        // Bottom position: BASE_HEIGHT - PEEK_AMOUNT (e.g., 65% - 3% = 62%)
                        bottom: `${BASE_HEIGHT - PEEK_AMOUNT}%`, 
                        opacity: 1,
                        transform: "translateX(-50%) scale(0.97)",
                        zIndex: 20,
                      };
                    case 2: // After Next (Top, barely visible top)
                      return {
                        width: "85%",
                        height: `${BASE_HEIGHT}%`,
                        // Bottom position: (Position 1 bottom) + STACK_GAP (e.g., 62% + 2% = 64%)
                        bottom: `${BASE_HEIGHT - PEEK_AMOUNT + STACK_GAP}%`, 
                        opacity: 1,
                        transform: "translateX(-50%) scale(0.94)",
                        zIndex: 10,
                      };
                    default:
                      return {};
                  }
                };

                return (
                  <div
                    key={index}
                    className={`absolute transition-all duration-700 ease-in-out origin-bottom`}
                    style={{
                      ...getStyle(position),
                      left: "50%",
                      pointerEvents: position === 0 ? "auto" : "none",
                    }}
                  >
                    <img
                      src={image}
                      alt={`Upcoming project ${index + 1}`}
                      className="w-full h-full object-cover rounded-lg shadow-xl"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignPortfolioSection;