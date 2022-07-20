import React from "react";
import ContentLoader from "react-content-loader";

const SkeletonLoadingForPackages = () => {
  return (
    <ContentLoader
      speed={1}
      height={400}
      backgroundColor="#efe6e6"
      foregroundColor="#d7bcbc"
      animate
//       className="property__list__wrapper"
    >
      {/* image */}
      <rect x="0" y="0" rx="3" className="loadingforpackage" ry="3" width="100%" height="400" />
    </ContentLoader>
  );
};
export default SkeletonLoadingForPackages;
