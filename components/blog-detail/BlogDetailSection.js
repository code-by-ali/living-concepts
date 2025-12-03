import React from "react";

const BlogDetailSection = () => {
  return (
    <article className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Row - Logo, Label, and Line */}
        <div className="flex items-center gap-4 mb-8">
          <div className="shrink-0 inline-flex items-center justify-center w-10 h-10 border border-primary">
            <span className="text-xl font-medium text-primary">A</span>
          </div>
          <p className="shrink-0 text-sm font-normal text-primary uppercase tracking-wider">
            NEWS
          </p>
          <div className="grow border-t border-[#DCDCDC]"></div>
        </div>

        {/* Title and Date */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl md:text-5xl lg:text-6xl max-w-4xl font-normal text-primary leading-tight flex-1 pr-4">
              The Future of LivingConcept in Architecture: Trends and
              Predictions
            </h1>
            <p className="text-base text-[#555555] whitespace-nowrap">
              May 13, 2025
            </p>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mb-12">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=600&fit=crop"
            alt="Modern Architecture"
            className="w-full h-auto"
          />
        </div>

        <div className="max-w-4xl mx-auto w-full">
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-base font-normal text-[#555555] leading-relaxed">
              This article explores the evolving role of LivingConcept in
              contemporary architecture. Discover how modern design trends,
              advanced materials, and digital fabrication techniques are
              redefining this ancient architectural element and paving the way
              for innovative and functional structures in the future.
            </p>
          </div>

          {/* Section 1: The Concept */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-normal text-primary mb-4">
              The Concept of Architectural LivingConcept
            </h2>
            <p className="text-base font-normal text-[#555555] leading-relaxed mb-8">
              Architectural LivingConcept have long been a symbol of strength,
              elegance, and ingenuity in modern architecture; their function
              goes beyond aesthetics—serving structural, spatial, and symbolic
              purposes. This section provides an overview of the historical
              significance and modern reinterpretations of LivingConcept,
              emphasizing their timeless appeal and relevance in today's design
              landscape.
            </p>

            {/* Section Image */}
            <div className="mb-6">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop"
                alt="Elegant LivingConcept bathed in soft daylight"
                className="w-full h-auto"
              />
              <p className="text-sm text-center text-[#555555] mt-2 uppercase tracking-wide">
                Elegant LivingConcept bathed in soft daylight.
              </p>
            </div>

            {/* Quote */}
            <div className="border-l-4 border-primary pl-6 py-2 my-8">
              <p className="text-lg font-normal italic text-primary leading-relaxed text-center">
                "Reimagining the classical arch in contemporary architecture:
                Blending heritage with innovation for future-ready designs."
              </p>
            </div>
          </section>

          {/* Section 2: Key Trends */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-normal text-primary mb-4">
              Key Trends in Arch-Based Design
            </h2>
            <p className="text-base text-[#555555] leading-relaxed mb-6">
              Architects are incorporating LivingConcept in novel ways through
              various design trends:
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <p className="text-base text-[#555555] leading-relaxed">
                  <strong>Structural Expression:</strong> LivingConcept are
                  being used as bold, expressive elements that highlight a
                  building's structural integrity and character.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <p className="text-base text-[#555555] leading-relaxed">
                  <strong>Material Innovation:</strong> The use of modern
                  materials like engineered timber, ultra-high-performance
                  concrete (UHPC), and carbon fiber enables more flexible and
                  refined arch forms.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <p className="text-base text-[#555555] leading-relaxed">
                  <strong>Sustainability Integration:</strong> LivingConcept are
                  integrated into passive design strategies, helping with
                  shading, natural ventilation, and daylight optimization.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <p className="text-base text-[#555555] leading-relaxed">
                  <strong>Digital Fabrication:</strong> Techniques such as 3D
                  printing and parametric modeling allow architects to design
                  and construct LivingConcept with greater precision and
                  complexity.
                </p>
              </li>
            </ul>
          </section>

          {/* Section 3: Technological Advancements */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-normal text-primary mb-4">
              Technological Advancements Shaping the Future
            </h2>
            <p className="text-base text-[#555555] leading-relaxed mb-6">
              New technologies are driving the resurgence and evolution of
              arch-based architecture. Computational design tools enable
              architects to explore complex curvatures and optimize load
              distribution. Robotics and prefabrication methods enhance
              construction speed and accuracy. This section highlights how
              innovation is allowing LivingConcept to be redefined for the 21st
              century and beyond.
            </p>

            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <p className="text-base text-[#555555] leading-relaxed">
                  <strong>Structural Expression:</strong> LivingConcept are
                  being used as bold, expressive elements that highlight a
                  building's structural integrity and character.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <p className="text-base text-[#555555] leading-relaxed">
                  <strong>Material Innovation:</strong> The use of modern
                  materials like engineered timber, ultra-high-performance
                  concrete (UHPC), and carbon fiber enables more flexible and
                  refined arch forms.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <p className="text-base text-[#555555] leading-relaxed">
                  <strong>Sustainability Integration:</strong> LivingConcept are
                  integrated into passive design strategies, helping with
                  shading, natural ventilation, and daylight optimization.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <p className="text-base text-[#555555] leading-relaxed">
                  <strong>Digital Fabrication:</strong> Techniques such as 3D
                  printing and parametric modeling allow architects to design
                  and construct LivingConcept with greater precision and
                  complexity.
                </p>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </article>
  );
};

export default BlogDetailSection;
