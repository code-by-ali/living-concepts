// components/home/BlogSection.js

import { ArrowRight, ArrowUpRight, Ellipsis } from "lucide-react";

export default function BlogSection() {
  const blogs = [
    {
      id: 1,
      date: "May 15, 2025",
      category: "Architectural Trends",
      title:
        "The Future Of Living Concept In Architecture: Trends And Predictions",
      excerpt:
        "Speculating on the future of Living Concept in architecture, this article examines emerging trends, recent innovations that could redefine how Living Concept are used in the coming years.",
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800",
    },
    {
      id: 2,
      date: "Jun 18, 2025",
      category: "Cultural & Symbolic Architecture",
      title:
        "The Cultural Significance Of Living Concept Across Different Civilizations",
      excerpt:
        "A cultural exploration of Living Concept, detailing their symbolic meanings and importance in various societies throughout history, from religious symbols to representations of power and unity.",
      image:
        "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800",
    },
    {
      id: 3,
      date: "Feb 22, 2025",
      category: "Engineering & Structural Design",
      title: "Structural Benefits Of Living Concept In Building Design",
      excerpt:
        "An in-depth look at the engineering principles behind Living Concept, highlighting their strength, stability, why they continue to be a vital element in construction.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Row - Logo, Label, and Line */}
        <div className="flex items-center gap-4 mb-8">
          {/* Logo/Brand */}
          <div className="shrink-0 inline-flex items-center justify-center w-10 h-10 border border-primary">
            <span className="text-xl font-medium text-primary">E</span>
          </div>

          {/* Label */}
          <p className="shrink-0 text-sm font-normal text-primary uppercase tracking-wider">
            NEWS
          </p>

          {/* Horizontal Line */}
          <div className="grow border-t border-[#DCDCDC]"></div>
        </div>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-normal text-primary mb-3">
            Latest Blog Posts
          </h2>

          {/* View More Button */}
          <button className="inline-flex items-center gap-2 pl-1 pr-6 py-1 cursor-pointer rounded-full border border-black text-primary">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <ArrowUpRight className="w-5 h-5 text-white" />
            </div>
            <span className="text-sm font-normal">LEARN MORE</span>
          </button>
        </div>

        {/* Blog Posts */}
        <div className="space-y-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-[#DCDCDC] last:border-b-0"
            >
              {/* Left Column - Content */}
              <div className="md:col-span-2 space-y-4">
                {/* Date & Category */}

                <div className="flex items-center gap-2 text-sm text-[#555555] uppercase tracking-wider">
                  <span>{blog.date}</span>
                  <span>-</span>
                  <span>{blog.category}</span>
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-2xl font-medium text-primary leading-tight cursor-pointer">
                  {blog.title}
                </h3>

                {/* Excerpt */}
                <p className="text-[#555555] text-base leading-relaxed">{blog.excerpt}</p>

                {/* Read More Link */}
                <button className="inline-flex items-center gap-2 cursor-pointer text-base font-normal text-primary group">
                  <span>Read More</span>
                  <Ellipsis className="w-4 h-4" />
                </button>
              </div>

              {/* Right Column - Image */}
              <div className="md:col-span-1">
                <div className="aspect-4/3 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
