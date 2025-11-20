import React from "react";
import CommonImage from "./CommonImage";
import CommonTopImage from "@/public/assets/common-top-bg-image.jpg";

const CommonTopSection = () => {
  return (
    <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden">
      <CommonImage
        src={CommonTopImage.src || CommonTopImage}
        alt="common-top-image"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default CommonTopSection;