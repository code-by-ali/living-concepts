import { MapPin, PhoneIcon, StarIcon } from "lucide-react";
import React from "react";
import TemplateCardBg from "@/public/assets/project-detail-new-template-card-bg.jpg";
import TemplateCardImg1 from "@/public/assets/project-detail-new-template-card-img-1.svg";
import TemplateCardImg2 from "@/public/assets/project-detail-new-template-card-img-2.svg";
import TemplateCardImg3 from "@/public/assets/project-detail-new-template-card-img-3.svg";
import CommonImage from "../common/CommonImage";

{
  /* --- RIGHT COLUMN: Contact & Sidebar (Sticky on large screens) --- */
}

const ProjectListingRightColumn = () => {
  return (
    <div className="lg:w-1/3 mt-8 lg:mt-0 space-y-6">
      {/* Contact Widget */}
      <div className="bg-white p-4 sm:p-6 rounded-xl border border-[#E0E0E0] flex flex-col gap-3">
        <h3 className="text-xl md:text-2xl font-bold text-primary flex items-center gap-2">
          <span className="text-[#E68138]">★</span>
          High Rise Townhouse
        </h3>

        <div className="flex flex-col items-start md:flex-row md:items-center gap-2">
          <span className="bg-[#E68138] text-sm text-white rounded-lg px-2 py-1">
            For Rent
          </span>
          <span className="text-yellow-500 text-lg">★★★★★</span>
          <span>(2 Reviews)</span>
        </div>

        <p className="text-sm font-normal text-[#636366] flex items-center gap-2 mb-4">
          <MapPin />
          Southwestern Ontario, Canada
        </p>

        <div className="flex items-end gap-4">
          <p className="text-2xl md:text-3xl font-normal text-[#E68138]">
            $425,000
          </p>
          <p className="text-sm md:text-base font-normal text-[#636366]">
            1,200/sq ft
          </p>
        </div>

        <div className="border-t border-[#E0E0E0]"></div>

        <p className="text-base md:text-lg font-semibold text-primary mt-3 mb-3">
          Contact With Us Now!
        </p>

        <div className="flex flex-col gap-2 bg-[#F2F2F2] rounded-lg shadow-sm">
          <div className="flex items-center space-x-3 mb-4 p-3 ">
            <img
              src="https://i.pravatar.cc/150?img=3"
              alt="Rachel Dan"
              className="w-16 h-16 rounded-full"
            />
            <div>
              <p className="font-semibold text-base md:text-lg text-primary">
                Rachel Dan
              </p>
              <p className="text-sm md:text-base text-[#E68138] font-normal flex items-center gap-3 mt-1">
                <PhoneIcon />
                041 385 2356
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 md:flex-row space-x-3 p-2">
            <button className="flex-1 cursor-pointer py-2 border border-[#E68138] text-[#E68138] text-sm rounded-lg">
              Call Now
            </button>
            <button className="flex-1 cursor-pointer py-2 bg-[#E68138] text-white text-sm rounded-lg">
              Send Message
            </button>
          </div>
        </div>
      </div>

      {/* New Template Ad */}
      {/* New Template Ad */}
      <div className="relative rounded-xl shadow-lg overflow-hidden h-[450px] sm:h-[500px]">
        {/* Background Image */}
        <CommonImage
          src={TemplateCardBg.src || TemplateCardBg}
          alt="Modern City Buildings"
          className="absolute inset-0 w-full h-full object-cover brightness-[.6] blur-[2px]" // Darken and slightly blur
        />

        {/* Gradient Overlay for the bottom */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-gray-900 to-transparent"></div>

        {/* Content Layer */}
        <div className="relative z-10 flex flex-col h-full p-6 sm:p-8 text-white">
          {/* Text Content */}
          <div className="grow flex flex-col justify-start">
            <h3 className="text-3xl sm:text-4xl font-semibold mb-3 leading-tight">
              New Template
            </h3>
            <p className="text-base md:text-lg text-white mb-6 leading-relaxed">
              Advertise your real estate to a wider audience with our landing
              page.
            </p>
            <button className="px-6 py-3 bg-[#2C5FD3] text-white rounded-lg font-normal w-auto self-start">
              Try It Now
            </button>
          </div>

          {/* Bottom Image Gallery */}
          <div className="grid grid-cols-3 gap-3 mt-8">
            <CommonImage
              src={TemplateCardImg1.src || TemplateCardImg1}
              alt="Ad 1"
              className="h-24 sm:h-40 w-full object-cover rounded-lg border border-white"
            />
            <CommonImage
              src={TemplateCardImg2.src || TemplateCardImg2}
              alt="Ad 2"
              className="h-24 sm:h-40 w-full object-cover rounded-lg border border-white"
            />
            <CommonImage
              src={TemplateCardImg3.src || TemplateCardImg3}
              alt="Ad 3"
              className="h-24 sm:h-40 w-full object-cover rounded-lg border border-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectListingRightColumn;
