import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Footer, Gallery, Market, Navbar } from "../components";
import bgImg from "../assets/images/construction.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImages,
  faDollarSign,
  faBell,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";

const Benefits = () => {
  const [investmentAmount, setInvestmentAmount] = useState("");
  const [monthlyReturn, setMonthlyReturn] = useState(null);
  const [annualReturn, setAnnualReturn] = useState(null);
  const [biannualReturn, setBiannualReturn] = useState(null);

  const handleInterestChange = () => {
    if (investmentAmount == 250) {
      setMonthlyReturn(252.5);
      setAnnualReturn(280);
      setBiannualReturn(313.6);
    } else if (investmentAmount == 500) {
      setMonthlyReturn(507.5);
      setAnnualReturn(590);
      setBiannualReturn(696.62);
    } else if (investmentAmount == 1000) {
      setMonthlyReturn(1020);
      setAnnualReturn(1240);
      setBiannualReturn(1537.6);
    } else if (investmentAmount == 5000) {
      setMonthlyReturn(5150);
      setAnnualReturn(6800);
      setBiannualReturn(9248);
    }
  };
  useEffect(() => {
    handleInterestChange();
  }, [investmentAmount]);
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
                      How much will I earn if I <span>invest:</span>
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
                            onChange={(e) => {
                              setInvestmentAmount(e.target.value);
                            }}
                          >
                            <option defaultValue="">
                              Choose your investment
                            </option>
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
                              className="radio-input"
                              name="radio-group"
                              disabled={true}
                              checked={investmentAmount == 5000 && true}
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
                              className="radio-input"
                              name="radio-group"
                              disabled={true}
                              checked={investmentAmount == 1000 && true}
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
                              className="radio-input"
                              name="radio-group"
                              disabled={true}
                              checked={
                                (investmentAmount == 500 ||
                                  investmentAmount == 250) &&
                                true
                              }
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
                          <p className="secondary">I will earn ( 01 Month )</p>
                          <h4 className="neutral-bottom">
                            {monthlyReturn === null ? "00" : monthlyReturn}{" "}
                            <i className="fa-solid fa-euro-sign"></i>
                          </h4>
                        </div>
                        <div>
                          <p className="secondary">I will earn ( 12 Month )</p>
                          <h4 className="neutral-bottom">
                            {annualReturn === null ? "00" : annualReturn}{" "}
                            <i className="fa-solid fa-euro-sign"></i>
                          </h4>
                        </div>
                        <div>
                          <p className="secondary">I will earn ( 24 Month )</p>
                          <h4 className="neutral-bottom">
                            {biannualReturn === null ? "00" : biannualReturn}{" "}
                            <i className="fa-solid fa-euro-sign"></i>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* about loan */}
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
                  {/* fixed interrest */}
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
                    <h5 style={{ marginTop: "2.5rem" }}>
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
                    <a href="/blog">Read More</a>
                  </div>
                  <div className="group birinit">
                    <h6>Share via Social </h6>
                    <div className="social text-start">
                      <a style={{ cursor: "pointer" }}>
                        <FacebookShareButton
                          url={`https://investigo-tai.herokuapp.com/benefits`}
                          subject="investigoproject"
                          body="learn from lux gap courses"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </FacebookShareButton>
                      </a>
                      <a style={{ cursor: "pointer" }}>
                        <TwitterShareButton
                          url={`https://investigo-tai.herokuapp.com/benefits`}
                          title="investigoproject"
                          hashtag="#investigoproject"
                        >
                          <i className="fab fa-twitter"></i>
                        </TwitterShareButton>
                      </a>
                      <a style={{ cursor: "pointer" }}>
                        <TwitterShareButton
                          url={`https://investigo-tai.herokuapp.com/benefits`}
                          title="investigoproject"
                          hashtag="#investigoproject"
                        >
                          <i className="fab fa-instagram"></i>
                        </TwitterShareButton>
                      </a>
                      <a style={{ cursor: "pointer" }}>
                        <LinkedinShareButton
                          url={`https://investigo-tai.herokuapp.com/benefits`}
                          title="investigoproject"
                          hashtag="#investigoproject"
                        >
                          <i className="fab fa-linkedin-in"></i>
                        </LinkedinShareButton>
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
                    <a style={{ cursor: "pointer" }} className="button">
                      DOWNLOAD INVESTMENT NOTE{" "}
                      <FontAwesomeIcon icon={faDownload} />
                    </a>
                    <h6>Legal Title Report</h6>
                    <p>
                      Detailed Report on the Title diligence of the property by
                      Amarchand Mangaldas
                    </p>
                    <a style={{ cursor: "pointer" }} className="button">
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
      <Gallery gallery="gallery" />
      {/* <Gallery /> */}
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
