import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeftLong,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
import img1 from "../../assets/images/icons/san.png";
import img2 from "../../assets/images/icons/francisco.png";
import img3 from "../../assets/images/icons/weldon.png";

const Cities = () => {
  const data = [
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
              <div className="col-lg-4">
                <div className="custom__slide__btn">
                  <a
                    href="javascript:void(0)"
                    className="button button--effect prev"
                  >
                    <FontAwesomeIcon icon={faArrowLeftLong} />
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="button button--effect next"
                  >
                    <FontAwesomeIcon icon={faArrowRightLong} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="cities__item__wrapper">
            {data.map((city, i) => (
              <div className="cities__single__item" key={i}>
                <div className="img__box">
                  <img src={city?.img} alt={city?.title} />
                </div>
                <div>
                  <h5>{city?.title}</h5>
                  <p>{city?.properties}+ Properties</p>
                  <a
                    href="/properties"
                    className="button button--secondary button--effect"
                  >
                    Explore <i className="fa-solid fa-angle-right" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cities;
