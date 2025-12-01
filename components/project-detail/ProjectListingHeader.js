"use client";
import { MapPin, Star, X, ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";

const ProjectListingHeader = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200",
  ];

  const displayedImages = images.slice(0, 5);
  const remainingCount = images.length - 5;

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") goToPrevious();
    if (e.key === "ArrowRight") goToNext();
  };

  return (
    <div>
      {/* === Header Section === */}
      <header className="px-4 pt-4 sm:px-6 sm:pt-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-start mb-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-primary">
              High-Rise Townhouse In California
            </h1>
            <div className="mt-1 flex flex-wrap items-center text-sm space-x-2">
              <span className="bg-[#E68138] text-sm font-normal text-white px-2 py-0.5 rounded">
                For Rent
              </span>
              <span className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-4 h-4 fill-yellow-500 text-yellow-500"
                  />
                ))}
                <span className="ml-1 text-[#636366] text-base font-normal">
                  (12 Reviews)
                </span>
              </span>
            </div>
            <p className="flex items-center gap-2 mt-1 text-[#636366] text-base font-normal">
              <MapPin className="w-5 h-5" />
              <span>Southwesten Ontario, Canada, California</span>
            </p>
          </div>
          <div className="text-left sm:text-right mt-3 sm:mt-0">
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#E68138]">
              $425,000
            </p>
            <p className="text-base font-normal text-[#636366]">1,350 sq Ft</p>
          </div>
        </div>
      </header>

      {/* === Gallery Section === */}
      <section className="p-4 sm:p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {/* Main large image - Left side */}
          <div
            className="w-full h-[300px] md:h-[400px] lg:h-[450px] cursor-pointer"
            onClick={() => openLightbox(0)}
          >
            <img
              src={displayedImages[0]}
              alt="High-Rise Townhouse"
              className="w-full h-full object-cover rounded-lg hover:opacity-90 transition-opacity"
            />
          </div>

          {/* Right side - 2x2 grid */}
          <div className="grid grid-cols-2 gap-3">
            {displayedImages.slice(1, 5).map((img, index) => {
              const actualIndex = index + 1;
              const isLast = actualIndex === 4 && remainingCount > 0;

              return (
                <div
                  key={actualIndex}
                  className="relative w-full h-[145px] md:h-[193px] lg:h-[218px] cursor-pointer"
                  onClick={() =>
                    isLast ? openLightbox(4) : openLightbox(actualIndex)
                  }
                >
                  <img
                    src={img}
                    alt={`Image ${actualIndex + 1}`}
                    className={`w-full h-full object-cover rounded-lg hover:opacity-90 transition-opacity ${
                      isLast ? "brightness-50" : ""
                    }`}
                  />
                  {isLast && (
                    <span className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold bg-black bg-opacity-40 rounded-lg">
                      +{remainingCount}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === Lightbox Modal === */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-9999 bg-black bg-opacity-95 flex items-center justify-center"
          onKeyDown={handleKeyDown}
          tabIndex={0}
          onClick={(e) => {
            if (e.target === e.currentTarget) closeLightbox();
          }}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Previous"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          {/* Image */}
          <div className="max-w-7xl max-h-[90vh] px-4 sm:px-16">
            <img
              src={images[currentImageIndex]}
              alt={`Image ${currentImageIndex + 1}`}
              className="w-full h-full object-contain max-h-[85vh]"
            />
          </div>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Next"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
            {currentImageIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectListingHeader;
