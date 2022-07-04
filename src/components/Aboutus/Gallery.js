import React from "react";
import Slider from "react-slick";

const Gallery = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "red" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "green" }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoPlay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // className: "center",
    // centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="image__gallery section__space" style={{ height: "400px" }}>
      <div className="image__gallery__area">
        <Slider {...settings}>
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
        </Slider>
      </div>
    </div>
  );
};

export default Gallery;
