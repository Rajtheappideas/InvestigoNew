import React from "react";
import { Helmet } from "react-helmet";
import { Footer, Navbar } from "../components";
import bgImg from "../assets/images/banner/banner-two-bg.png";
import bgImg1 from "../assets/images/step-two-bg.png";
import bgImg2 from "../assets/images/testimonial/quote.png";
import bgImg3 from "../assets/images/testimonial/dot-map.png";

const Accomplished = () => {
  return (
    <>
      <Helmet>
        <title>investigo - Accomplished</title>
      </Helmet>
      <Navbar />
      {/*banner  */}
      <section
        className="banner__alt bg__img"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="container">
          <div className="banner__alt__area neut">
            <h5 className="neutral-top">
              Invest in loans and let your money GROW!
            </h5>
            <h1 className="neutral-top neutral-bottom">
              Invest in Business Loans
            </h1>
          </div>
        </div>
      </section>
      {/* properties filter */}
      <div className="property__filter property__filter__two">
        <div className="container">
          <div className="property__filter__area">
            <div className="row d-flex align-items-end">
              <div className="col-lg-12 col-xl-6 col-xxl-4">
                <div className="property__search__wrapper">
                  <p className="neutral-top">The name of the loan:</p>
                  <form action="#" method="post">
                    <div className="input">
                      <input
                        type="search"
                        name="property__search"
                        id="propertySearch"
                        placeholder="Search for properties"
                      />
                      <i className="fa-solid fa-magnifying-glass" />
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-6 col-xl-6 col-xxl-3">
                <div className="property__select__wrapper">
                  <p className="neutral-top">Loan Status</p>
                  <select className="location__select">
                    <option data-display="Waiting for Investments">
                      Waiting for Investments
                    </option>
                    <option value="com">Completed</option>
                    <option value="pro">In Progress</option>
                    <option value="sub">Submitted</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-6 col-xl-6 col-xxl-3">
                <div className="property__select__wrapper">
                  <p className="neutral-top">Rish Class:</p>
                  <select className="property__select">
                    <option data-display="All">All</option>
                    <option value="commercial">Commercial</option>
                    <option value="residential">Residential</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-12 col-xl-6 col-xxl-2">
                <button type="submit" className="button button--effect">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* property grid */}
      <section class="alt__loan section__space__bottom">
        <div class="container">
          <div class="alt__loan__area wow fadeInUp">
            <div class="properties__filter__wrapper">
              <h6>
                Showing <span>505</span> Business Loans
              </h6>
              <div class="grid__wrapper">
                <select class="grid__select">
                  <option data-display="Sort By">Sort By</option>
                  <option value="grid">Date</option>
                  <option value="list">Price</option>
                </select>
                <a
                  href="javascript:void(0)"
                  class="grid__btnn grid__vieww grid__btnn__active"
                >
                  <i class="fa-solid fa-grip"></i>
                </a>
                <a href="javascript:void(0)" class="grid__btnn grid__listt">
                  <i class="fa-solid fa-bars"></i>
                </a>
              </div>
            </div>
            <div class="row alt__loan__row">
              <div class="col-md-6 col-xl-4 alt__loan__grid">
                <div class="alt__loan__grid__single">
                  <div class="imi__alt">
                    <div class="img__effect">
                      <a href="/propertydetails">
                        <img
                          src={require("../assets/images/property/one.png")}
                          alt="Los Angeles"
                        />
                      </a>
                      <div class="ribbon">
                        <p>Waiting For Invest</p>
                      </div>
                    </div>
                    <div class="alt__loan__content">
                      <div class="item__head">
                        <div class="item__head__left">
                          <p>Elegant Industries</p>
                          <h5>
                            <a href="/businessloandetails">
                              LTD Statybų taktikos
                            </a>
                          </h5>
                        </div>
                      </div>
                      <div class="progress__type progress__type--three">
                        <p class="collected">Collected Amount</p>
                        <div class="progress">
                          <div
                            class="progress-bar"
                            role="progressbar"
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <p class="project__has">
                          <span class="project__has__investors">
                            19 Investors
                          </span>{" "}
                          |{" "}
                          <span class="project__has__investors__amount">
                            <i class="fa-solid fa-dollar-sign"></i>
                            6,94,196
                          </span>{" "}
                          <span class="project__has__investors__percent">
                            (35.73%)
                          </span>
                        </p>
                      </div>
                      <div class="item__info">
                        <div class="item__info__single">
                          <p>Annual Return</p>
                          <h6>7.5% + 2%</h6>
                        </div>
                        <div class="item__info__single">
                          <p>Maximum Term</p>
                          <h6>12 Months</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="alt__loan__foot">
                    <div class="invest__cta__wrapper">
                      <div class="countdown__wrapper">
                        <p class="secondary">
                          <i class="fa-solid fa-clock"></i> Left to invest
                        </p>
                        <div class="countdown">
                          <h5>
                            <span class="days">00</span>
                            <span class="ref">d</span>
                            <span class="seperator">:</span>
                          </h5>
                          <h5>
                            <span class="hours"> 00</span>
                            <span class="ref">h</span>
                            <span class="seperator">:</span>
                          </h5>
                          <h5>
                            <span class="minutes">00</span>
                            <span class="ref">m</span>
                            <span class="seperator"></span>
                          </h5>
                        </div>
                      </div>
                      <div class="invest__cta">
                        <a
                          href="/businessloandetails"
                          class="button button--effect"
                        >
                          Invest Now
                        </a>
                        <p class="secondary">Business loan #00134</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-xl-4 alt__loan__grid">
                <div class="alt__loan__grid__single">
                  <div class="imi__alt">
                    <div class="img__effect">
                      <a href="/propertydetails">
                        <img
                          src={require("../assets/images/property/two.png")}
                          alt="Los Angeles"
                        />
                      </a>
                      <div class="ribbon">
                        <p>Waiting For Invest</p>
                      </div>
                    </div>
                    <div class="alt__loan__content">
                      <div class="item__head">
                        <div class="item__head__left">
                          <p>Tagline Industries</p>
                          <h5>
                            <a href="/businessloandetails">LTD Orandis</a>
                          </h5>
                        </div>
                      </div>
                      <div class="progress__type progress__type--three">
                        <p class="collected">Collected Amount</p>
                        <div class="progress">
                          <div
                            class="progress-bar"
                            role="progressbar"
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <p class="project__has">
                          <span class="project__has__investors">
                            59 Investors
                          </span>{" "}
                          |{" "}
                          <span class="project__has__investors__amount">
                            <i class="fa-solid fa-dollar-sign"></i>
                            1,04,196
                          </span>{" "}
                          <span class="project__has__investors__percent">
                            (94.73%)
                          </span>
                        </p>
                      </div>
                      <div class="item__info">
                        <div class="item__info__single">
                          <p>Annual Return</p>
                          <h6>9.5% + 12%</h6>
                        </div>
                        <div class="item__info__single">
                          <p>Maximum Term</p>
                          <h6>48 Months</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="alt__loan__foot">
                    <div class="invest__cta__wrapper">
                      <div class="countdown__wrapper">
                        <p class="secondary">
                          <i class="fa-solid fa-clock"></i> Left to invest
                        </p>
                        <div class="countdown">
                          <h5>
                            <span class="days">00</span>
                            <span class="ref">d</span>
                            <span class="seperator">:</span>
                          </h5>
                          <h5>
                            <span class="hours"> 00</span>
                            <span class="ref">h</span>
                            <span class="seperator">:</span>
                          </h5>
                          <h5>
                            <span class="minutes">00</span>
                            <span class="ref">m</span>
                            <span class="seperator"></span>
                          </h5>
                        </div>
                      </div>
                      <div class="invest__cta">
                        <a
                          href="/businessloandetails"
                          class="button button--effect"
                        >
                          Invest Now
                        </a>
                        <p class="secondary">Business loan #00199</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-xl-4 alt__loan__grid">
                <div class="alt__loan__grid__single">
                  <div class="imi__alt">
                    <div class="img__effect">
                      <a href="/propertydetails">
                        <img
                          src={require("../assets/images/property/three.png")}
                          alt="Los Angeles"
                        />
                      </a>
                      <div class="ribbon">
                        <p>Waiting For Invest</p>
                      </div>
                    </div>
                    <div class="alt__loan__content">
                      <div class="item__head">
                        <div class="item__head__left">
                          <p>Circle Tree</p>
                          <h5>
                            <a href="/businessloandetails">LTD Pri,ita</a>
                          </h5>
                        </div>
                      </div>
                      <div class="progress__type progress__type--three">
                        <p class="collected">Collected Amount</p>
                        <div class="progress">
                          <div
                            class="progress-bar"
                            role="progressbar"
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <p class="project__has">
                          <span class="project__has__investors">
                            99 Investors
                          </span>{" "}
                          |{" "}
                          <span class="project__has__investors__amount">
                            <i class="fa-solid fa-dollar-sign"></i>
                            2,94,196
                          </span>{" "}
                          <span class="project__has__investors__percent">
                            (14.73%)
                          </span>
                        </p>
                      </div>
                      <div class="item__info">
                        <div class="item__info__single">
                          <p>Annual Return</p>
                          <h6>1.5% + 1%</h6>
                        </div>
                        <div class="item__info__single">
                          <p>Maximum Term</p>
                          <h6>36 Months</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="alt__loan__foot">
                    <div class="invest__cta__wrapper">
                      <div class="countdown__wrapper">
                        <p class="secondary">
                          <i class="fa-solid fa-clock"></i> Left to invest
                        </p>
                        <div class="countdown">
                          <h5>
                            <span class="days">00</span>
                            <span class="ref">d</span>
                            <span class="seperator">:</span>
                          </h5>
                          <h5>
                            <span class="hours"> 00</span>
                            <span class="ref">h</span>
                            <span class="seperator">:</span>
                          </h5>
                          <h5>
                            <span class="minutes">00</span>
                            <span class="ref">m</span>
                            <span class="seperator"></span>
                          </h5>
                        </div>
                      </div>
                      <div class="invest__cta">
                        <a
                          href="/businessloandetails"
                          class="button button--effect"
                        >
                          Invest Now
                        </a>
                        <p class="secondary">Business loan #00198</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-xl-4 alt__loan__grid">
                <div class="alt__loan__grid__single">
                  <div class="imi__alt">
                    <div class="img__effect">
                      <a href="/propertydetails">
                        <img
                          src={require("../assets/images/property/four.png")}
                          alt="Los Angeles"
                        />
                      </a>
                      <div class="ribbon">
                        <p>Waiting For Invest</p>
                      </div>
                    </div>
                    <div class="alt__loan__content">
                      <div class="item__head">
                        <div class="item__head__left">
                          <p>Innovations</p>
                          <h5>
                            <a href="/businessloandetails">
                              LTD UAB ARGO Energija
                            </a>
                          </h5>
                        </div>
                      </div>
                      <div class="progress__type progress__type--three">
                        <p class="collected">Collected Amount</p>
                        <div class="progress">
                          <div
                            class="progress-bar"
                            role="progressbar"
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <p class="project__has">
                          <span class="project__has__investors">
                            59 Investors
                          </span>{" "}
                          |{" "}
                          <span class="project__has__investors__amount">
                            <i class="fa-solid fa-dollar-sign"></i>
                            1,04,196
                          </span>{" "}
                          <span class="project__has__investors__percent">
                            (84.73%)
                          </span>
                        </p>
                      </div>
                      <div class="item__info">
                        <div class="item__info__single">
                          <p>Annual Return</p>
                          <h6>0.5% + 2%</h6>
                        </div>
                        <div class="item__info__single">
                          <p>Maximum Term</p>
                          <h6>36 Months</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="alt__loan__foot">
                    <div class="invest__cta__wrapper">
                      <div class="countdown__wrapper">
                        <p class="secondary">
                          <i class="fa-solid fa-clock"></i> Left to invest
                        </p>
                        <div class="countdown">
                          <h5>
                            <span class="days">00</span>
                            <span class="ref">d</span>
                            <span class="seperator">:</span>
                          </h5>
                          <h5>
                            <span class="hours"> 00</span>
                            <span class="ref">h</span>
                            <span class="seperator">:</span>
                          </h5>
                          <h5>
                            <span class="minutes">00</span>
                            <span class="ref">m</span>
                            <span class="seperator"></span>
                          </h5>
                        </div>
                      </div>
                      <div class="invest__cta">
                        <a
                          href="/businessloandetails"
                          class="button button--effect"
                        >
                          Invest Now
                        </a>
                        <p class="secondary">Business loan #00594</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-xl-4 alt__loan__grid">
                <div class="alt__loan__grid__single">
                  <div class="imi__alt">
                    <div class="img__effect">
                      <a href="/propertydetails">
                        <img
                          src={require("../assets/images/property/five.png")}
                          alt="Los Angeles"
                        />
                      </a>
                      <div class="ribbon">
                        <p>Waiting For Invest</p>
                      </div>
                    </div>
                    <div class="alt__loan__content">
                      <div class="item__head">
                        <div class="item__head__left">
                          <p>Rise Up</p>
                          <h5>
                            <a href="/businessloandetails">
                              UAB Baltic Sun Projects
                            </a>
                          </h5>
                        </div>
                      </div>
                      <div class="progress__type progress__type--three">
                        <p class="collected">Collected Amount</p>
                        <div class="progress">
                          <div
                            class="progress-bar"
                            role="progressbar"
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <p class="project__has">
                          <span class="project__has__investors">
                            19 Investors
                          </span>{" "}
                          |{" "}
                          <span class="project__has__investors__amount">
                            <i class="fa-solid fa-dollar-sign"></i>
                            8,94,196
                          </span>{" "}
                          <span class="project__has__investors__percent">
                            (54.73%)
                          </span>
                        </p>
                      </div>
                      <div class="item__info">
                        <div class="item__info__single">
                          <p>Annual Return</p>
                          <h6>5.5% + 2%</h6>
                        </div>
                        <div class="item__info__single">
                          <p>Maximum Term</p>
                          <h6>36 Months</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="alt__loan__foot">
                    <div class="invest__cta__wrapper">
                      <div class="countdown__wrapper">
                        <p class="secondary">
                          <i class="fa-solid fa-clock"></i> Left to invest
                        </p>
                        <div class="countdown">
                          <h5>
                            <span class="days">00</span>
                            <span class="ref">d</span>
                            <span class="seperator">:</span>
                          </h5>
                          <h5>
                            <span class="hours"> 00</span>
                            <span class="ref">h</span>
                            <span class="seperator">:</span>
                          </h5>
                          <h5>
                            <span class="minutes">00</span>
                            <span class="ref">m</span>
                            <span class="seperator"></span>
                          </h5>
                        </div>
                      </div>
                      <div class="invest__cta">
                        <a
                          href="/businessloandetails"
                          class="button button--effect"
                        >
                          Invest Now
                        </a>
                        <p class="secondary">Business loan #00694</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-xl-4 alt__loan__grid">
                <div class="alt__loan__grid__single">
                  <div class="imi__alt">
                    <div class="img__effect">
                      <a href="/propertydetails">
                        <img
                          src={require("../assets/images/property/six.png")}
                          alt="Los Angeles"
                        />
                      </a>
                      <div class="ribbon">
                        <p>Waiting For Invest</p>
                      </div>
                    </div>
                    <div class="alt__loan__content">
                      <div class="item__head">
                        <div class="item__head__left">
                          <p>Infinite Electric</p>
                          <h5>
                            <a href="/businessloandetails">
                              LTD verslo Valstija
                            </a>
                          </h5>
                        </div>
                      </div>
                      <div class="progress__type progress__type--three">
                        <p class="collected">Collected Amount</p>
                        <div class="progress">
                          <div
                            class="progress-bar"
                            role="progressbar"
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <p class="project__has">
                          <span class="project__has__investors">
                            59 Investors
                          </span>{" "}
                          |{" "}
                          <span class="project__has__investors__amount">
                            <i class="fa-solid fa-dollar-sign"></i>
                            2,14,196
                          </span>{" "}
                          <span class="project__has__investors__percent">
                            (24.73%)
                          </span>
                        </p>
                      </div>
                      <div class="item__info">
                        <div class="item__info__single">
                          <p>Annual Return</p>
                          <h6>3.5% + 2%</h6>
                        </div>
                        <div class="item__info__single">
                          <p>Maximum Term</p>
                          <h6>36 Months</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="alt__loan__foot">
                    <div class="invest__cta__wrapper">
                      <div class="countdown__wrapper">
                        <p class="secondary">
                          <i class="fa-solid fa-clock"></i> Left to invest
                        </p>
                        <div class="countdown">
                          <h5>
                            <span class="days">00</span>
                            <span class="ref">d</span>
                            <span class="seperator">:</span>
                          </h5>
                          <h5>
                            <span class="hours"> 00</span>
                            <span class="ref">h</span>
                            <span class="seperator">:</span>
                          </h5>
                          <h5>
                            <span class="minutes">00</span>
                            <span class="ref">m</span>
                            <span class="seperator"></span>
                          </h5>
                        </div>
                      </div>
                      <div class="invest__cta">
                        <a
                          href="/businessloandetails"
                          class="button button--effect"
                        >
                          Invest Now
                        </a>
                        <p class="secondary">Business loan #00394</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="cta__btn">
            <a href="/propertydetails" class="button button--effect">
              Load More
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Accomplished;
