// components/home/ProjectsSection.js

import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      location: "MIAMI, FL - 2025",
      title: "Custom Retail Display Units",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
      description:
        "A luxurious residential project featuring contemporary design elements, sumptuous materials, and state-of-the-art amenities.",
      category: "Retail",
      size: "89,640 Sq Ft.",
      service: "Architecture",
    },
    {
      id: 2,
      location: "SAN FRANCISCO, CA - 2024",
      title: "Urban Loft Transformation",
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800",
      description:
        "Incorporates green technologies for a sustainable workspace.",
      category: "Hospitality",
      size: "12,380 Sq Ft.",
      service: "Interior Design",
    },
    {
      id: 3,
      location: "SAN DIEGO, CA - 2023",
      title: "Luxury Condominium Development",
      image:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800",
      description:
        "A contemporary office space designed to enhance productivity and collaboration.",
      category: "Residential",
      size: "38,738 Sq Ft.",
      service: "Project Management",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Row - Logo, Label, and Line */}
        <div className="flex items-center gap-4 mb-8">
          {/* Logo/Brand */}
          <div className="shrink-0 inline-flex items-center justify-center w-10 h-10 border border-primary">
            <span className="text-xl font-medium text-primary">D</span>
          </div>

          {/* Label */}
          <p className="shrink-0 text-sm font-normal text-primary uppercase tracking-wider">
            WORK
          </p>

          {/* Horizontal Line */}
          <div className="grow border-t border-[#DCDCDC]"></div>
        </div>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-normal text-primary mb-3">
              Our Projects
            </h2>
            <p className="text-[#8F8F8F] font-normal max-w-xl">
              Discover our portfolio of completed projects, showcasing a variety
              of styles and functionalities.
            </p>
          </div>

          {/* View All Button */}
          <button className="inline-flex items-center gap-2 pl-1 pr-6 py-1 cursor-pointer rounded-full border border-black text-primary">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <ArrowUpRight className="w-5 h-5 text-white" />
            </div>
            <span className="text-sm font-normal">VIEW ALL PROJECTS</span>
          </button>
        </div>

        {/* Projects List */}
        <div className="space-y-16">
          {projects.map((project) => (
            <div
              key={project.id}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 pb-10 border-b border-[#DCDCDC] last:border-b-0"
            >
              {/* Left Column - Location, Title, Button */}
              <div className="space-y-6 flex flex-col">
                {/* Location & Date */}
                <p className="text-sm text-[#555555] uppercase tracking-wider">
                  {project.location}
                </p>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-medium text-primary leading-tight">
                  {project.title}
                </h3>

                {/* See Full Work Button */}
                <button className="w-fit mt-auto flex items-center gap-2 px-6 py-3 bg-secondary-orange text-white rounded-full">
                  <span className="text-sm font-medium">Get free quote</span>
                </button>
              </div>

              {/* Middle Column - Image */}
              <div>
                <div className="aspect-4/3 overflow-hidden ">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Right Column - Description & Details */}
              <div className="space-y-6">
                {/* Description */}
                <p className="text-[#8F8F8F] leading-relaxed font-normal text-base">
                  {project.description}
                </p>

                {/* Project Details */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2">
                    <p className="text-sm font-normal text-[#555555] uppercase">
                      CATEGORY
                    </p>
                    <p className="font-medium text-primary text-base text-right">
                      {project.category}
                    </p>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <p className="text-sm font-normal text-[#555555] uppercase">
                      SIZE
                    </p>
                    <p className="font-medium text-primary text-base text-right">
                      {project.size}
                    </p>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <p className="text-sm font-normal text-[#555555] uppercase">
                      SERVICE
                    </p>
                    <p className="font-medium text-primary text-base text-right">
                      {project.service}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
