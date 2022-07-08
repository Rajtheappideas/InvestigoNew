import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faDollarSign,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

const Properties = ({
  filteredData,
  data,
  filterDataByProperty,
}) => {
  const [showGrid, setShowGrid] = useState(false);

  return (
    <>
      <section className="properties__filter section__space__bottom">
        <div className="container wow fadeInUp">
          <div className="properties__filter__wrapper">
            <h6>
              Showing <span>6</span> projects
            </h6>
            <div className="grid__wrapper">
              <select
                className="grid__select"
                style={{
                  width: "auto",
                  padding: "10px",
                }}
              >
                <option data-display="Sort By">Sort By</option>
                <option value="grid">Date</option>
                <option value="list">Price</option>
              </select>
              <button
                // href="javascript:void(0)"
                className={`grid__btn grid__view ${
                  !showGrid && "grid__btn__active"
                }`}
                onClick={() => setShowGrid(false)}
              >
                <i className="fa-solid fa-grip"></i>
              </button>
              <button
                // href="javascript:void(0)"
                className={`grid__btn grid__view ${
                  showGrid && "grid__btn__active"
                }`}
                onClick={() => setShowGrid(true)}
              >
                <i className="fa-solid fa-bars"></i>
              </button>
            </div>
          </div>
          <div className="row property__grid__area__wrapper">
            {filteredData.length === 0 && filterDataByProperty.length === 0
              ? data.map((project, i) => (
                  <div
                    className={`property__grid__area__wrapper__inner ${
                      !showGrid && "col-xl-4 col-md-6"
                    }`}
                    key={i}
                  >
                    <div
                      className={`property__list__wrapper ${
                        !showGrid && "property__grid"
                      }`}
                    >
                      <div className="row d-flex align-items-center">
                        <div
                          className={`property__grid__area__wrapper__inner__two ${
                            showGrid && "col-xl-5"
                          }`}
                        >
                          <div className="property__item__image column__space--secondary">
                            <div className="img__effect">
                              <a href="/">
                                <img src={project?.img} alt={project?.title} />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          className={`property__grid__area__wrapper__inner__three ${
                            showGrid && "col-xl-7"
                          }`}
                        >
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
                                    <i className="fa-solid fa-clock" /> Left to
                                    invest
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
                                  <FontAwesomeIcon icon={faDollarSign} />{" "}
                                  3,00,000 Goal
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
                                <h6>{project?.propertyType}</h6>
                              </div>
                              <div className="item__info__single">
                                <p>Distribution</p>
                                <h6>Monthly</h6>
                              </div>
                            </div>
                            <div className="item__footer">
                              <div className="item__security">
                                <div className="icon__box">
                                  <img
                                    src={require("../../assets/images/home.png")}
                                    alt="Security"
                                  />
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
                                  <FontAwesomeIcon icon={faClock} /> Left to
                                  invest
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
                ))
              : filteredData.length !== 0
              ? filteredData.map((project, i) => (
                  <div
                    className={`property__grid__area__wrapper__inner ${
                      !showGrid && "col-xl-4 col-md-6"
                    }`}
                    key={i}
                  >
                    <div
                      className={`property__list__wrapper ${
                        !showGrid && "property__grid"
                      }`}
                    >
                      <div className="row d-flex align-items-center">
                        <div
                          className={`property__grid__area__wrapper__inner__two ${
                            showGrid && "col-xl-5"
                          }`}
                        >
                          <div className="property__item__image column__space--secondary">
                            <div className="img__effect">
                              <a href="/">
                                <img src={project?.img} alt={project?.title} />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          className={`property__grid__area__wrapper__inner__three ${
                            showGrid && "col-xl-7"
                          }`}
                        >
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
                                    <i className="fa-solid fa-clock" /> Left to
                                    invest
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
                                  <FontAwesomeIcon icon={faDollarSign} />{" "}
                                  3,00,000 Goal
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
                                <h6>{project?.propertyType}</h6>
                              </div>
                              <div className="item__info__single">
                                <p>Distribution</p>
                                <h6>Monthly</h6>
                              </div>
                            </div>
                            <div className="item__footer">
                              <div className="item__security">
                                <div className="icon__box">
                                  <img
                                    src={require("../../assets/images/home.png")}
                                    alt="Security"
                                  />
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
                                  <FontAwesomeIcon icon={faClock} /> Left to
                                  invest
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
                ))
              : filterDataByProperty.map((project, i) => (
                  <div
                    className={`property__grid__area__wrapper__inner ${
                      !showGrid && "col-xl-4 col-md-6"
                    }`}
                    key={i}
                  >
                    <div
                      className={`property__list__wrapper ${
                        !showGrid && "property__grid"
                      }`}
                    >
                      <div className="row d-flex align-items-center">
                        <div
                          className={`property__grid__area__wrapper__inner__two ${
                            showGrid && "col-xl-5"
                          }`}
                        >
                          <div className="property__item__image column__space--secondary">
                            <div className="img__effect">
                              <a href="/">
                                <img src={project?.img} alt={project?.title} />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div
                          className={`property__grid__area__wrapper__inner__three ${
                            showGrid && "col-xl-7"
                          }`}
                        >
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
                                    <i className="fa-solid fa-clock" /> Left to
                                    invest
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
                                  <FontAwesomeIcon icon={faDollarSign} />{" "}
                                  3,00,000 Goal
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
                                <h6>{project?.propertyType}</h6>
                              </div>
                              <div className="item__info__single">
                                <p>Distribution</p>
                                <h6>Monthly</h6>
                              </div>
                            </div>
                            <div className="item__footer">
                              <div className="item__security">
                                <div className="icon__box">
                                  <img
                                    src={require("../../assets/images/home.png")}
                                    alt="Security"
                                  />
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
                                  <FontAwesomeIcon icon={faClock} /> Left to
                                  invest
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
    </>
  );
};

export default Properties;
