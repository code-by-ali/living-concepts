// components/PropertyListingPage.js
import React from "react";
import ProjectListingHeader from "./ProjectListingHeader";
import ProjectListingLeftColumn from "./ProjectListingLeftColumn";
import ProjectListingRightColumn from "./ProjectListingRightColumn";

const PropertyListingPage = () => {
  return (
    // Main Container
    <div className="min-h-screen bg-white p-2 sm:p-4 lg:p-8 mt-10">
      <div className="max-w-7xl mx-auto bg-white rounded-xl overflow-hidden">
        <ProjectListingHeader />

        {/* === Main Content Layout (Sidebar on top for Mobile, Sticky Sidebar on LG) === */}
        <div className="lg:flex lg:space-x-8 px-4 pb-4 sm:px-6 sm:pb-8">
          <ProjectListingLeftColumn />
          <ProjectListingRightColumn />
        </div>
      </div>
    </div>
  );
};

export default PropertyListingPage;
