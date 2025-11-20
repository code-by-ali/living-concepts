import React from "react";
import OurGoalImg from "@/public/assets/about-our-goal-img.svg";
import CommonImage from "../common/CommonImage";

const OurGoalSection = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Row - Logo, Label, and Line */}
        <div className="flex items-center gap-4 mb-12">
          {/* Logo/Brand */}
          <div className="shrink-0 inline-flex items-center justify-center w-10 h-10 border border-primary">
            <span className="text-xl font-medium text-primary">B</span>
          </div>

          {/* Label */}
          <p className="shrink-0 text-sm font-normal text-primary uppercase tracking-wider">
            OUR GOAL
          </p>

          {/* Horizontal Line */}
          <div className="grow border-t border-[#DCDCDC]"></div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col gap-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-primary leading-tight">
            Shaping the Future of Luxury Architecture
          </h2>
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              {/* Main Heading */}

              {/* Mission */}
              <div className="space-y-3">
                <h3 className="text-xl md:text-2xl font-medium text-primary">
                  Our Mission
                </h3>
                <p className="text-[#555555] text-base font-normal leading-relaxed">
                  To be the leading architectural firm known for creating
                  timeless, innovative, and sustainable luxury spaces that
                  transform the way people live and work.
                </p>
              </div>

              {/* Vision */}
              <div className="space-y-3">
                <h3 className="text-xl md:text-2xl font-medium text-primary">
                  Our Vision
                </h3>
                <p className="text-[#555555] text-base font-normal leading-relaxed">
                  To redefine the landscape of luxury architecture by crafting
                  extraordinary spaces that harmonize timeless elegance with
                  innovative design.
                </p>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="aspect-4/3 overflow-hidden">
                <CommonImage
                  src={OurGoalImg.src || OurGoalImg}
                  alt="Modern luxury architecture"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurGoalSection;
