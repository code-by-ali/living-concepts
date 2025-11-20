// components/home/ServicesSection.js

"use client";

import { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CommonImage from "../common/CommonImage";

export default function ServicesSection() {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3.5);
  const [isClient, setIsClient] = useState(false);

  const projects = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
      category1: "Monochromatic Grey 2BHK",
      category2: "Starting 3.57L*",
      title: "Royal Skyline Premium Hotel",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
      category1: "Monochromatic Grey 2BHK",
      category2: "Starting 3.57L*",
      title: "Horizon View Commercial",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800",
      category1: "Monochromatic Grey 2BHK",
      category2: "Starting 3.57L*",
      title: "Crest Mansion Shopping",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800",
      category1: "Monochromatic Grey 2BHK",
      category2: "Starting 3.57L*",
      title: "Bowl Skyline Residential",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800",
      category1: "Monochromatic Grey 2BHK",
      category2: "Starting 3.57L*",
      title: "Modern Living Complex",
    },
  ];

  // Determine slides to show based on window width
  const updateSlidesToShow = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1280) {
        setSlidesToShow(3.5);
      } else if (window.innerWidth >= 1024) {
        setSlidesToShow(3);
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
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
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
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
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
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="shrink-0 inline-flex items-center justify-center w-10 h-10 border border-primary">
                <span className="text-xl font-medium text-primary">B</span>
              </div>
              <p className="shrink-0 text-sm font-normal text-primary uppercase tracking-wider">
                WHAT WE DO
              </p>
              <div className="grow border-t border-[#DCDCDC]"></div>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-4xl md:text-[40px] font-normal leading-tight text-primary">
                Home for every budget
              </h2>
              <p className="text-description text-base font-normal max-w-3xl">
                At Living Concept, we offer a range of premium architectural and
                design services tailored to meet your unique needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-16 md:py-24">
      <style>{`
        .slick-slider {
          overflow: hidden;
        }
        .slick-list {
          overflow: hidden;
          margin: 0 -12px;
        }
        .slick-slide > div {
          padding: 0 12px;
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
        {/* Header */}
        <div className="mb-12">
          {/* Top Row - Logo, Label, and Line */}
          <div className="flex items-center gap-4 mb-8">
            {/* Logo/Brand */}
            <div className="shrink-0 inline-flex items-center justify-center w-10 h-10 border border-primary">
              <span className="text-xl font-medium text-primary">B</span>
            </div>

            {/* Label */}
            <p className="shrink-0 text-sm font-normal text-primary uppercase tracking-wider">
              WHAT WE DO
            </p>

            {/* Horizontal Line */}
            <div className="grow border-t border-[#DCDCDC]"></div>
          </div>

          {/* Heading and Description */}
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl md:text-[40px] font-normal leading-tight text-primary">
              Home for every budget
            </h2>
            <p className="text-description text-base font-normal max-w-3xl">
              At Living Concept, we offer a range of premium architectural and
              design services tailored to meet your unique needs.
            </p>
          </div>
        </div>

        {/* Slider */}
        <div className="overflow-hidden">
          <Slider key={slidesToShow} ref={sliderRef} {...settings}>
            {projects.map((project) => (
              <div key={project.id} className="h-full">
                <div className="relative group overflow-hidden cursor-pointer">
                  {/* Image */}
                  <div className="aspect-3/4 overflow-hidden">
                    <CommonImage
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Overlay Content */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end py-6 px-3">
                    {/* Tags */}
                    <div className="flex mb-3">
                      <span className="text-sm font-medium text-white border border-white/50 px-1 py-1">
                        {project.category1}
                      </span>
                      <span className="text-sm font-medium text-white border border-white/50 px-1 py-1">
                        {project.category2}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-medium text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}