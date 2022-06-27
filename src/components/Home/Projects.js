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
} from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
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
    <section className="properties__grid section__space">
      <div className="container">
        <div className="properties__grid__area wow fadeInUp">
          <div className="title__with__cta">
            <div className="row d-flex align-items-center">
              <div className="col-lg-8">
                <h2>All Projects</h2>
              </div>
              <div className="col-lg-4">
                <div className="text-start text-lg-end">
                  <a
                    href="/packages"
                    className="button button--secondary button--effect"
                  >
                    Browse All Packages
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="property__grid__wrapper">
            <div className="row">
              {data.map((project, index) => (
                <div className="col-lg-4 col-xl-4" key={index}>
                  <div className="property__grid__single">
                    <div className="img__effect">
                      <a href="/projectdetails">
                        <img src={project?.img} alt={project?.title} />
                      </a>
                    </div>
                    <div className="property__grid__single__inner">
                      <h4>{project?.title}</h4>
                      <p className="sub__info">
                        <FontAwesomeIcon icon={faLocationDot} />{" "}
                        {project?.address}
                      </p>
                      <div className="progress__type">
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow={25}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <p className="project__has">
                          <span className="project__has__investors">
                            {project?.investors} Investors
                          </span>{" "}
                          |
                          <span className="project__has__investors__amount">
                            <FontAwesomeIcon icon={faDollarSign} />{" "}
                            {project?.amount}
                          </span>{" "}
                          <span className="project__has__investors__percent">
                            ({project?.percentage})
                          </span>
                        </p>
                      </div>
                      <div className="item__info">
                        <div className="item__info__single">
                          <p>Annual Return</p>
                          <h6>{project?.annualReturn}</h6>
                        </div>
                        <div className="item__info__single">
                          <p>Property Type</p>
                          <h6>{project?.propertyType}</h6>
                        </div>
                      </div>
                      <div className="invest__cta__wrapper">
                        <div className="countdown__wrapper">
                          <p className="secondary">
                            <FontAwesomeIcon icon={faClock} /> Left to invest
                          </p>
                          <div className="countdown">
                            <h5>
                              <span className="days">12</span>
                              <span className="ref">d</span>
                              <span className="seperator">:</span>
                            </h5>
                            <h5>
                              <span className="hours"> 10</span>
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
                            href="project-details.html"
                            className="button button--effect"
                          >
                            Invest Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
