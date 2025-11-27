import React from "react";
import { ArrowUpRight } from "lucide-react";

const OtherServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Project Management",
      description:
        "Offering end-to-end project management services, ensuring projects are delivered on time, within budget, and to the highest quality standards.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      title: "Feasibility Studies",
      description:
        "Conducting detailed feasibility studies to assess the viability of proposed projects, helping clients make informed decisions before committing to construction.",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      title: "Architectural Design",
      description:
        "Offering innovative and customized architectural design solutions that blend functionality with aesthetics, ensuring each project meets the unique needs of clients.",
      image:
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400&h=300&fit=crop",
    },
    {
      id: 4,
      title: "Urban Planning",
      description:
        "Providing comprehensive urban planning services, focusing on sustainable development, effective land use, and the creation of vibrant, livable communities.",
      image:
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=400&h=300&fit=crop",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-20">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-primary mb-4">
              Other Services
            </h2>
            <p className="text-[#555555] text-base font-normal  leading-relaxed max-w-xl">
              At Living Concept, we offer a range of premium architectural and
              design services tailored to meet your unique needs.
            </p>
          </div>

          {/* View All Services Button */}
          <button className="hidden md:inline-flex items-center gap-2 pl-1 pr-6 py-1 cursor-pointer rounded-full border border-black text-primary">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <ArrowUpRight className="w-5 h-5 text-white" />
            </div>
            <span className="text-sm font-normal">VIEW ALL SERVICES</span>
          </button>
        </div>

        {/* Services List */}
        <div className="space-y-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col md:grid md:grid-cols-3 gap-12 items-start pb-8 border-b border-[#DCDCDC] last:border-b-0"
            >
              {/* Service Title */}
              <div className="md:col-span-1">
                <h3 className="text-xl md:text-2xl font-medium text-primary">
                  {service.title}
                </h3>
              </div>

              {/* Service Description */}
              <div className="md:col-span-1">
                <p className="text-primary font-normal leading-relaxed text-sm md:text-base">
                  {service.description}
                </p>
              </div>

              {/* Service Image */}
              <div className="md:col-span-1 w-full">
                <div className="aspect-4/3 overflow-hidden lg:flex lg:justify-end">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-48 h-48 object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherServicesSection;
