import React from "react";
import ClientLogo1 from "@/public/assets/about-client-section-logo-1.svg";
import ClientLogo2 from "@/public/assets/about-client-section-logo-2.svg";
import ClientLogo3 from "@/public/assets/about-client-section-logo-3.svg";
import ClientLogo4 from "@/public/assets/about-client-section-logo-4.svg";
import ClientLogo5 from "@/public/assets/about-client-section-logo-5.svg";
import ClientLogo6 from "@/public/assets/about-client-section-logo-6.svg";
import ClientLogo7 from "@/public/assets/about-client-section-logo-7.svg";
import ClientLogo8 from "@/public/assets/about-client-section-logo-8.svg";
import CommonImage from "../common/CommonImage";

const ClientsSection = () => {
  const clients = [
    { id: 1, name: "Client 1", logo: ClientLogo1 },
    { id: 2, name: "Client 2", logo: ClientLogo2 },
    { id: 3, name: "Client 3", logo: ClientLogo3 },
    { id: 4, name: "Client 4", logo: ClientLogo4 },
    { id: 5, name: "Client 5", logo: ClientLogo5 },
    { id: 6, name: "Client 6", logo: ClientLogo6 },
    { id: 7, name: "Client 7", logo: ClientLogo7 },
    { id: 8, name: "Client 8", logo: ClientLogo8 },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Row - Logo, Label, and Line */}
        <div className="flex items-center gap-4 mb-12">
          {/* Logo/Brand */}
          <div className="shrink-0 inline-flex items-center justify-center w-10 h-10 border border-primary">
            <span className="text-xl font-medium text-primary">D</span>
          </div>

          {/* Label */}
          <p className="shrink-0 text-sm font-normal text-primary uppercase tracking-wider">
            CLIENTS
          </p>

          {/* Horizontal Line */}
          <div className="grow border-t border-[#DCDCDC]"></div>
        </div>

        {/* Heading and Description */}
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-primary leading-tight mb-4">
            The Experts Behind Our Success
          </h2>
          <p className="text-[#8F8F8F] leading-relaxed">
            We are honored to work with a diverse range of prestigious clients,
            each contributing to our portfolio of exceptional projects.
          </p>
        </div>

        {/* Clients Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {clients.map((client) => (
            <div
              key={client.id}
              className="bg-[#F5F5F5] p-8 flex items-center justify-center min-h-[120px]"
            >
              <CommonImage
                src={client.logo.src || client.logo}
                alt={client.name}
                className="max-w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
