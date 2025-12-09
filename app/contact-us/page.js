import ContactBanner from "@/components/common/ContactBanner";
import CompanyReviewSection from "@/components/contact-us/CompanyReviewSection";
import ContactUsForm from "@/components/contact-us/ContactUsForm";
import ContactUsHeader from "@/components/contact-us/ContactUsHeader";
import FactsSection from "@/components/contact-us/FactsSection";
import React from "react";

const page = () => {
  return (
    <div>
      <ContactUsHeader />
      <ContactUsForm />
      <FactsSection />
      <CompanyReviewSection />
      <ContactBanner />
    </div>
  );
};

export default page;
