import OurTeamSection from "@/components/home/OurTeamSection";
import AboutSectionHome from "@/components/home/AboutSectionHome";
import AwardsSection from "@/components/home/AwardsSection";
import BlogSection from "@/components/home/BlogSection";
import DownloadSection from "@/components/home/DownloadSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import HeroSection from "@/components/home/HeroSection";
import PartnersSection from "@/components/home/PartnersSection";
import ProcessSection from "@/components/home/ProcessSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import ServicesSection from "@/components/home/ServicesSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <AboutSectionHome />
      <AwardsSection />
      <ServicesSection />
      <ProcessSection />
      <ProjectsSection />
      <OurTeamSection />
      <PartnersSection />
      <BlogSection />
      <DownloadSection />
    </div>
  );
}
