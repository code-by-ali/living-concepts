import { ArrowUpRight } from "lucide-react";
import BgImg from "@/public/assets/home-download-section-bg-img.svg";
import CommonImage from "../common/CommonImage";

export default function ContactBanner() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Image with overlay */}
      <div className="absolute inset-0">
        <CommonImage
          src={BgImg.src || BgImg}
          alt="Interior design"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-white mb-4">
          We are always open to collaboration and happy to welcome new projects.
        </h2>

        {/* Download Button */}
        <button className="inline-flex items-center cursor-pointer gap-3 px-1 py-2 min-w-44 bg-white text-primary hover:bg-gray-100 transition-all duration-300 rounded-full group">
          <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-full">
            <ArrowUpRight className="w-5 h-5 text-white" />
          </div>
          <span className="font-normal text-base text-primary">
            CONTACT US
          </span>
        </button>
      </div>
    </section>
  );
}
