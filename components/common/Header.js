"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Detect project detail route
  const isProjectDetail = pathname?.startsWith("/project-detail");

  // Colors only for top header
  const headerTextColor = isProjectDetail ? "text-black" : "text-white";
  const headerIconColor = isProjectDetail ? "text-black" : "text-white";

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Projects", href: "/projects" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
  ];

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => (document.body.style.overflow = "unset");
  }, [isMenuOpen]);

  return (
    <>
      {/* ONLY THIS PART IS UPDATED */}
      <header className="w-full z-50 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-4 md:py-5 flex items-center justify-between bg-transparent absolute top-0 left-0">
        
        {/* Logo */}
        <a href="/" className={`cursor-pointer ${headerTextColor}`}>
          <span className="text-base sm:text-2xl md:text-3xl font-bebas tracking-wider">
            LIVING CONCEPT
          </span>
        </a>

        {/* Menu Icon */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`p-2 rounded-lg transition-colors z-50 relative ${headerIconColor}`}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* EVERYTHING BELOW REMAINS EXACTLY SAME — NOT TOUCHED */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-neutral-900/98 backdrop-blur-lg z-40 transition-all duration-500 ease-in-out overflow-y-auto ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 pt-20 pb-8 min-h-screen flex flex-col justify-center">
          <nav className="space-y-0">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block group"
                style={{
                  animation: isMenuOpen
                    ? `slideIn 0.4s ease-out ${index * 0.08}s both`
                    : "none",
                }}
              >
                <div className="flex items-center justify-between py-3 sm:py-4 border-b border-white/10 hover:border-white/30 transition-all">
                  <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-white group-hover:text-orange-500 transition-colors">
                    {link.name}
                  </span>
                  <span className="text-white/40 text-xs sm:text-sm group-hover:text-orange-500 transition-colors">
                    0{index + 1}
                  </span>
                </div>
              </a>
            ))}
          </nav>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}
