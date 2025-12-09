"use client";
import { QuoteIcon } from "lucide-react";
import React from "react";
import HouseCardImg from "@/public/assets/contact-us-house-card-img.svg";
import HouseVerticalCardImg from "@/public/assets/contact-us-house-vertical-card-img.svg";

import CommonImage from "../common/CommonImage";

const CompanyReviewSection = () => {
  const testimonials = [
    {
      name: "Alonso D. - ",
      role: "Quality Design",
    },
    {
      name: "Miranda - ",
      role: "One Of The Best Development",
    },
    {
      name: "Nelson M. - ",
      role: "Unbelievable & Next-Gen Design Team",
    },
    {
      name: "Alyson E. - ",
      role: "Better Quality Design, Communication UI & UX",
    },
  ];

  const avatars = [
    "https://i.pravatar.cc/150?img=1",
    "https://i.pravatar.cc/150?img=2",
    "https://i.pravatar.cc/150?img=3",
    "https://i.pravatar.cc/150?img=4",
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Row - Logo, Label, and Line */}
        <div className="flex items-center gap-4 mb-12">
          {/* Logo/Brand */}
          <div className="shrink-0 inline-flex items-center justify-center w-10 h-10 border border-black">
            <span className="text-xl font-medium text-black">C</span>
          </div>

          {/* Label */}
          <p className="shrink-0 text-sm font-normal text-black uppercase tracking-wider">
            COMPANY REVIEW
          </p>

          {/* Horizontal Line */}
          <div className="grow border-t border-[#DCDCDC]"></div>
        </div>

        {/* Heading - Full Width */}
        <h2 className="text-4xl md:text-5xl font-normal text-primary leading-tight mb-12">
          Home—a space
          <br />
          designed for comfort
        </h2>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 lg:items-stretch">
          {/* Column 1 - Rating and Large Image */}
          <div className="flex flex-col">
            {/* Rating Section */}
            <div className="mb-8">
              {/* Avatar Group */}
              <div className="flex -space-x-1 mb-4">
                {avatars.map((avatar, index) => (
                  <img
                    key={index}
                    src={avatar}
                    alt={`Reviewer ${index + 1}`}
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>

              {/* Rating */}
              <div className="mb-2">
                <span className="text-2xl md:text-3xl font-bold text-primary">
                  4.9
                </span>
                <span className="text-2xl md:text-3xl font-bold text-primary">
                  {" "}
                  / 5.0
                </span>
              </div>

              {/* Rating Description */}
              <p className="text-sm font-normal text-[#666666]">
                From bustling urban condos to peaceful...
              </p>
            </div>

            {/* Large Image */}
            <div className="relative flex-1 rounded-lg overflow-hidden min-h-[400px]">
              <CommonImage
                src={HouseVerticalCardImg.src || HouseVerticalCardImg}
                alt="Modern architecture"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Column 2 - Video and Quote Box */}
          <div className="flex flex-col space-y-6">
            {/* YouTube Video */}
            <div className="h-[360px] rounded-lg overflow-hidden shrink-0">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=1&modestbranding=1&rel=0"
                title="House Tour Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Quote Box */}
            <div className="bg-[#252525] rounded-lg p-6 text-white relative flex-1 flex flex-col justify-evenly">
              {/* Quote Icon */}

              <p className="text-base md:text-lg leading-relaxed mb-4">
                " Working with LivingConcept feels like a partnership; as we
                continued to use their tool and found more use cases, our
                feature requests quickly found. "
              </p>

              <div className="flex flex-row justify-between items-center">
                <div>
                  <p className="text-base md:text-lg font-bold text-white">
                    Alonso D. Dowson
                  </p>
                  <p className="text-xs md:text-sm text-[#B79B6F]">
                    House Owner
                  </p>
                </div>

                <QuoteIcon className="w-10 h-10 text-white/20" />
              </div>
            </div>
          </div>

          {/* Column 3 - Three Cards */}
          <div className="flex flex-col gap-6">
            {/* Card 1 - Small Image */}
            <div className="bg-[#C8A882] rounded-lg p-6 flex-1 flex flex-col justify-center">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-full px-4 py-2 text-sm inline-block mr-2 mb-2"
                >
                  <span className="font-normal text-primary">
                    {testimonial.name}
                  </span>
                  <span className="font-bold text-primary">
                    {testimonial.role}
                  </span>
                </div>
              ))}
            </div>

            {/* Card 2 - Testimonial Tags */}
            <div className="relative h-[200px] rounded-lg overflow-hidden shrink-0">
              <CommonImage
                src={HouseCardImg.src || HouseCardImg}
                alt="Modern home interior"
                className="w-full h-full object-cover"
              />
              <p className="absolute bottom-2 left-2 text-white text-3xl text-center">
                <marquee>Quality House Solutions</marquee>
              </p>
            </div>

            {/* Card 3 - House Solutions Image */}
            <div className="relative h-[250px] rounded-lg overflow-hidden shrink-0 bg-white">
              {/* Text Overlay */}
              <div className="h-full  p-6">
                <div className="flex flex-col justify-evenly items-start text-black h-full">
                  <p className="text-sm font-normal text-[#666666] mb-1">
                    On average for home owner cost savings.
                  </p>
                  <p className="text-6xl md:text-8xl font-outline">98.8%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .font-outline {
          color: transparent;
          -webkit-text-stroke: 1px black;
          text-stroke: 1px black;
          font-weight: 700;
        }
      `}</style>
    </section>
  );
};

export default CompanyReviewSection;
