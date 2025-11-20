import React from "react";
import AboutStoryImg from "@/public/assets/about-story-section-img.svg";
import CommonImage from "../common/CommonImage";

const AboutStorySection = () => {
  const stats = [
    {
      value: "840+",
      label: "SUCCESSFUL PROJECT",
    },
    {
      value: "12+",
      label: "YEARS OF EXPERIENCE",
    },
    {
      value: "98%",
      label: "CLIENTS SATISFACTION",
    },
    {
      value: "04",
      label: "AWARDS ACHIEVEMENTS",
    },
  ];

  return (
    <div className="w-full bg-gray-50 py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Row - Logo, Label, and Line */}
        <div className="flex items-center gap-4 mb-12">
          {/* Logo/Brand */}
          <div className="shrink-0 inline-flex items-center justify-center w-10 h-10 border border-primary">
            <span className="text-xl font-medium text-primary">A</span>
          </div>

          {/* Label */}
          <p className="shrink-0 text-sm font-normal text-primary uppercase tracking-wider">
            OUR STORY
          </p>

          {/* Horizontal Line */}
          <div className="grow border-t border-[#DCDCDC]"></div>
        </div>

        {/* Heading and Description */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-primary leading-tight">
              Living Concept the Architecture story.
            </h1>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-[#555555] text-sm md:text-base mb-4">
              We believe that architecture is more than just creating buildings;
              it's about shaping experiences, fostering connections & enhancing
              communities.
            </p>
            <p className="text-[#555555] text-sm md:text-base">Here's what we're all about 👇</p>
          </div>
        </div>

        {/* Image */}
        <div className="mb-12">
          <CommonImage
            src={AboutStoryImg.src || AboutStoryImg}
            alt="Architecture buildings"
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center md:text-left">
              <h3 className="text-4xl md:text-5xl font-normal text-primary mb-2">
                {stat.value}
              </h3>
              <p className="text-xs md:text-sm text-[#555555] font-normal uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutStorySection;
