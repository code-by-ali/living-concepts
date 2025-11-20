import React from 'react';

const AboutAwardSection = () => {
  const awards = [
    {
      id: 1,
      category: "BEST LUXURY RESIDENTIAL DESIGN",
      title: "Architectural Digest Design Award - 2024"
    },
    {
      id: 2,
      category: "BEST MODERN INTERIOR DESIGN",
      title: "Luxury Design Awards - 2021"
    },
    {
      id: 3,
      category: "SUSTAINABLE ARCHITECTURE",
      title: "International Design Excellence Award - 2023"
    },
    {
      id: 4,
      category: "BEST NEW DEVELOPMENT",
      title: "European Property Awards - 2022"
    }
  ];

  return (
    <section className="bg-[#2C2C2C] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Row - Logo, Label, and Line */}
        <div className="flex items-center gap-4 mb-12">
          {/* Logo/Brand */}
          <div className="shrink-0 inline-flex items-center justify-center w-10 h-10 border border-white">
            <span className="text-xl font-medium text-white">C</span>
          </div>

          {/* Label */}
          <p className="shrink-0 text-sm font-normal text-white uppercase tracking-wider">
            AWARDS
          </p>

          {/* Horizontal Line */}
          <div className="grow border-t border-white/30"></div>
        </div>

        {/* Main Heading and Description */}
        <div className="mb-16 max-w-2xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-white leading-tight mb-4">
            Celebrating Excellence and Innovation
          </h2>
          <p className="text-gray-400 leading-relaxed">
            At Living Concept, our commitment to excellence has been recognized with numerous prestigious awards. These accolades reflect our dedication to pushing the boundaries of architectural design and our unwavering pursuit of quality.
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {awards.map((award) => (
            <div 
              key={award.id} 
              className="border-b border-white/20 pb-8"
            >
              <p className="text-xs md:text-sm text-gray-400 uppercase tracking-wider mb-3">
                {award.category}
              </p>
              <h3 className="text-xl md:text-2xl font-normal text-white">
                {award.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutAwardSection;