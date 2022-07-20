import React from "react";
import ContentLoader from "react-content-loader";

const SkeletonLoadingForProjects = () => {
  return (
    <ContentLoader
      speed={1}
//       width={100}
//       height={674}
      backgroundColor="#efe6e6"
      foregroundColor="#d7bcbc"
      animate
      className="property__grid__single"
    >
      {/* image */}
      <rect x="0" y="0" rx="3" className="loading" ry="3" width="100%" height="600" />
    </ContentLoader>
  );
};
export default SkeletonLoadingForProjects;
