"use client";

import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowUpRight } from "lucide-react";

const OurTeamSection = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3.5);
  const [isClient, setIsClient] = useState(false);

  const teamMembers = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop",
      name: "Senior Consultant",
      role: "Senior Consultant",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=1000&fit=crop",
      name: "Luxury Specialist",
      role: "Luxury Specialist",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&h=1000&fit=crop",
      name: "Property Manager",
      role: "Property Manager",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&h=1000&fit=crop",
      name: "Senior Consultant",
      role: "Senior Consultant",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=1000&fit=crop",
      name: "Design Director",
      role: "Design Director",
    },
  ];

  // Determine slides to show based on window width
  const updateSlidesToShow = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1280) {
        setSlidesToShow(3.5);
      } else if (window.innerWidth >= 1024) {
        setSlidesToShow(2.5);
      } else if (window.innerWidth >= 768) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(1);
      }
    }
  };

  // Handle client-side mounting and resize
  useEffect(() => {
    setIsClient(true);
    updateSlidesToShow();

    const handleResize = () => {
      updateSlidesToShow();
      // Force slider to refresh after resize
      if (sliderRef.current) {
        sliderRef.current.slickGoTo(currentSlide);
      }
    };

    window.addEventListener("resize", handleResize);
    
    // Small delay to ensure proper initialization on mobile
    const timer = setTimeout(() => {
      updateSlidesToShow();
    }, 100);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, [currentSlide]);

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    beforeChange: (current, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Don't render slider until client-side
  if (!isClient) {
    return (
      <section className="bg-[#2C2C2C] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <div className="shrink-0 inline-flex items-center justify-center w-10 h-10 border border-white">
              <span className="text-xl font-medium text-white">E</span>
            </div>
            <p className="shrink-0 text-sm font-normal text-white uppercase tracking-wider">
              OUR TEAMS
            </p>
            <div className="grow border-t border-white/30"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#2C2C2C] py-16 md:py-24">
      <style>{`
        .slick-slider {
          overflow: hidden;
        }
        .slick-list {
          overflow: hidden;
          margin: 0 -16px;
        }
        .slick-slide > div {
          padding: 0 16px;
        }
        .slick-track {
          display: flex !important;
        }
        .slick-slide {
          height: inherit !important;
        }
        .slick-slide > div {
          height: 100%;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6">
        {/* Top Row - Logo, Label, and Line */}
        <div className="flex items-center gap-4 mb-12">
          {/* Logo/Brand */}
          <div className="shrink-0 inline-flex items-center justify-center w-10 h-10 border border-white">
            <span className="text-xl font-medium text-white">E</span>
          </div>

          {/* Label */}
          <p className="shrink-0 text-sm font-normal text-white uppercase tracking-wider">
            OUR TEAMS
          </p>

          {/* Horizontal Line */}
          <div className="grow border-t border-white/30"></div>
        </div>

        {/* Slider */}
        <div className="overflow-hidden">
          <Slider key={slidesToShow} ref={sliderRef} {...settings}>
            {teamMembers.map((member) => (
              <div key={member.id} className="h-full">
                <div className="group cursor-pointer">
                  {/* Image Container */}
                  <div className="relative aspect-3/4 overflow-hidden mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-xl font-medium text-white mb-1">
                        {member.name}
                      </h3>
                      <p className="text-sm font-medium text-white">
                        {member.role}
                      </p>
                    </div>

                    {/* Arrow Icon */}
                    <div className="w-8 h-8 pr-2 bg-[#2C2C2C] ring-1 ring-white rounded-full flex items-center justify-center">
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default OurTeamSection;