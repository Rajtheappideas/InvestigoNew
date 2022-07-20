import React, { useEffect, useState } from "react";
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
import axios from "axios";
import SkeletonLoading from "../SkeletonLoadingForProjects";
import { useUserContext } from "../../context/UserContext";

const Projects = () => {
  const { projects, loading } = useUserContext();

  // number with thousand commas
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  // calculate percetange of investors
  function calcPercentage(totalamount, invested) {
    const total = (invested / totalamount) * 100;
    return total.toFixed(2);
  }

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
              {loading ? (
                <div className="skeletonloading">
                  <SkeletonLoading />
                  <SkeletonLoading />
                  <SkeletonLoading />
                </div>
              ) : (
                projects.map((project, index) => (
                  <div className="col-lg-4 col-xl-4" key={index}>
                    <div className="property__grid__single">
                      <div className="img__effect">
                        <a href={`/projectdetails/${project?._id}`}>
                          <img
                            src={`https://investigo-tai.herokuapp.com/${project?.image}`}
                            alt={project?.title}
                          />
                        </a>
                      </div>
                      <div className="property__grid__single__inner">
                        <h4>{project?.title}</h4>
                        <p className="sub__info">
                          <FontAwesomeIcon icon={faLocationDot} />{" "}
                          {project?.location}
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
                              {numberWithCommas(project?.invested)}{" "}
                            </span>{" "}
                            <span className="project__has__investors__percent">
                              (
                              {calcPercentage(
                                project?.totalAmount,
                                project?.invested
                              )}
                              %){" "}
                            </span>
                          </p>
                        </div>
                        <div className="item__info">
                          <div className="item__info__single">
                            <p>Annual Return</p>
                            <h6>12-36 %</h6>
                          </div>
                          <div className="item__info__single">
                            <p>Property Type</p>
                            <h6>{project?.property}</h6>
                          </div>
                        </div>
                        <div className="invest__cta__wrapper">
                          <div className="invest__cta">
                            <a
                              href={`/projectdetails/${project?._id}`}
                              className="button button--effect"
                            >
                              Read More
                              <i className="fa-solid fa-arrow-right-long" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
