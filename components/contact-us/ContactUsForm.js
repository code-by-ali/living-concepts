"use client";
import React, { useState } from "react";

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    budget: "$5000 - $10,000",
    message: "",
  });

  const budgetOptions = [
    "$5000 - $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000+",
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
            <span className="text-xl font-medium text-primary">A</span>
          </div>

          {/* Label */}
          <p className="shrink-0 text-sm font-normal text-primary uppercase tracking-wider">
            WHAT YOU NEED
          </p>

          {/* Horizontal Line */}
          <div className="grow border-t border-[#DCDCDC]"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] gap-8 md:gap-12 lg:gap-16">
          {/* Left Column - Contact Information */}
          <div>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-primary leading-tight mb-8">
              Catch us here
            </h2>

            <div className="space-y-6 text-[#8F8F8F]">
              <div className="border-b border-[#DCDCDC] pb-4">
                <p className="text-sm">info@onepage.com</p>
                <p className="text-sm">+123 456 789 00-12</p>
              </div>

              <div className="border-b border-[#DCDCDC] pb-4">
                <p className="text-sm">14580 Florence Trail</p>
                <p className="text-sm">Apple Valley, MN 55124</p>
              </div>

              <div>
                <p className="text-sm">Monday - Sunday,</p>
                <p className="text-sm">9am - 7pm EST</p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <div className="space-y-6">
              {/* Name and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-[#F5F5F5] border-0 rounded-lg focus:outline-none text-[#8F8F8F] placeholder:text-[#BFBFBF]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="Email address"
                    className="w-full px-4 py-3 bg-[#F5F5F5] border-0 rounded-lg focus:outline-none text-[#8F8F8F] placeholder:text-[#BFBFBF]"
                  />
                </div>
              </div>

              {/* Subject and Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => handleChange("subject", e.target.value)}
                    placeholder="Your Subject"
                    className="w-full px-4 py-3 bg-[#F5F5F5] border-0 rounded-lg focus:outline-none  text-[#8F8F8F] placeholder:text-[#BFBFBF]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Budget
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => handleChange("budget", e.target.value)}
                    className="w-full px-4 py-3 bg-[#F5F5F5] border-0 rounded-lg focus:outline-none text-[#8F8F8F] appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%238F8F8F'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 1rem center",
                      backgroundSize: "1.25rem",
                    }}
                  >
                    {budgetOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message Textarea */}
              <div>
                <label className="block text-sm font-medium text-black mb-2">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  placeholder="Message"
                  rows="6"
                  className="w-full px-4 py-3 bg-[#F5F5F5] border-0 rounded-lg focus:outline-none resize-none text-[#8F8F8F] placeholder:text-[#BFBFBF]"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full bg-[#E07B39] cursor-pointer text-white font-medium py-4 px-6 rounded-lg transition-colors duration-300"
              >
                Get A Free Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsForm;
