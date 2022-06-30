import React from "react";
import { Helmet } from "react-helmet";
import { Footer, Market, Navbar } from "../components";
import bgImg from "../assets/images/construction.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImages,
  faEuroSign,
  faClock,
  faDollarSign,
  faBell,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import '../assets/css/style.css'

const Benefits = () => {
  return (
    <>
      <Helmet>
        <title>Investigo - Benefits</title>
      </Helmet>
      <Navbar />
      {/* banner  */}
      <div
        className="property__details__banner bg__img clear__top"
        style={{ backgroundImage: `url(${bgImg})` }}
      ></div>
      <section className="p__details p__details__two faq section__space__bottom">
        <div className="container">
          <div className="p__details__area">
            <div className="row">
              <div className="col-lg-7">
                <div className="p__details__content">
                  <a
                    href="#gallery"
                    className="button button--effect button--secondary"
                  >
                    <FontAwesomeIcon icon={faImages} /> Browse Gallery
                  </a>
                  <div className="intro">
                    <h3>
                      How much will FontAwesomeIcon icon if FontAwesomeIcon{" "}
                      <icon>invest:</icon>
                    </h3>
                  </div>
                  <div className="investment__amount__area">
                    <div className="investment__wrapper">
                      <div className="investment__wrapper__inner">
                        <h5>Investment Amount (250 € - 5000+ €)</h5>
                        <div className="input input--secondary">
                          <select
                            className="form-select form-select-lg mb-3"
                            aria-label=".form-select-lg example"
                          >
                            <option selected="">Choose your investment</option>
                            <option value={250}>250</option>
                            <option value={500}>500</option>
                            <option value={1000}>1000</option>
                            <option value={5000}>5000+</option>
                          </select>
                        </div>
                        <div className="radio__group">
                          <div>
                            <input
                              type="radio"
                              id="pone"
                              defaultChecked=""
                              className="radio-input"
                              name="radio-group"
                            />
                            <label htmlFor="pone" className="radio-label">
                              {" "}
                              <span className="radio-border" /> 5%{" "}
                            </label>
                          </div>
                          <div>
                            <input
                              type="radio"
                              id="ptwo"
                              defaultChecked=""
                              className="radio-input"
                              name="radio-group"
                            />
                            <label htmlFor="ptwo" className="radio-label">
                              {" "}
                              <span className="radio-border" /> 4%
                            </label>
                          </div>
                          <div>
                            <input
                              type="radio"
                              id="pthree"
                              defaultChecked=""
                              className="radio-input"
                              name="radio-group"
                            />
                            <label htmlFor="pthree" className="radio-label">
                              {" "}
                              <span className="radio-border" /> 3%
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="investment__footer">
                        <div>
                          <p className="secondary">
                            FontAwesomeIcon icon earn ( 01 Month )
                          </p>
                          <h4 className="neutral-bottom">
                            O.72 <FontAwesomeIcon icon={faEuroSign} />
                          </h4>
                        </div>
                        <div>
                          <p className="secondary">
                            FontAwesomeIcon icon earn ( 12 Month )
                          </p>
                          <h4 className="neutral-bottom">
                            11.72 <FontAwesomeIcon icon={faEuroSign} />
                          </h4>
                        </div>
                        <div>
                          <p className="secondary">
                            FontAwesomeIcon icon earn ( 24 Month )
                          </p>
                          <h4 className="neutral-bottom">
                            17.72 <FontAwesomeIcon icon={faEuroSign} />
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="group__one">
                    <h4>About the loan</h4>
                    <p>
                      Purpose of the loan To increase the company's working
                      capital
                    </p>
                    <div className="tabular__group">
                      <div className="single">
                        <p>Amount of funding</p>
                        <p>40,000 €</p>
                      </div>
                      <div className="single">
                        <p>Risk</p>
                        <p>C (Higher)</p>
                      </div>
                      <div className="single">
                        <p>Payment of interest</p>
                        <p>Every Month</p>
                      </div>
                      <div className="single">
                        <p>Loan Repayment</p>
                        <p>Every Month</p>
                      </div>
                      <div className="single">
                        <p>Loan Repayment postponement</p>
                        <p>3</p>
                      </div>
                      <div className="single">
                        <p>Loan Period</p>
                        <p>24 Months</p>
                      </div>
                      <div className="single">
                        <p>Minimum Loan Period</p>
                        <p>4 Months</p>
                      </div>
                      <div className="single">
                        <p>collateral</p>
                        <p>Guarantes/ Surety</p>
                      </div>
                      <div className="single">
                        <p>Mortgage Rank</p>
                        <p>Other Pledge</p>
                      </div>
                    </div>
                    <p className="neutral-bottom">
                      The purpose of the financing is to partially refinance an
                      existing loan on the Nordstreet platform. Refinancing is
                      requested to adjust financial flows.{" "}
                    </p>
                  </div>
                  <div className="group__one">
                    <h4>Interest</h4>
                    <p>Annual interest rate</p>
                    <div className="tabular__group">
                      <div className="single">
                        <p>Investing from 100 €</p>
                        <p>Fixed interest 13 %</p>
                      </div>
                      <div className="single">
                        <p>Investing from 500 €</p>
                        <p>Fixed interest 13.25 %</p>
                      </div>
                      <div className="single">
                        <p>Investing from 1500 €</p>
                        <p>Fixed interest 13.5 %</p>
                      </div>
                      <div className="single">
                        <p>Investing from 2500 €</p>
                        <p>Fixed interest 14 %</p>
                      </div>
                    </div>
                    <p className="neutral-bottom">
                      The Interest on the Loan Amount shall be calculated from
                      and including the date of disbursement of the Loan Amount
                      to the Debtor's Account or to such other account (or
                      accounts) as notified by the Debtor to the Operator in
                      writing prior to the disbursement of the Loan Amount.
                    </p>
                  </div>
                  <div className="group__one">
                    <h4>Loan term and repayment</h4>
                    <div className="tabular__group">
                      <div className="single">
                        <p>Loan Repayment</p>
                        <p>Every Month</p>
                      </div>
                      <div className="single">
                        <p>Loan Repayment postponement</p>
                        <p>3</p>
                      </div>
                      <div className="single">
                        <p>Loan Period</p>
                        <p>24 Months</p>
                      </div>
                      <div className="single">
                        <p>Minimum Loan Period</p>
                        <p>4 Months</p>
                      </div>
                      <div className="single">
                        <p>Estimated start date of the loan</p>
                        <p>2022-01-28</p>
                      </div>
                      <div className="single">
                        <p>Estimated start date of the loan</p>
                        <p>2022-01-28</p>
                      </div>
                    </div>
                    <p className="neutral-bottom">
                      If the Debtor repays the Loan earlier than after the
                      specified minimum loan period, it undertakes to pay
                      interest to the Lender for the entire specified minimum
                      period.
                    </p>
                  </div>
                  <div className="group__one">
                    <div className="map__wrapper">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20342.411046372905!2d-74.16638039276373!3d40.719832743885284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1649562691355!5m2!1sen!2sbd"
                        width={746}
                        height={312}
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="p__details__sidebar">
                  <div className="intro">
                    <div className="countdown__wrapper">
                      <p className="secondary">
                        <FontAwesomeIcon icon={faClock} /> Left to invest
                      </p>
                      <div className="countdown">
                        <h5>
                          <span className="days">100</span>
                          <span className="ref">d</span>
                          <span className="seperator">:</span>
                        </h5>
                        <h5>
                          <span className="hours">20</span>
                          <span className="ref">h</span>
                          <span className="seperator">:</span>
                        </h5>
                        <h5>
                          <span className="minutes">10</span>
                          <span className="ref">m</span>
                          <span className="seperator" />
                        </h5>
                      </div>
                    </div>
                    <h5>
                      Available for funding: <span>€134 514</span>
                    </h5>
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
                            159 Investors
                          </span>{" "}
                          |{" "}
                          <span className="project__has__investors__amount">
                            <FontAwesomeIcon icon={faDollarSign} /> 1,94,196
                          </span>
                        </p>
                        <p className="project__goal">
                          <FontAwesomeIcon icon={faDollarSign} /> 3,00,000 Goal
                        </p>
                      </div>
                    </div>
                    <div className="ribbon">
                      <p>Business loan #00194</p>
                    </div>
                  </div>
                  {/* Investment Overview  */}
                  <div className="group brini">
                    <h5 className="neutral-top">Investment Overview</h5>
                    <hr />
                    <p>
                      Purpose of the loan To increase the company's working
                      capital, magna a laoreet convallis, massa sapien tempor
                      arcu, nec euismod elit justo in lacus. Maecenas mattis
                      massa lectus, vel tincidunt augue porta non.
                    </p>
                    <p>
                      Duis quis orci vehicula, fermentum tortor vitae, imperdiet
                      sem. Quisque iaculis eu odio in lobortis. Sed vel ex non
                      erat pellentesque lobortis vel vitae diam. Donec gravida
                      eleifend pellentesque. Curabitur dictum blandit accumsan.
                    </p>
                    <a href="blog.html">Read More</a>
                  </div>
                  <div className="group birinit">
                    <h6>Share via Social </h6>
                    <div className="social text-start">
                      <a href="javascript:void(0)">
                        <FontAwesomeIcon icon={faFacebookF} />
                      </a>
                      <a href="javascript:void(0)">
                        <FontAwesomeIcon icon={faTwitter} />
                      </a>
                      <a href="javascript:void(0)">
                        <FontAwesomeIcon icon={faInstagram} />
                      </a>
                      <a href="javascript:void(0)">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                      </a>
                    </div>
                  </div>
                  <div className="group alt__brin">
                    <h5>
                      Key Updates <FontAwesomeIcon icon={faBell} />
                    </h5>
                    <hr />
                    <div className="singl__wrapper">
                      <div className="singl">
                        <img
                          src={require("../assets/images/check.png")}
                          alt="Check"
                        />
                        <div>
                          <p>30-Aug-2022</p>
                          <a href="/termsandconditions">Term Sheet Signed</a>
                        </div>
                      </div>
                      <div className="singl">
                        <img
                          src={require("../assets/images/check.png")}
                          alt="Check"
                        />
                        <div>
                          <p>30-Aug-2022</p>
                          <a href="/privacypolicy">Listing Live</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="group alt__brin__last">
                    <h5>Reports</h5>
                    <hr />
                    <h6>Investment Note</h6>
                    <p>Property Share's Detailed Investment Note</p>
                    <a href="javascript:void(0)" className="button">
                      DOWNLOAD INVESTMENT NOTE{" "}
                      <FontAwesomeIcon icon={faDownload} />
                    </a>
                    <h6>Legal Title Report</h6>
                    <p>
                      Detailed Report on the Title diligence of the property by
                      Amarchand Mangaldas
                    </p>
                    <a href="javascript:void(0)" className="button">
                      DOWNLOAD TITLE REPORT{" "}
                      <FontAwesomeIcon icon={faDownload} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* gallery */}
      <div className="container">
        <div className="title__with__cta">
          <div className="row d-flex align-items-center">
            <div className="col-lg-8">
              <h2>Discover our projects</h2>
            </div>
            <div className="col-lg-4">
              <div className="text-start text-lg-end">
                <a
                  href="/project"
                  className="button button--secondary button--effect"
                >
                  Browse All projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="image__gallery section__space">
        <div className="image__gallery__area">
          <div className="gallery__single">
            <a href={require("../assets/images/one.png")}>
              <img
                src={require("../assets/images/one.png")}
                alt="Project Image"
              />
            </a>
          </div>
          <div className="gallery__single">
            <a href={require("../assets/images/two.png")}>
              <img
                src={require("../assets/images/two.png")}
                alt="Project Image"
              />
            </a>
          </div>
          <div className="gallery__single">
            <a href={require("../assets/images/three.png")}>
              <img
                src={require("../assets/images/three.png")}
                alt="Project Image"
              />
            </a>
          </div>
          <div className="gallery__single">
            <a href={require("../assets/images/four.png")}>
              <img
                src={require("../assets/images/four.png")}
                alt="Project Image"
              />
            </a>
          </div>
          <div className="gallery__single">
            <a href={require("../assets/images/five.png")}>
              <img
                src={require("../assets/images/five.png")}
                alt="Project Image"
              />
            </a>
          </div>
          <div className="gallery__single">
            <a href={require("../assets/images/six.png")}>
              <img
                src={require("../assets/images/six.png")}
                alt="Project Image"
              />
            </a>
          </div>
        </div>
      </div>

      {/* properties */}
      <section className="properties__grid section__space wow fadeInUp">
        <div className="container">
          <div className="properties__grid__area">
            <div className="title__with__cta">
              <div className="row d-flex align-items-center">
                <div className="col-lg-8">
                  <h2>Browse Similar Business</h2>
                </div>
                <div className="col-lg-4">
                  <div className="text-start text-lg-end">
                    <a
                      href="/properties"
                      className="button button--secondary button--effect"
                    >
                      Browse All Properties
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="property__grid__wrapper">
              <div className="row alt__loan__row">
                <div className="col-md-6 col-xl-4 alt__loan__grid">
                  <div className="alt__loan__grid__single">
                    <div className="imi__alt">
                      <div className="img__effect">
                        <a href="/propertydetails">
                          <img
                            src={require("../assets/images/property/one.png")}
                            alt="Los Angeles"
                          />
                        </a>
                        <div className="ribbon">
                          <p>Waiting For Invest</p>
                        </div>
                      </div>
                      <div className="alt__loan__content">
                        <div className="item__head">
                          <div className="item__head__left">
                            <p>Sircue Industries</p>
                            <h5>
                              <a href="business-loan-details.html">
                                LTD Statybų taktikos
                              </a>
                            </h5>
                          </div>
                        </div>
                        <div className="progress__type progress__type--three">
                          <p className="collected">Collected Amount</p>
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
                              159 Investors
                            </span>{" "}
                            |{" "}
                            <span className="project__has__investors__amount">
                              <FontAwesomeIcon icon={faDollarSign} />
                              1,94,196
                            </span>{" "}
                            <span className="project__has__investors__percent">
                              (64.73%)
                            </span>
                          </p>
                        </div>
                        <div className="item__info">
                          <div className="item__info__single">
                            <p>Annual Return</p>
                            <h6>7.5% + 2%</h6>
                          </div>
                          <div className="item__info__single">
                            <p>Maximum Term</p>
                            <h6>36 Months</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="alt__loan__foot">
                      <div className="invest__cta__wrapper">
                        <div className="countdown__wrapper">
                          <p className="secondary">
                            <FontAwesomeIcon icon={faClock} /> Left to invest
                          </p>
                          <div className="countdown">
                            <h5>
                              <span className="days">200</span>
                              <span className="ref">d</span>
                              <span className="seperator">:</span>
                            </h5>
                            <h5>
                              <span className="hours">10</span>
                              <span className="ref">h</span>
                              <span className="seperator">:</span>
                            </h5>
                            <h5>
                              <span className="minutes">40</span>
                              <span className="ref">m</span>
                              <span className="seperator" />
                            </h5>
                          </div>
                        </div>
                        <div className="invest__cta">
                          <a
                            href="/businessloandetails"
                            className="button button--effect"
                          >
                            Invest Now
                          </a>
                          <p className="secondary">Business loan #00134</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-4 alt__loan__grid">
                  <div className="alt__loan__grid__single">
                    <div className="imi__alt">
                      <div className="img__effect">
                        <a href="/propertydetails">
                          <img
                            src={require("../assets/images/property/two.png")}
                            alt="Los Angeles"
                          />
                        </a>
                        <div className="ribbon">
                          <p>Waiting For Invest</p>
                        </div>
                      </div>
                      <div className="alt__loan__content">
                        <div className="item__head">
                          <div className="item__head__left">
                            <p>Infinite Electric</p>
                            <h5>
                              <a href="/businessloandetails">LTD Orandis</a>
                            </h5>
                          </div>
                        </div>
                        <div className="progress__type progress__type--three">
                          <p className="collected">Collected Amount</p>
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
                              159 Investors
                            </span>{" "}
                            |{" "}
                            <span className="project__has__investors__amount">
                              <FontAwesomeIcon icon={faDollarSign} />
                              1,94,196
                            </span>{" "}
                            <span className="project__has__investors__percent">
                              (64.73%)
                            </span>
                          </p>
                        </div>
                        <div className="item__info">
                          <div className="item__info__single">
                            <p>Annual Return</p>
                            <h6>7.5% + 2%</h6>
                          </div>
                          <div className="item__info__single">
                            <p>Maximum Term</p>
                            <h6>36 Months</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="alt__loan__foot">
                      <div className="invest__cta__wrapper">
                        <div className="countdown__wrapper">
                          <p className="secondary">
                            <FontAwesomeIcon icon={faClock} /> Left to invest
                          </p>
                          <div className="countdown">
                            <h5>
                              <span className="days">200</span>
                              <span className="ref">d</span>
                              <span className="seperator">:</span>
                            </h5>
                            <h5>
                              <span className="hours">10</span>
                              <span className="ref">h</span>
                              <span className="seperator">:</span>
                            </h5>
                            <h5>
                              <span className="minutes">30</span>
                              <span className="ref">m</span>
                              <span className="seperator" />
                            </h5>
                          </div>
                        </div>
                        <div className="invest__cta">
                          <a
                            href="/businessloandetails"
                            className="button button--effect"
                          >
                            Invest Now
                          </a>
                          <p className="secondary">Business loan #00294</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-4 alt__loan__grid">
                  <div className="alt__loan__grid__single">
                    <div className="imi__alt">
                      <div className="img__effect">
                        <a href="/propertydetails">
                          <img
                            src={require("../assets/images/property/three.png")}
                            alt="Los Angeles"
                          />
                        </a>
                        <div className="ribbon">
                          <p>Waiting For Invest</p>
                        </div>
                      </div>
                      <div className="alt__loan__content">
                        <div className="item__head">
                          <div className="item__head__left">
                            <p>Circle Tree</p>
                            <h5>
                              <a href="/businessloandetails">LTD Pri,ita</a>
                            </h5>
                          </div>
                        </div>
                        <div className="progress__type progress__type--three">
                          <p className="collected">Collected Amount</p>
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
                              159 Investors
                            </span>{" "}
                            |{" "}
                            <span className="project__has__investors__amount">
                              <FontAwesomeIcon icon={faDollarSign} />
                              1,94,196
                            </span>{" "}
                            <span className="project__has__investors__percent">
                              (64.73%)
                            </span>
                          </p>
                        </div>
                        <div className="item__info">
                          <div className="item__info__single">
                            <p>Annual Return</p>
                            <h6>7.5% + 2%</h6>
                          </div>
                          <div className="item__info__single">
                            <p>Maximum Term</p>
                            <h6>36 Months</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="alt__loan__foot">
                      <div className="invest__cta__wrapper">
                        <div className="countdown__wrapper">
                          <p className="secondary">
                            <FontAwesomeIcon icon={faClock} /> Left to invest
                          </p>
                          <div className="countdown">
                            <h5>
                              <span className="days">200</span>
                              <span className="ref">d</span>
                              <span className="seperator">:</span>
                            </h5>
                            <h5>
                              <span className="hours">24</span>
                              <span className="ref">h</span>
                              <span className="seperator">:</span>
                            </h5>
                            <h5>
                              <span className="minutes">20</span>
                              <span className="ref">m</span>
                              <span className="seperator" />
                            </h5>
                          </div>
                        </div>
                        <div className="invest__cta">
                          <a
                            href="/businessloandetails"
                            className="button button--effect"
                          >
                            Invest Now
                          </a>
                          <p className="secondary">Business loan #00994</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* market */}
      <Market />
      <Footer />
    </>
  );
};

export default Benefits;
