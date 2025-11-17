// components/common/Footer.js

export default function Footer() {
  return (
    <footer className="w-full bg-[#1E1E1E] text-gray-300 py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Main Flex Container */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">
          {/* LEFT: LOGO + COPYRIGHT (30% on large screens) */}
          <div className="lg:w-[30%] space-y-4 sm:space-y-6 flex flex-col">
            <h2 className="text-3xl md:text-4xl font-bebas tracking-wider text-white">
              LIVING CONCEPT
            </h2>

            <div className="text-sm text-white leading-relaxed font-normal mt-auto">
              <p>© 2025 Living Concept.</p>
              <p className="mt-1">
                {" "}
                <span className="text-white/60">Work by</span> AceWorks
              </p>
            </div>
          </div>

          {/* RIGHT: 4 COLUMNS (70% on large screens) */}
          <div className="lg:flex-1 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-8 lg:gap-10">
            {/* ADDRESS + EMAIL + CONTACT */}
            <div className="space-y-4 sm:space-y-6">
              <div>
                <h3 className="text-sm font-normal text-white/60 uppercase tracking-wide mb-2">
                  Address
                </h3>
                <p className="text-sm font-normal leading-relaxed text-white">
                  121, King Street Melbourne, <br /> 3000, Australia
                </p>
              </div>

              <div>
                <h3 className="text-sm font-normal text-white/60 uppercase tracking-wide mb-2">
                  Email
                </h3>
                <p className="text-sm font-normal text-white">hello@example.com</p>
              </div>

              <div>
                <h3 className="text-sm font-normal text-white/60 uppercase tracking-wide mb-2">
                  Contact Us
                </h3>
                <p className="text-sm font-normal text-white">+1 234 567 8800</p>
              </div>
            </div>

            {/* MENU */}
            <div className="space-y-3">
              <h3 className="text-sm font-normal text-white/60 uppercase tracking-wide mb-2">
                Menu
              </h3>

              <ul className="space-y-2 text-sm font-normal text-white">
                <li>
                  <a href="#" className="">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* SUPPORT */}
            <div className="space-y-3">
              <h3 className="text-sm font-normal text-white/60 uppercase tracking-wide mb-2">
                Support
              </h3>

              <ul className="space-y-2 text-sm font-normal text-white">
                <li>
                  <a href="#" className="">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    404
                  </a>
                </li>
              </ul>
            </div>

            {/* SOCIAL */}
            <div className="space-y-3">
              <h3 className="text-sm font-normal text-white/60 uppercase tracking-wide mb-2">
                Social
              </h3>

              <ul className="space-y-2 text-sm font-normal text-white">
                <li>
                  <a href="#" className="">
                    @twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    @instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    @facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    @linkedin
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
