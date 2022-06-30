import React from "react";
import img1 from "../../assets/images/property/project01.png";
import img2 from "../../assets/images/property/project02.png";
import img3 from "../../assets/images/property/project03.png";
import img4 from "../../assets/images/property/project04.png";
import img5 from "../../assets/images/property/project05.png";
import img6 from "../../assets/images/property/project06.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faDollarSign,
  faClock,
  faBars,
  faGrip,
} from "@fortawesome/free-solid-svg-icons";

const Properties = () => {
  const data = [
    {
      img: img1,
      title: "Hotel",
      address: "8706 Herrick Ave, Los Angeles",
      investors: "17",
      amount: "7,94,196",
      percentage: "14.56%",
      annualReturn: "2.5% + 4%",
      propertyType: "Commercial",
      remainTime: "",
    },
    {
      img: img2,
      title: "Mineral Exploitation",
      address: "3335 21 St, San Francisco",
      investors: "178",
      amount: "2,94,196",
      percentage: "34.56%",
      annualReturn: "255% + 4%",
      propertyType: "Commercial",
      remainTime: "",
    },
    {
      img: img3,
      title: "Agriculture",
      address: " 356 La Jolla, San Diego",
      investors: "167",
      amount: "10,94,196",
      percentage: "24.56%",
      annualReturn: "3.5% + 2%",
      propertyType: "Commercial",
      remainTime: "",
    },
    {
      img: img4,
      title: "Transport",
      address: "90071, Grand Avenue, San Diego",
      investors: "134",
      amount: "3,44,196",
      percentage: "64.56%",
      annualReturn: "7.5% + 9%",
      propertyType: "Commercial",
      remainTime: "",
    },
    {
      img: img5,
      title: "Telecommunication",
      address: "Colorado Springs, CO",
      investors: "559",
      amount: "9,94,196",
      percentage: "84.56%",
      annualReturn: "7.5% + 4%",
      propertyType: "Commercial",
      remainTime: "",
    },
    {
      img: img6,
      title: "Real Estate",
      address: "Gastonia, NC",
      investors: "132",
      amount: "1,14,196",
      percentage: "44.56%",
      annualReturn: "5.5% + 2%",
      propertyType: "Commercial",
      remainTime: "",
    },
  ];
  return (
    <section className="properties__filter section__space__bottom">
      <div className="container wow fadeInUp">
        <div className="properties__filter__wrapper">
          <h6>
            Showing <span>6</span> projects
          </h6>
          <div className="grid__wrapper">
            <select className="grid__select">
              <option data-display="Sort By">Sort By</option>
              <option value="grid">Date</option>
              <option value="list">Price</option>
            </select>
            <a
              href="javascript:void(0)"
              className="grid__btn grid__view grid__btn__active"
            >
              <FontAwesomeIcon icon={faGrip} />
            </a>
            <a href="javascript:void(0)" className="grid__btn grid__list">
              <FontAwesomeIcon icon={faBars} />
            </a>
          </div>
        </div>
        <div className="row property__grid__area__wrapper">
          {data.map((project, i) => (
            <div
              className="col-xl-4 col-md-6 property__grid__area__wrapper__inner"
              key={i}
            >
              <div className="property__list__wrapper property__grid">
                <div className="row d-flex align-items-center">
                  <div className="property__grid__area__wrapper__inner__two">
                    <div className="property__item__image column__space--secondary">
                      <div className="img__effect">
                        <a href="/">
                          <img src={project?.img} alt={project?.title} />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="property__grid__area__wrapper__inner__three">
                    <div className="property__item__content">
                      <div className="item__head">
                        <div className="item__head__left">
                          <h4>{project?.title}</h4>
                          <p>
                            <FontAwesomeIcon icon={faLocationDot} />{" "}
                            {project?.address}
                          </p>
                        </div>
                        <div className="item__head__right">
                          <div className="countdown__wrapper">
                            <p className="secondary">
                              <i className="fa-solid fa-clock" /> Left to invest
                            </p>
                            <div className="countdown">
                              <h5>
                                <span className="days">20</span>
                                <span className="ref">d</span>
                                <span className="seperator">:</span>
                              </h5>
                              <h5>
                                <span className="hours">10</span>
                                <span className="ref">h</span>
                                <span className="seperator">:</span>
                              </h5>
                              <h5>
                                <span className="minutes">24</span>
                                <span className="ref">m</span>
                                <span className="seperator" />
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="progress__type progress__type--two">
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow={25}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <div className="project__info">
                          <p className="project__has">
                            <span className="project__has__investors">
                              {project?.investors} Investors
                            </span>{" "}
                            |{" "}
                            <span className="project__has__investors__amount">
                              <FontAwesomeIcon icon={faDollarSign} />{" "}
                              {project?.amount}
                            </span>{" "}
                            <span className="project__has__investors__percent">
                              ({project?.percentage})
                            </span>
                          </p>
                          <p className="project__goal">
                            <FontAwesomeIcon icon={faDollarSign} /> 3,00,000
                            Goal
                          </p>
                        </div>
                      </div>
                      <div className="item__info">
                        <div className="item__info__single">
                          <p>Annual Return</p>
                          <h6>{project?.annualReturn}</h6>
                        </div>
                        <div className="item__info__single">
                          <p>Maximum Term</p>
                          <h6>36 Months</h6>
                        </div>
                        <div className="item__info__single">
                          <p>Property Type</p>
                          <h6>Commercial</h6>
                        </div>
                        <div className="item__info__single">
                          <p>Distribution</p>
                          <h6>Monthly</h6>
                        </div>
                      </div>
                      <div className="item__footer">
                        <div className="item__security">
                          <div className="icon__box">
                            <img src="assets/images/home.png" alt="Security" />
                          </div>
                          <div className="item__security__content">
                            <p className="secondary">Security</p>
                            <h6>1st-Rank Mortgage</h6>
                          </div>
                        </div>
                        <div className="item__cta__group">
                          <a
                            href="/signup"
                            className="button button--effect"
                          >
                            Invest Now
                          </a>
                          <a
                            href="/projectdetails"
                            className="button button--secondary button--effect"
                          >
                            Details
                          </a>
                        </div>
                      </div>
                      <div className="invest__cta__wrapper">
                        <div className="countdown__wrapper">
                          <p className="secondary">
                            <FontAwesomeIcon icon={faClock} /> Left to invest
                          </p>
                          <div className="countdown">
                            <h5>
                              <span className="days">20</span>
                              <span className="ref">d</span>
                              <span className="seperator">:</span>
                            </h5>
                            <h5>
                              <span className="hours">30</span>
                              <span className="ref">h</span>
                              <span className="seperator">:</span>
                            </h5>
                            <h5>
                              <span className="minutes">23</span>
                              <span className="ref">m</span>
                              <span className="seperator" />
                            </h5>
                          </div>
                        </div>
                        <div className="invest__cta">
                          <a
                            href="/projectdetails"
                            className="button button--effect"
                          >
                            Invest Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="cta__btn d-none">
          <a href="/" className="button button--effect">
            Load More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Properties;
