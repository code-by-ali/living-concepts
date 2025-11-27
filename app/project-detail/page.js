import ContactBanner from "@/components/project-detail/ContactBanner";
import OtherServicesSection from "@/components/project-detail/OtherServicesSection";
import ProjectDetailHeader from "@/components/project-detail/ProjectDetailHeader";
import ProjectDetailSection from "@/components/project-detail/ProjectDetailSection";
import ContactUsSection from "@/components/projects/ContactUsSection";
import React from "react";

const page = () => {
  return (
    <div>
      <ProjectDetailHeader />
      {/* <ProjectDetailSection /> */}
      <ContactBanner />
      <OtherServicesSection />
      <ContactUsSection />
    </div>
  );
};

export default page;
