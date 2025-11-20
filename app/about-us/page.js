import AboutAwardSection from "@/components/about-us/AboutAwardSection";
import AboutHeader from "@/components/about-us/AboutHeader";
import AboutStorySection from "@/components/about-us/AboutStorySection";
import ClientsSection from "@/components/about-us/ClientsSection";
import OurGoalSection from "@/components/about-us/OurGoalSection";
import OurTeamSection from "@/components/about-us/OurTeamSection";
import CommonTopSection from "@/components/common/CommonTopSection";
import React from "react";

const page = () => {
  return (
    <div>
      <CommonTopSection />
      <AboutHeader />
      {/* <AboutStorySection />
      <OurTeamSection />
      <OurGoalSection />
      <AboutAwardSection />
      <ClientsSection /> */}
    </div>
  );
};

export default page;
