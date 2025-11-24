import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const SpacesThatInspireSection = () => {
  const spaces = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop",
      title: "Nordic Light Loft",
      tags: ["Scandinavian", "Functional Elegance"]
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      title: "Redwood Horizon",
      tags: ["Timber Architecture", "Nature Immersion"]
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      title: "Atelier Noir",
      tags: ["Monochrome", "Industrial Chic"]
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop",
      title: "Noir Cultura Studio",
      tags: ["Artistry", "Urban Minimalism"]
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop",
      title: "Maison Eclat Studio",
      tags: ["Statement Lighting", "Bright Expansive"]
    }
  ];

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
            FEATURED
          </p>

          {/* Horizontal Line */}
          <div className="grow border-t border-[#DCDCDC]"></div>
        </div>

        {/* Heading and Description */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="max-w-md text-4xl md:text-5xl lg:text-6xl font-normal text-primary leading-tight">
              Spaces that Inspire
            </h2>
          </div>
          <div className="flex items-center">
            <p className="text-[#8F8F8F] text-base font-normal leading-relaxed">
              We believe that architecture is more than just creating buildings it's about shaping experiences, fostering connections & enhancing communities.
            </p>
          </div> 
        </div>

        {/* Spaces Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {spaces.map((space) => (
            <div 
              key={space.id} 
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-4/3 overflow-hidden mb-4">
                <img
                  src={space.image}
                  alt={space.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Space Info */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-medium tracking-tight text-primary mb-2">
                    {space.title}
                  </h3>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {space.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs tracking-tight text-[#8F8F8F] border border-[#DCDCDC] px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow Icon */}
                <div className="shrink-0">
                  <div className="w-8 h-8 border border-primary rounded-full flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <ArrowUpRight className="w-4 h-4 text-primary group-hover:text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpacesThatInspireSection;