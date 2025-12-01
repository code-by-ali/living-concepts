"use client";
import React from "react";
import {
  Bed,
  Bath,
  Car,
  Calendar,
  Maximize2,
  MapPin,
  ChevronDown,
  Star,
  CheckIcon,
  Banknote,
} from "lucide-react";

import FloorPlan from "@/public/assets/project-detail-floor-plan.svg";
import CommonImage from "../common/CommonImage";

const ProjectListingLeftColumn = () => {
  const overviewData = [
    {
      icon: Bed,
      title: "Bedrooms",
      subText: "2",
    },
    {
      icon: Bath,
      title: "Bathrooms",
      subText: "2",
    },
    {
      icon: Car,
      title: "Garage",
      subText: "2",
    },
    {
      icon: Calendar,
      title: "Year Bulit",
      subText: "2022",
    },
    {
      icon: Maximize2,
      title: "Area Size",
      subText: "1,354",
    },
  ];

  const informationData = [
    {
      title: "Price",
      data: "$425,000",
    },
    {
      title: "Area Size",
      data: "1435 Sq Ft",
    },
    {
      title: "Rooms",
      data: "5",
    },
    {
      title: "Year Built",
      data: "2022",
    },
    {
      title: "Land Area Size",
      data: "3766 Sq Ft",
    },
    {
      title: "Property ID",
      data: "HZ24",
    },
    {
      title: "Bedrooms",
      data: "6",
    },
  ];

  return (
    <div className="lg:w-2/3 space-y-8">
      {/* Overview Section */}
      <section className="pt-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl lg:text-3xl font-medium text-primary">
            Overview
          </h2>
          <p className="text-sm md:text-base font-normal text-[#1C1C1E]">
            Property ID: HZ24
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 p-6 bg-white rounded-lg border border-gray-200">
          {overviewData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-start justify-center text-center"
            >
              <div className="flex items-center gap-3">
                <item.icon className="w-6 h-6 text-gray-600 mb-2" />
                <p className="text-xl md:text-2xl font-normal text-primary">
                  {item.subText}
                </p>
              </div>
              <p className="text-sm md:text-base text-[#636366] mt-1">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Information Section */}
      <section>
        <h2 className="text-2xl lg:text-3xl font-medium text-primary mb-6">
          Information
        </h2>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-x-8 gap-y-4 mb-6">
            {informationData.map((info, index) => (
              <div key={index}>
                <p className="text-sm md:text-base text-[#636366] mb-1">
                  {info.title}
                </p>
                <p className="text-base font-medium text-primary">
                  {info.data}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Amenities */}

        <div className="bg-white p-6 rounded-lg border border-gray-200 mt-4">
          <div className="flex flex-wrap justify-between items-center gap-3">
            {["HVAC", "Barbeque", "Laundry", "Laundry", "Dryer"].map(
              (amenity, index) => (
                <span
                  key={index}
                  className="flex items-center gap-2 text-sm md:text-base px-3 py-1.5 bg-white text-[#636366]"
                >
                  <span className="w-5 h-5 bg-[#E68138] rounded-full flex items-center justify-center">
                    <CheckIcon strokeWidth={5} className="text-white w-3 h-3" />
                  </span>
                  {amenity}
                </span>
              )
            )}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200 mt-4">
          <p className=" text-sm md:text-base font-normal text-[#636366] leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat.
          </p>
          <p className="mt-4 text-sm md:text-base font-normal text-[#636366] leading-relaxed">
            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
            molestie consequat, vel illum dolore eu feugiat nulla facilisis at
            vero eros et accumsan et iusto odio dignissim...
          </p>
        </div>
      </section>

      {/* Map Location Section */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl lg:text-3xl font-medium text-primary mb-6">
            Map Location
          </h2>
          <button
            className="px-4 py-2 bg-[#E68138] text-white text-base font-medium rounded-lg"
            onClick={() =>
              window.open(
                "https://www.google.com/maps/search/?api=1&query=Southwestern+Ontario,+Canada",
                "_blank"
              )
            }
          >
            Open Map
          </button>
        </div>
        <div className="h-80 outline-0 border rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.3355234521777!2d-79.38509492346264!3d43.65323477110402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d68bf33a9b%3A0x15edd8c4de1c7581!2sCN%20Tower!5e0!3m2!1sen!2sca!4v1703001234567!5m2!1sen!2sca"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Property Location Map"
          ></iframe>
        </div>
      </section>

      {/* Floor Plans Section */}
      <section>
        <h2 className="text-2xl lg:text-3xl font-medium text-primary mb-6">
          Floor Plans
        </h2>
        <div className="border border-[#E0E0E0] rounded-lg overflow-hidden">
          {/* Floor Plan Header */}
          <div className="bg-[#F2F2F2] px-6 py-4 flex flex-wrap justify-between items-center gap-4 border-b border-[#E0E0E0]">
            <div className="flex items-center gap-2">
              <ChevronDown className="w-5 h-5 text-[#636366]" />
              <span className="text-base md:text-lg font-normal text-[#636366]">
                New Plan Title
              </span>
            </div>
            <div className="flex flex-col items-start md:flex-row md:items-center gap-6 text-sm md:text-base text-[#636366]">
              <span className="flex items-center gap-1">
                <Maximize2 className="w-4 h-4" />
                1435 Sq Ft
              </span>
              <span className="flex items-center gap-1">
                <Bed className="w-4 h-4" />
                41
              </span>
              <span className="flex items-center gap-1">
                <Bath className="w-4 h-4" />2
              </span>
              <span className="flex items-center gap-1">
                <Banknote />
                $1,345
              </span>
            </div>
          </div>

          {/* Floor Plan Image */}
          <div className="bg-white p-6">
            <CommonImage
              src={FloorPlan.src || FloorPlan}
              alt="Floor Plan"
              className="w-full h-auto"
            />
          </div>

          {/* Description */}
          <div className="px-6 pb-6">
            <h3 className="text-base md:text-lg font-medium text-[#636366] my-3">
              Description:
            </h3>
            <p className="text-sm font-normal text-[#636366] leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat.
            </p>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Duis autem vel eum iriure dolor in hendrerit in vulputate velit
              esse molestie consequat, vel illum dolore eu feugiat nulla
              facilisis at vero eros et accumsan et iusto odio dignissim qui
              blandit praesent luptatum zzril delenit augue duis dolore te
              feugait nulla facilisi.
            </p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section>
        <h2 className="text-2xl lg:text-3xl font-medium text-primary mb-6">
          Video
        </h2>
        <div className="relative pt-[56.25%] rounded-lg overflow-hidden">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="mb-10">
        <div className="flex flex-col items-start gap-2 md:flex-row md:justify-between md:items-center mb-4">
          <div>
            <h2 className="text-2xl lg:text-3xl font-medium text-primary mb-2">
              What Our Customers Say
            </h2>
            <div className="flex items-center gap-2">
              <span className="text-xl font-medium text-[#636366]">5.0</span>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-base text-[#636366] font-normal">
                1,540 reviews
              </span>
            </div>
          </div>
          <button className="px-4 py-2 bg-[#E68138] text-white rounded-lg text-base font-normal">
            Write A Review
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Review Card 1 */}
          <div className="border border-gray-200 p-4 rounded-lg">
            <div className="flex items-center mb-3">
              <img
                src="https://i.pravatar.cc/150?img=1"
                alt="Rachel Dan"
                className="w-12 h-12 rounded-full mr-3"
              />
              <div>
                <p className="font-semibold text-sm text-gray-900">
                  Rachel Dan
                </p>
                <p className="text-xs text-gray-500">Today, 09:36 AM</p>
              </div>
            </div>
            <div className="flex mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="w-4 h-4 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Duis autem vel eum iriure dolor in hendrerit in vulputate velit
              esse molestie consequat, vel illum dolore eu feugiat nulla
              facilisis at vero eros et accumsan et iusto odio
              dignissim.........
            </p>
          </div>

          {/* Review Card 2 */}
          <div className="border border-gray-200 p-4 rounded-lg">
            <div className="flex items-center mb-3">
              <img
                src="https://i.pravatar.cc/150?img=2"
                alt="Rachel Dan"
                className="w-12 h-12 rounded-full mr-3"
              />
              <div>
                <p className="font-semibold text-sm text-gray-900">
                  Rachel Dan
                </p>
                <p className="text-xs text-gray-500">Today, 09:36 AM</p>
              </div>
            </div>
            <div className="flex mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="w-4 h-4 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Duis autem vel eum iriure dolor in hendrerit in vulputate velit
              esse molestie consequat, vel illum dolore eu feugiat nulla
              facilisis at vero eros et accumsan et iusto odio
              dignissim.........
            </p>
          </div>
        </div>

        <div className="w-full flex items-center justify-center">
          <button className="mt-4 text-orange-500 text-sm font-medium hover:underline">
            View More
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProjectListingLeftColumn;
