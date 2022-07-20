import React, { useEffect, useState } from "react";
import img1 from "../../assets/images/icons/san.png";
import img2 from "../../assets/images/icons/francisco.png";
import img3 from "../../assets/images/icons/weldon.png";
import "../../assets/scss/layout/_sections.scss";
import Slider from "react-slick";
import axios from "axios";

const Cities = () => {
  const [projects, setProjects] = useState([]);

  const fetchProjects = () => {
    axios("https://investigo-tai.herokuapp.com/project")
      .then((res) => setProjects(res?.data?.projects))
      .catch((err) => console.log(err?.response?.data));
  };
  useEffect(() => {
    fetchProjects();
  }, []);

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
  const data = [
    {
      img: img1,
      title: "San Diego",
      properties: "201",
      link: "/projectdetails",
    },
    {
      img: img2,
      title: "San Francisco",
      properties: "201",
    },
    {
      img: img3,
      title: "The Weldon",
      properties: "201",
    },
    {
      img: img1,
      title: "San Diego",
      properties: "201",
    },
    {
      img: img2,
      title: "San Francisco",
      properties: "201",
    },
    {
      img: img3,
      title: "The Weldon",
      properties: "201",
    },
  ];
  var settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    className: "center",
    centerMode: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: true,
          dots: false,
          className: "center",
          centerMode: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: true,
          dots: false,
          className: "center",
          centerMode: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          className: "center",
          centerMode: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };
  return (
    <section className="cities section__space">
      <div className="container">
        <div className="cities__area">
          <div className="title__with__cta">
            <div className="row d-flex align-items-center">
              <div className="col-lg-8">
                <h2>
                  Explore By <span>Cities</span>
                </h2>
              </div>
              {/* <div className="col-lg-4">
                <div className="custom__slide__btn">
                  <a
                    href="javascript:void(0)"
                    id="prevArrow"
                    className="button button--effect prev "
                  >
                    <FontAwesomeIcon icon={faArrowLeftLong} />
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="button button--effect next "
                  >
                    <FontAwesomeIcon icon={faArrowRightLong} />
                  </a>
                </div>
              </div> */}
            </div>
          </div>

          <div className="cities__item__wrapper" style={{ height: "200px" }}>
            <Slider {...settings}>
              {projects.map((city, i) => (
                <div className="cities__single__item" key={i}>
                  <div className="img__box">
                    <img
                      src={`https://investigo-tai.herokuapp.com/${city?.image}`}
                      alt={city?.title}
                      // style={{ minWidth: "8rem", minHeight: "8rem" }}
                    />
                  </div>
                  <div>
                    <h5>
                      <span>{city?.location.split(",").pop()}</span>
                    </h5>
                    <p>201+ Properties</p>
                    <a
                      href={`/projectdetails/${city?._id}`}
                      className="button button--secondary button--effect"
                    >
                      Explore <i className="fa-solid fa-angle-right" />
                    </a>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cities;
