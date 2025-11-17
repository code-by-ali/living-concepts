// components/common/Header.js

"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
  ];

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="w-full z-50 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-4 md:py-5 flex items-center justify-between bg-transparent absolute top-0 left-0">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <span className="text-white text-base sm:text-lg md:text-xl font-bebas tracking-wider">
            LIVING CONCEPT
          </span>
        </div>

        {/* Menu Icon */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors z-50 relative"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Full Width Dropdown Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-neutral-900/98 backdrop-blur-lg z-40 transition-all duration-500 ease-in-out overflow-y-auto ${
          isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 pt-20 pb-8 min-h-screen flex flex-col justify-center">
          {/* Navigation Links */}
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

      {/* Animation Keyframes */}
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