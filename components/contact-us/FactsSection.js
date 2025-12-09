"use client";
import React from "react";

const FactsSection = () => {
  const stats = [
    {
      label: "Property deliver",
      value: "1k",
      sign: "+",
    },
    {
      label: "Clients served worldwide",
      value: "2.3k",
      sign: "+",
    },
    {
      label: "Have awards more",
      value: "5",
      sign: "+",
    },
    {
      label: "Daily quote msg.",
      value: "12",
      sign: "+",
    },
    {
      label: "Ratings out of 5.0",
      value: "4.9",
      sign: "",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Row - Logo, Label, and Line */}
        <div className="flex items-center gap-4 mb-12">
          {/* Logo/Brand */}
          <div className="shrink-0 inline-flex items-center justify-center w-10 h-10 border border-black">
            <span className="text-xl font-medium text-black">B</span>
          </div>

          {/* Label */}
          <p className="shrink-0 text-sm font-normal text-black uppercase tracking-wider">
            FACTS
          </p>

          {/* Horizontal Line */}
          <div className="grow border-t border-[#DCDCDC]"></div>
        </div>

        {/* Centered Heading */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-normal text-primary leading-tight">
            Some more fun facts about company
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-white p-6 md:p-8 text-center lg:border-l lg:border-r border-[#E5E5E5] ${
                index % 2 === 0 ? "sm:border-r sm:border-[#E5E5E5]" : ""
              } ${index === 0 ? "sm:border-l sm:border-[#E5E5E5]" : ""} ${
                index < stats.length - 1
                  ? "border-b border-[#E5E5E5] sm:border-b-0"
                  : ""
              }`}
            >
              {/* Label */}
              <p className="text-sm md:text-base text-[#666666] mb-4 min-h-10 flex items-center justify-center">
                {stat.label}
              </p>

              {/* Value */}
              <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
                {stat.value}
                <sub className="text-2xl md:text-3xl">{stat.sign}</sub>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FactsSection;
