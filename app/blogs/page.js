import AllBlogsSection from "@/components/blogs/AllBlogsSection";
import BlogsHeader from "@/components/blogs/BlogsHeader";
import ContactBanner from "@/components/common/ContactBanner";
import React from "react";

const page = () => {
  return (
    <div>
      <BlogsHeader />
      <AllBlogsSection />
      <ContactBanner />
    </div>
  );
};

export default page;
