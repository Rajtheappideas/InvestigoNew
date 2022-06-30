import React from "react";
import '../../assets/css/style.css'

const Gallery = () => {
  return (
    <div className="image__gallery section__space">
      <div className="image__gallery__area">
        <div className="gallery__single">
          <a href={require("../../assets/images/one.png")}>
            <img
              src={require("../../assets/images/one.png")}
              alt="Project Image"
            />
          </a>
        </div>
        <div className="gallery__single">
          <a href={require("../../assets/images/two.png")}>
            <img
              src={require("../../assets/images/two.png")}
              alt="Project Image"
            />
          </a>
        </div>
        <div className="gallery__single">
          <a href={require("../../assets/images/three.png")}>
            <img
              src={require("../../assets/images/three.png")}
              alt="Project Image"
            />
          </a>
        </div>
        <div className="gallery__single">
          <a href={require("../../assets/images/four.png")}>
            <img
              src={require("../../assets/images/four.png")}
              alt="Project Image"
            />
          </a>
        </div>
        <div className="gallery__single">
          <a href={require("../../assets/images/five.png")}>
            <img
              src={require("../../assets/images/five.png")}
              alt="Project Image"
            />
          </a>
        </div>
        <div className="gallery__single">
          <a href={require("../../assets/images/six.png")}>
            <img
              src={require("../../assets/images/six.png")}
              alt="Project Image"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
