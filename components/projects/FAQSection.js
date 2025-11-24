"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      id: 1,
      question: "Can I customize the design of a Living Concept home?",
      answer:
        "Absolutely. Each Haven home is tailored to reflect your unique vision. From layouts to finishes, we work with you to create a space that perfectly suits your style and needs.",
    },
    {
      id: 2,
      question: "Where are Living Concept homes located?",
      answer:
        "Living Concept homes are located in prime locations across the country. Contact us to learn more about available locations and upcoming projects in your desired area.",
    },
    {
      id: 3,
      question: "What is the process for purchasing a Living Concept home?",
      answer:
        "Our process begins with an initial consultation to understand your needs, followed by design customization, financing options, and construction phases. We guide you through every step to ensure a smooth experience.",
    },
    {
      id: 4,
      question: "Do you offer fully custom-built homes?",
      answer:
        "Yes, we specialize in fully custom-built homes. Our team works closely with you to design and build a home that meets all your specifications, from architectural style to interior finishes.",
    },
    {
      id: 5,
      question: "How long does it take to complete a home?",
      answer:
        "The timeline varies depending on the complexity and customization of your project. On average, a Living Concept home takes 8-12 months from design approval to completion.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Row - Logo, Label, and Line */}
        <div className="flex items-center gap-4 mb-12">
          {/* Logo/Brand */}
          <div className="shrink-0 inline-flex items-center justify-center w-10 h-10 border border-primary">
            <span className="text-xl font-medium text-primary">C</span>
          </div>

          {/* Label */}
          <p className="shrink-0 text-sm font-normal text-primary uppercase tracking-wider">
            FREQUENTLY ASKED
          </p>

          {/* Horizontal Line */}
          <div className="grow border-t border-[#DCDCDC]"></div>
        </div>

        {/* Heading and Description */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-primary leading-tight">
              We are here for you.
            </h2>
          </div>
          <div className="flex items-center">
            <p className="text-[#8F8F8F] text-base font-normal  leading-relaxed">
              We believe that architecture is more than just creating buildings  
              it's about shaping experiences, fostering connections & enhancing
              communities.
            </p>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={faq.id} className="pb-4">
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="outline-none w-full flex items-center justify-between text-left py-4 hover:text-primary transition-colors"
              >
                <h3 className="cursor-pointer text-xl md:text-2xl font-medium text-primary pr-4">
                  {faq.question}
                </h3>
                <div className="shrink-0 w-8 h-8 bg-[#F2F4F7] rounded-full flex items-center justify-center">
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-primary" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-primary" />
                  )}
                </div>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-[#8F8F8F] text-base md:text-lg font-normal leading-relaxed pb-4 pr-12">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
