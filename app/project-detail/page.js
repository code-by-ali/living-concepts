import ContactBanner from "@/components/common/ContactBanner";
import OtherServicesSection from "@/components/project-detail/OtherServicesSection";
import PropertyListingPage from "@/components/project-detail/PropertyListingPage";
import ContactUsSection from "@/components/projects/ContactUsSection";
import React from "react";

const page = () => {
  return (
    <div>
      <PropertyListingPage />
      <ContactBanner />
      <OtherServicesSection />
      <ContactUsSection />
    </div>
  );
};

export default page;
