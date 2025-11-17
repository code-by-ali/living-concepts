// components/home/AwardsSection.js

import CommonImage from "../common/CommonImage";
import AwardsBgImg from "@/public/assets/home-awards-bg-image.png";
import AwardsIcon1 from "@/public/assets/home-awards-icon-1.svg";
import AwardsIcon2 from "@/public/assets/home-awards-icon-2.svg";

export default function AwardsSection() {
  return (
    <section className="relative w-full text-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${AwardsBgImg.src})` }}
      ></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* LEFT TEXT */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-medium leading-tight text-white">
              Designed to Inspire, Built to Be Remembered.
            </h2>
            <p className="text-white/80 max-w-md text-sm sm:text-base leading-relaxed">
              With award-winning designs and a commitment to excellence, we
              craft spaces that stand the test of time.
            </p>
          </div>

          {/* RIGHT CARDS */}
          <div className="relative">
            {/* MOBILE & TABLET (NO OVERLAP) */}
            <div className="flex flex-col gap-6 lg:hidden">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl">
                <div className="w-20 h-20 mb-4">
                  <CommonImage
                    src={AwardsIcon1.src}
                    alt="Award Icon 1"
                    className="w-full h-full object-contain opacity-90"
                  />
                </div>
                <h3 className="text-xl font-extrabold text-white mb-2">
                  HYPER BEST G2 - 2025 WINNER
                </h3>
                <p className="text-white/80 text-base leading-relaxed">
                  Awarded for redefining modern architecture with a perfect
                  blend of form, function, and innovation.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl">
                <div className="w-20 h-20 mb-4">
                  <CommonImage
                    src={AwardsIcon2.src}
                    alt="Award Icon 2"
                    className="w-full h-full object-contain opacity-90"
                  />
                </div>
                <h3 className="text-xl font-extrabold text-white mb-2">
                  ULTRA PRESTIGIOUS - GLOBAL DESIGN AWARD 2024
                </h3>
                <p className="text-white/80 text-base leading-relaxed">
                  Honoring architecture that blends visionary aesthetics with
                  environmental responsibility.
                </p>
              </div>
            </div>

            {/* DESKTOP (WITH OVERLAP) */}
            <div className="hidden lg:block relative h-[520px]">
              {/* Card 1 (Back / Left) */}
              <div
                className="absolute left-0 top-1/2 -translate-y-1/2 
                              w-[56%] bg-white/10 backdrop-blur-md rounded-2xl
                              p-7 pr-20 border border-white/20 shadow-2xl z-10"
              >
                <div className="w-32 h-32 mb-4">
                  <CommonImage
                    src={AwardsIcon1.src}
                    alt="Award Icon 1"
                    className="w-full h-full object-contain opacity-90"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  HYPER BEST G2 – 2025 WINNER
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Awarded for redefining modern architecture with a perfect
                  blend of form, function, and innovation.
                </p>
              </div>

              {/* Card 2 (Front / Right Overlapping) */}
              <div
                className="absolute left-[45%] top-1/2 -translate-y-1/2
                              w-[52%] bg-white/10 backdrop-blur-md rounded-2xl
                              p-7 border border-white/20 shadow-2xl z-20"
              >
                <div className="w-40 h-40 mb-4">
                  <CommonImage
                    src={AwardsIcon2.src}
                    alt="Award Icon 2"
                    className="w-full h-full object-contain opacity-90"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  ULTRA PRESTIGIOUS - GLOBAL DESIGN AWARD 2024
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Honoring architecture that blends visionary aesthetics with
                  environmental responsibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
