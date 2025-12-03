import React from "react";
import CommongBgCover from "@/public/assets/common-bg-img.svg";
import CommonImage from "../common/CommonImage";

const BlogsHeader = () => {
  return (
    <section className="relative w-full h-[260px] sm:h-80 md:h-[380px] lg:h-[450px] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <CommonImage
          src={CommongBgCover.src || CommongBgCover}
          alt="Modern architecture interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content container */}
      <div className="relative h-full w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col justify-end pb-6 sm:pb-8 md:pb-12">
        {/* --- Title + Description --- */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between w-full gap-3 lg:gap-6">
          {/* Title */}
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight">
            Projects
          </h1>

          {/* Description (ALL sizes, but styled per breakpoint) */}
          <p className="text-white text-sm sm:text-base lg:text-lg max-w-md lg:max-w-sm leading-relaxed lg:text-left">
            From a small beginning to a bold vision, we design spaces that shape
            lives.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogsHeader;
