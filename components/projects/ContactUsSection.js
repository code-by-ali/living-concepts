"use client";
import React, { useState } from "react";

const ContactUsSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    purpose: "Sales Inquiry",
    message: "",
    agreedToContact: false,
  });

  const purposes = [
    "General",
    "Sales Inquiry",
    "Setting Up",
    "Demo Request",
    "Feedback",
  ];

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const handleChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Row - Logo, Label, and Line */}
        <div className="flex items-center gap-4 mb-12">
          {/* Logo/Brand */}
          <div className="shrink-0 inline-flex items-center justify-center w-10 h-10 border border-primary">
            <span className="text-xl font-medium text-primary">D</span>
          </div>

          {/* Label */}
          <p className="shrink-0 text-sm font-normal text-primary uppercase tracking-wider">
            WHAT YOU NEED
          </p>

          {/* Horizontal Line */}
          <div className="grow border-t border-[#DCDCDC]"></div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Heading and Description */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-primary leading-tight mb-6">
              Contact Us
            </h2>
            <p className="text-[#8F8F8F] text-base font-normal leading-relaxed">
              We believe that architecture is more than just creating buildings
              it's about shaping experiences, fostering connections & enhancing
              communities.
            </p>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <div className="space-y-6">
              {/* Name and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-base md:text-lg font-medium text-primary mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="Cagasteyan Kurt"
                    className="w-full px-4 py-3 border border-[#DCDCDC] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label className="block text-base md:text-lg font-medium text-primary mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="cagastyankurt@gmail.com"
                    className="w-full px-4 py-3 border border-[#DCDCDC] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>

              {/* Purpose Radio Buttons */}
              <div>
                <label className="block text-base md:text-lg font-medium text-primary mb-3">
                  What is your contact purpose?
                </label>
                <div className="flex flex-wrap gap-3">
                  {purposes.map((purpose) => (
                    <label
                      key={purpose}
                      className="flex items-center cursor-pointer group"
                      onClick={() => handleChange("purpose", purpose)}
                    >
                      <div className="relative flex items-center justify-center">
                        <input
                          type="radio"
                          checked={formData.purpose === purpose}
                          onChange={() => {}}
                          className={`appearance-none w-5 h-5 border-2 rounded-full cursor-pointer focus:outline-none ${
                            formData.purpose === purpose
                              ? "border-[#F4A460] bg-[#F4A460]"
                              : "border-gray-300 bg-white"
                          }`}
                        />
                        {formData.purpose === purpose && (
                          <div className="absolute w-2.5 h-2.5 bg-white rounded-full pointer-events-none"></div>
                        )}
                      </div>
                      <span className="ml-2 text-base md:text-lg text-primary">
                        {purpose}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Message Textarea */}
              <div>
                <label className="block text-base md:text-lg font-medium text-primary mb-2">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  placeholder="Enter your message"
                  rows="5"
                  className="w-full px-4 py-3 border border-[#DCDCDC] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                ></textarea>
              </div>

              {/* Agreement Checkbox */}
              <div className="flex items-start">
                <input
                  type="checkbox"
                  checked={formData.agreedToContact}
                  onChange={(e) =>
                    handleChange("agreedToContact", e.target.checked)
                  }
                  className="w-5 h-5 mt-1 text-primary focus:ring-primary rounded"
                />
                <label className="ml-4 text-base md:text-lg text-primary">
                  I agree to be contacted via email.
                </label>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full bg-[#F4A460] text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
