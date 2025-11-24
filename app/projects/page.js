import ContactUsSection from "@/components/projects/ContactUsSection";
import DesignPortfolioSection from "@/components/projects/DesignPortfolioSection";
import FAQSection from "@/components/projects/FAQSection";
import ProjectsGridSection from "@/components/projects/ProjectsGridSection";
import ProjectsHeader from "@/components/projects/ProjectsHeader";
import SpacesThatInspireSection from "@/components/projects/SpacesThatInspireSection";
import React from "react";

const page = () => {
  return (
    <div>
      <ProjectsHeader />
      <DesignPortfolioSection />
      <ProjectsGridSection />
      <SpacesThatInspireSection />
      <FAQSection />
      <ContactUsSection />
    </div>
  );
};

export default page;
