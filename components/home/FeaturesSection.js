// components/home/FeaturesSection.js

import CommonImage from "../common/CommonImage";
import CardImg1 from "@/public/assets/home-features-section-image-1.svg";
import CardImg2 from "@/public/assets/home-features-section-image-2.svg";
import FeaturesIcon1 from "@/public/assets/home-features-section-icon-1.svg";
import FeaturesIcon2 from "@/public/assets/home-features-section-icon-2.svg";
import FeaturesIcon3 from "@/public/assets/home-features-section-icon-3.svg";
import FeaturesIcon4 from "@/public/assets/home-features-section-icon-4.svg";

export default function FeaturesSection() {
  const features = [
    {
      id: 1,
      icon: FeaturesIcon1,
      title: "Property Insurance",
      desc: "We offer our customer property protection of liability coverage and insurance for their better life.",
    },
    {
      id: 2,
      icon: FeaturesIcon2,
      title: "Best Price",
      desc: "Not sure what you should be charging? No need to worry, let us do the numbers for you.",
    },
    {
      id: 3,
      icon: FeaturesIcon3,
      title: "Lowest Commission",
      desc: "You no longer have to negotiate commissions and haggle — our agents cost only 2%!",
    },
    {
      id: 4,
      icon: FeaturesIcon4,
      title: "Overall Control",
      desc: "Get a virtual tour and schedule visits before renting or buying properties. You get overall control.",
    },
  ];

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Card */}
          <div className="bg-secondary-orange/10 p-6 sm:p-8 md:p-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-primary leading-tight sm:leading-snug">
              The new way to find new
              <br className="hidden sm:block" /> Interior for your home
            </h2>

            <p className="text-primary/70 font-medium mt-3 sm:mt-4 text-sm sm:text-base max-w-md">
              Find your dream place to live in with more than 10k+ properties
              listed.
            </p>

            <button className="mt-4 sm:mt-6 px-5 sm:px-6 py-2.5 sm:py-3 bg-secondary-orange cursor-pointer text-white rounded-full text-sm font-medium hover:bg-orange-600 transition-colors">
              Get free quote
            </button>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8 md:mt-10">
              <div className="overflow-hidden">
                <CommonImage
                  src={CardImg1.src || CardImg1}
                  alt="interior 1"
                  className="w-full h-32 sm:h-36 md:h-40 object-cover"
                />
              </div>
              <div className="overflow-hidden">
                <CommonImage
                  src={CardImg2.src || CardImg2}
                  alt="interior 2"
                  className="w-full h-32 sm:h-36 md:h-40 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Features List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {features.map((item) => (
              <div key={item.id} className="flex flex-col gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center shrink-0">
                  <CommonImage 
                    src={item.icon.src || item.icon} 
                    alt={item.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-primary">
                  {item.title}
                </h3>
                <p className="text-description font-medium text-sm sm:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}