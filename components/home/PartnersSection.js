"use client";
import Marquee from "react-fast-marquee";
import PartnerLogo1 from "@/public/assets/home-partners-logo-1.svg";
import PartnerLogo2 from "@/public/assets/home-partners-logo-2.svg";
import PartnerLogo3 from "@/public/assets/home-partners-logo-3.svg";
import PartnerLogo4 from "@/public/assets/home-partners-logo-4.svg";
import PartnerLogo5 from "@/public/assets/home-partners-logo-5.svg";
import PartnerLogo6 from "@/public/assets/home-partners-logo-6.svg";
import CommonImage from "../common/CommonImage";

export default function PartnersSection() {
  const partners = [
    {
      id: 1,
      name: "Jaquar",
      logo: PartnerLogo1,
    },
    {
      id: 2,
      name: "Saint Gobain",
      logo: PartnerLogo2,
    },
    {
      id: 3,
      name: "Century Ply",
      logo: PartnerLogo3,
    },
    {
      id: 4,
      name: "Bosch",
      logo: PartnerLogo4,
    },
    {
      id: 5,
      name: "Siemens",
      logo: PartnerLogo5,
    },
    {
      id: 6,
      name: "Hettich",
      logo: PartnerLogo6,
    },
  ];

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-3">
            Our trusted partners
          </h2>
          <p className="text-lg md:text-xl text-[#41303E] font-normal">
            Winning collaborations that produce winning designs.
          </p>
        </div>

        {/* Marquee */}
        <div className="relative">
          <Marquee
            gradient={false}
            speed={40}
            pauseOnHover={false}
            className="py-8"
          >
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="mx-12 flex items-center justify-center"
              >
                <CommonImage
                  src={partner.logo.src || partner.logo}
                  alt={partner.name}
                  className="h-20 w-auto object-contain"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
