import { ArrowUpRight } from "lucide-react";
import AboutImg1 from "@/public/assets/home-about-img-1.svg";
import AboutImg2 from "@/public/assets/home-about-img-2.svg";
import CommonImage from "../common/CommonImage";

export default function AboutSectionHome() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Row - Logo, Label, and Line */}
        <div className="flex items-center gap-4 mb-12">
          {/* Logo/Brand */}
          <div className="shrink-0 inline-flex items-center justify-center w-10 h-10 border border-primary">
            <span className="text-xl font-medium text-primary">A</span>
          </div>

          {/* About Us Label */}
          <p className="shrink-0 text-sm font-normal text-primary uppercase tracking-wider">
            ABOUT US
          </p>

          {/* Horizontal Line */}
          <div className="grow border-t border-[#DCDCDC]"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <h2 className="text-4xl md:text-[40px] font-normal leading-tight text-primary">
              Discover Our Journey to Architectural Excellence
            </h2>

            {/* Description Paragraphs */}
            <div className="space-y-4 text-description font-normal leading-relaxed text-base">
              <p>
                Living Concept has evolved from a small local studio into a
                leading architecture firm known for its innovative and
                sustainable design solutions.
              </p>
              <p>
                Our team combines extensive experience with a passion for
                creativity, aiming to push the boundaries of architecture while
                maintaining a strong commitment to our clients' needs.
              </p>
            </div>

            {/* About Us Button */}
            <button className="inline-flex items-center gap-2 pl-1 pr-6 py-1 cursor-pointer rounded-full border border-black text-primary">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <ArrowUpRight className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-normal">ABOUT US</span>
            </button>
          </div>

          {/* Right Column - Images and Stats */}
          <div className="space-y-6">
            {/* Images Grid */}
            <div className="grid grid-cols-2 gap-6">
              {/* Image 1 */}
              <div className="space-y-4">
                <div className="aspect-3/4 overflow-hidden">
                  <CommonImage
                    src={AboutImg1.src || AboutImg1}
                    alt="Modern architecture"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-normal mb-2 text-primary">
                    100%
                  </h3>
                  <p className="text-base text-description font-normal">
                    Projects successfully done this year
                  </p>
                </div>
              </div>

              {/* Image 2 */}
              <div className="space-y-4">
                <div className="aspect-3/4 overflow-hidden">
                  <img
                    src={AboutImg2.src || AboutImg2}
                    alt="Team collaboration"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-normal mb-2 text-primary">
                    12+
                  </h3>
                  <p className="text-base text-description font-normal">
                    Year skilled as an owner-operated full-range construction
                    business
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
