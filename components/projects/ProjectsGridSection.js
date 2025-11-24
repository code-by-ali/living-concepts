import React from "react";

const ProjectsGridSection = () => {
  const projects = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop",
      title: "Coastal Serenity",
      year: "2024",
      tags: ["Coastal Calm", "Nature"],
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      title: "Azure Hallway",
      year: "2025",
      tags: ["Oceanic", "Natural Light"],
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      title: "Urban Tranquility",
      year: "2024",
      tags: ["Minimalism", "Nature"],
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop",
      title: "Coastal Serenity",
      year: "2024",
      tags: ["Coastal Calm", "Nature"],
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      title: "Azure Hallway",
      year: "2025",
      tags: ["Oceanic", "Natural Light"],
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      title: "Urban Tranquility",
      year: "2024",
      tags: ["Minimalism", "Nature"],
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Row - Logo, Label, and Line */}
        <div className="flex items-center gap-4 mb-12">
          {/* Logo/Brand */}
          <div className="shrink-0 inline-flex items-center justify-center w-10 h-10 border border-primary">
            <span className="text-xl font-medium text-primary">A</span>
          </div>

          {/* Label */}
          <p className="shrink-0 text-sm font-normal text-primary uppercase tracking-wider">
            EXCLUSIVE
          </p>

          {/* Horizontal Line */}
          <div className="grow border-t border-[#DCDCDC]"></div>
        </div>

        {/* Heading and Description */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-primary leading-tight">
              Boldly rooted in Vision
            </h2>
          </div>
          <div className="flex items-center">
            <p className="text-[#8F8F8F] text-base font-normal leading-relaxed">
              We believe that architecture is more than just creating buildings;
              it's about shaping experiences, fostering connections & enhancing
              communities.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer bg-[#F1F0EE] p-3"
            >
              {/* Image */}
              <div className="relative aspect-4/3 overflow-hidden mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Info */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  {/* Title and Year */}
                  <h3 className="text-lg md:text-xl tracking-tight font-medium text-primary">
                    {project.title}
                  </h3>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-0">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs font-normal tracking-tight text-[#8F8F8F] border border-[#DCDCDC] px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-base font-normal tracking-tight text-[#8F8F8F]">
                  {project.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGridSection;
