import React from "react";

const ProjectDetailSection = () => {
  const projectInfo = [
    { label: "Client", value: "Whitestone Group" },
    { label: "Location", value: "Greece" },
    { label: "Year", value: "2024" },
    { label: "Concept", value: "Coastal Calm" },
    { label: "Inspiration style", value: "Nature" },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Row - Logo, Label, and Line */}
        <div className="flex items-center gap-4 mb-12">
          <div className="shrink-0 inline-flex items-center justify-center w-10 h-10 border border-primary">
            <span className="text-xl font-medium text-primary">A</span>
          </div>
          <p className="shrink-0 text-sm font-normal text-primary uppercase tracking-wider">
            PROJECT BRIEF
          </p>
          <div className="grow border-t border-[#DCDCDC]"></div>
        </div>

        {/* Heading and Description */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-primary leading-tight">
              Design Portfolio
            </h2>
          </div>
          <div className="flex items-center">
            <p className="text-[#555555] text-base font-normal leading-relaxed">
              Proposed and completed residential projects by LivingConcept,
              featuring innovative designs, latest trends, and personalized
              aesthetics to match your lifestyle.
            </p>
          </div>
        </div>

        {/* Project Info Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 mb-8">
          {projectInfo.map((info, index) => (
            <div key={index}>
              <p className="text-base font-normal text-[#807B6C] mb-2">
                {info.label}
              </p>
              <p className="text-lg font-medium text-primary">{info.value}</p>
            </div>
          ))}
        </div>

        {/* Project Manager */}
        <div className="mb-16 bg-[#FAFAFA] p-3 flex items-center gap-4">
          <p className="text-base font-normal text-[#757575]">
            Project Management & Design:
          </p>
          <p className="text-base font-normal text-primary">Niccolò Bellini</p>
        </div>

        {/* Concept & Objective Section */}
        <div className="mb-16">
          <div className="bg-[#FAFAFA] p-6 md:p-8 mb-6">
            <h3 className="text-lg md:text-xl font-medium text-primary mb-4">
              Concept & Objective
            </h3>
            <p className="text-[#1F1F1F] font-normal leading-relaxed text-sm md:text-base">
              The intent was to offer guests a feeling of timeless, effortless
              escape. Through passive cooling, natural materials, and
              flow-oriented spatial planning, the villa invites deep rest. The
              design does not distract it hums in harmony with the waves.
            </p>
          </div>

          {/* Two Column Images */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="aspect-4/3 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop"
                alt="Concept image 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-4/3 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop"
                alt="Concept image 2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Inspiration Section */}
        <div className="mb-16">
          <div className="bg-white p-6 md:p-8 mb-6 flex items-start gap-20">
            <h3 className="text-lg md:text-xl font-medium text-primary mb-2 flex gap-2 items-center">
              <p className="h-3 w-3 bg-[#807B6C] rounded-full"></p>
              Inspiration
            </h3>
            <div>
              <p className="text-lg md:text-xl text-primary font-medium mb-3">
                The Sea as a Muse
              </p>
              <p className="text-[#1F1F1F] font-normal leading-relaxed text-sm md:text-base">
                This villa draws from Cycladic architecture and organic island
                textures. The rolling curves, filtered light, and chalky whites
                were inspired by seashells, tides, and ancient Greek dwellings.
                The architecture feels like it grew out of the cliff itself.
              </p>
            </div>
          </div>

          {/* Full Width Image */}
          <div className="aspect-video overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&h=800&fit=crop"
              alt="Inspiration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Project Detail Section */}
        <div className="mb-16">
          <div className="bg-white p-6 md:p-8 mb-6 flex items-start gap-20">
            <h3 className="text-lg md:text-xl font-medium text-primary mb-2 flex gap-2 items-center">
              <p className="h-3 w-3 bg-[#807B6C] rounded-full"></p>
              Project Detail
            </h3>
            <div className="max-w-4xl">
              <p className="text-lg md:text-xl font-medium text-primary mb-3">
                Set on a cliff edge with sweeping views of the Aegean Sea
              </p>
              <p className="text-[#1F1F1F] leading-relaxed font-normal text-sm md:text-base">
                This villa was designed for absolute relaxation. Everything
                flows with the wind open-air lounges, water walls, curved adobe
                forms, and rope-screened balconies. Our goal was to merge built
                and natural elements so gently that the architecture disappears
                at times.
                <br />
                <br />
                The interiors mirror the coastal rhythm: limestone plaster
                walls, textured linen, and coral-inspired decor. Local
                craftspeople built much of the furniture from reclaimed
                driftwood and island stone. Spaces are open yet intimate, where
                every corner feels kissed by sun and salt.
              </p>

              {/* Full Width Image */}
              <div className="aspect-video overflow-hidden mt-8">
                <img
                  src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&h=800&fit=crop"
                  alt="Project Detail"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailSection;
