import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Footer, Market, Navbar } from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImages,
  faLocationDot,
  faClock,
  faDollarSign,
  faCircleInfo,
  faBell,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";

const ProjectDetails = () => {
  const [investmentAmount, setInvestmentAmount] = useState("");
  const [monthlyReturn, setMonthlyReturn] = useState("");
  const [monthlyInterest, setMonthlyInterest] = useState("");
  const [projectDetails, setProjectDetails] = useState({});
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  // changing interest according rate
  const handleInterestChange = () => {
    if (investmentAmount == 250) {
      setMonthlyReturn(252.5);
      setMonthlyInterest(3);
    } else if (investmentAmount == 500) {
      setMonthlyReturn(507.5);
      setMonthlyInterest(3);
    } else if (investmentAmount == 1000) {
      setMonthlyReturn(1020);
      setMonthlyInterest(4);
    } else if (investmentAmount == 5000) {
      setMonthlyReturn(5150);
      setMonthlyInterest(5);
    }
  };

  const fetchProjectById = () => {
    setLoading(true);
    axios(`https://investigo-tai.herokuapp.com/project/${id}`)
      .then((res) => {
        setProjectDetails(res?.data?.project);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err?.response?.data);
        setLoading(false);
      });
  };

  const fetchProjects = () => {
    axios("https://investigo-tai.herokuapp.com/project")
      .then((res) => setProjects(res?.data?.projects.slice(0, 3)))
      .catch((err) => console.log(err?.response?.data));
  };

  useEffect(() => {
    fetchProjectById();
    fetchProjects();
  }, []);
  useEffect(() => {
    handleInterestChange();
  }, [investmentAmount]);

  // number with thousand commas
  function numberWithCommas(x) {
    if (x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }

  // calculate percetange of investors
  function calcPercentage(totalamount, invested) {
    const total = (invested / totalamount) * 100;
    return total.toFixed(2);
  }

  return (
    <>
      <Helmet>
        <title>Investigo - Real Estate Investment for Everyone</title>
      </Helmet>
      <Navbar />
      {/* banner */}
      <>
        <div
          className="property__details__banner bg__img clear__top"
          style={{
            backgroundImage: `url(https://investigo-tai.herokuapp.com/${projectDetails?.image})`,
          }}
        ></div>
        <section className="p__details faq section__space__bottom">
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
                      <h3>{projectDetails?.title}</h3>
                      <p>
                        <FontAwesomeIcon icon={faLocationDot} />{" "}
                        {projectDetails?.location}
                      </p>
                    </div>
                    <div className="group__one">
                      <h4>Project Description</h4>
                      <p>
                        The “Revest“ team is introducing a new buy to let
                        investment opportunity: A19, Vilnius FontAwesomeIconicon{" "}
                        {}of administrative premises, which are currently being
                        converted into studio apartments/lofts. In this way, the
                        aim is to increase the rental income of this real estate
                        project.
                        {/* {projectDetails?.description} */}
                      </p>
                    </div>
                    <div className="group__two">
                      <h5>Reasons to invest in the project A19, Vilnius:</h5>
                      <ul>
                        <li>
                          <img
                            src={require("../assets/images/check.png")}
                            alt="Check"
                          />{" "}
                          Lofts in an attractive area - in the center of
                          Vilnius;
                        </li>
                        <li>
                          <img
                            src={require("../assets/images/check.png")}
                            alt="Check"
                          />{" "}
                          ixed, attractive annual rental income;
                        </li>
                        <li>
                          <img
                            src={require("../assets/images/check.png")}
                            alt="Check"
                          />{" "}
                          The fixed interest is indexed to inflation;
                        </li>
                        <li>
                          <img
                            src={require("../assets/images/check.png")}
                            alt="Check"
                          />{" "}
                          The fixed interest is indexed to inflation;
                        </li>
                        <li>
                          <img
                            src={require("../assets/images/check.png")}
                            alt="Check"
                          />{" "}
                          Variable capital gains;
                        </li>
                        <li>
                          <img
                            src={require("../assets/images/check.png")}
                            alt="Check"
                          />{" "}
                          The premises were appraised by an independent valuer
                          at 347 000 EUR
                        </li>
                        <li>
                          <img
                            src={require("../assets/images/check.png")}
                            alt="Check"
                          />{" "}
                          The project owner is an experienced real estate
                          administrator.
                        </li>
                      </ul>
                    </div>
                    <div className="terms">
                      <h5>Financial terms of the investment:</h5>
                      <div className="terms__wrapper">
                        <div className="terms__single">
                          <img
                            src={require("../assets/images/icons/loan.png")}
                            alt="Maximum Loan"
                          />
                          <p>Maximum loan term</p>
                          <h5 className="neutral-bottom">36 Months</h5>
                        </div>
                        <div className="terms__single">
                          <img
                            src={require("../assets/images/icons/charge.png")}
                            alt="Charge"
                          />
                          <p>Security</p>
                          <h5 className="neutral-bottom">
                            1st charge Mortgage
                          </h5>
                        </div>
                        <div className="terms__single">
                          <img
                            src={require("../assets/images/icons/project.png")}
                            alt="Annual"
                          />
                          <p>Annual Return</p>
                          <h5 className="neutral-bottom">7%</h5>
                        </div>
                      </div>
                    </div>
                    <div className="group__two">
                      <h5>When investing:</h5>
                      <ul>
                        <li>
                          <img
                            src={require("../assets/images/check.png")}
                            alt="Check"
                          />{" "}
                          Up to 4999 € - the annual return is 7%.
                        </li>
                        <li>
                          <img
                            src={require("../assets/images/check.png")}
                            alt="Check"
                          />{" "}
                          5000 € – 14999 € - the annual return is 7.1%.
                        </li>
                        <li>
                          <img
                            src={require("../assets/images/check.png")}
                            alt="Check"
                          />{" "}
                          15000 € – 29999 € - the annual return is 7.2%.
                        </li>
                        <li>
                          <img
                            src={require("../assets/images/check.png")}
                            alt="Check"
                          />{" "}
                          30000 € – 49999 € - the annual return is 7.35%.
                        </li>
                        <li>
                          <img
                            src={require("../assets/images/check.png")}
                            alt="Check"
                          />{" "}
                          50000 € and more - the annual return is 7.5%.
                        </li>
                      </ul>
                    </div>
                    <div className="terms">
                      <h5>The capital growth distribution:</h5>
                      <div className="terms__wrapper">
                        <div className="terms__single">
                          <img
                            src={require("../assets/images/icons/investor.png")}
                            alt="Maximum Loan"
                          />
                          <p>Investors</p>
                          <h5 className="neutral-bottom">40% - 60%</h5>
                        </div>
                        <div className="terms__single">
                          <img
                            src={require("../assets/images/icons/project.png")}
                            alt="Charge"
                          />
                          <p>Project</p>
                          <h5 className="neutral-bottom">40%</h5>
                        </div>
                        <div className="terms__single">
                          <img
                            src={require("../assets/images/icons/revest.png")}
                            alt="Annual"
                          />
                          <p>Revest</p>
                          <h5 className="neutral-bottom">Up to 20%</h5>
                        </div>
                      </div>
                    </div>
                    <div className="owner">
                      <img
                        src={require("../assets/images/owner.png")}
                        alt="Owner"
                      />
                      <div>
                        <h5>The project owner (borrower)</h5>
                        <p>
                          MB „Rego Properties“ - is a company serving as a
                          special vehicle for revest investments. The CEO of the
                          company - Andrius Rimdeika is a former investment
                          banker, who has worked in investment firms such as
                          ”Morgan Stanley” and “Prime investment”.
                        </p>
                      </div>
                    </div>
                    <div className="faq__group">
                      <h5 className="atr">Frequently asked questions</h5>
                      <div className="accordion" id="accordionExampleFund">
                        <div className="accordion-item content__space">
                          <h5 className="accordion-header" id="headingFundOne">
                            <span className="icon_box">
                              <img
                                src={require("../assets/images/icons/message.png")}
                                alt="Fund"
                              />
                            </span>
                            <button
                              className="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseFundOne"
                              aria-expanded="true"
                              aria-controls="collapseFundOne"
                            >
                              What is Revest?
                            </button>
                          </h5>
                          <div
                            id="collapseFundOne"
                            className="accordion-collapse collapse show"
                            aria-labelledby="headingFundOne"
                            data-bs-parent="#accordionExampleFund"
                          >
                            <div className="accordion-body">
                              <p>
                                combined with a handful of model sentence
                                structures, to generate Lorem Ipsum which looks
                                reasonable. The generated Lorem Ipsum is
                                therefore always free from repetition, injected
                                humour, or
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item content__space">
                          <h5 className="accordion-header" id="headingFundTwo">
                            <span className="icon_box">
                              <img
                                src={require("../assets/images/icons/message.png")}
                                alt="Fund"
                              />
                            </span>
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseFundTwo"
                              aria-expanded="false"
                              aria-controls="collapseFundTwo"
                            >
                              What are the benefits of investing via Revest?
                            </button>
                          </h5>
                          <div
                            id="collapseFundTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingFundTwo"
                            data-bs-parent="#accordionExampleFund"
                          >
                            <div className="accordion-body">
                              <p>
                                combined with a handful of model sentence
                                structures, to generate Lorem Ipsum which looks
                                reasonable. The generated Lorem Ipsum is
                                therefore always free from repetition, injected
                                humour, or
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item content__space">
                          <h5
                            className="accordion-header"
                            id="headingFundThree"
                          >
                            <span className="icon_box">
                              <img
                                src={require("../assets/images/icons/message.png")}
                                alt="Fund"
                              />
                            </span>
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseFundThree"
                              aria-expanded="false"
                              aria-controls="collapseFundThree"
                            >
                              What makes Revest different?
                            </button>
                          </h5>
                          <div
                            id="collapseFundThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingFundThree"
                            data-bs-parent="#accordionExampleFund"
                          >
                            <div className="accordion-body">
                              <p>
                                combined with a handful of model sentence
                                structures, to generate Lorem Ipsum which looks
                                reasonable. The generated Lorem Ipsum is
                                therefore always free from repetition, injected
                                humour, or
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="group__one">
                      <h4>Key investment risks:</h4>
                      <p>
                        Risk of falling prices: The price of the property might
                        fall due to the increase in supply or decrease in demand
                        in the area or other economic factors.Liquidity risk:
                        The borrower might be unable to find a buyer in order to
                        sell the property.Tenant risk: There is a risk that the
                        asset can lose a tenant and it can take time to find
                        replacements, which can have impact on the property's
                        cash-flow.
                      </p>
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
                      <h5>
                        Available for funding:{" "}
                        {loading ? (
                          <span>Loading...</span>
                        ) : (
                          <span>
                            €
                            {numberWithCommas(
                              projectDetails?.totalAmount -
                                projectDetails?.invested
                            )}
                          </span>
                        )}
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
                              {numberWithCommas(projectDetails?.investors)}{" "}
                              Investors
                            </span>
                            |{" "}
                            <span className="project__has__investors__amount">
                              <FontAwesomeIcon icon={faDollarSign} />{" "}
                              {numberWithCommas(projectDetails?.invested)}
                            </span>
                          </p>
                          <p className="project__goal">
                            <FontAwesomeIcon icon={faDollarSign} />{" "}
                            {numberWithCommas(projectDetails?.totalAmount)} Goal
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="group brin">
                      <div className="acus__content">
                        <form action="#" method="post">
                          <div className="input input--secondary">
                            <div className="input input--secondary">
                              <label htmlFor="anNumIn">Invest</label>
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
                            </div>
                            <label htmlFor="anNum">Monthly return rate:</label>
                            <input
                              type="number"
                              name="an__num"
                              id="anNum"
                              placeholder="7.00%"
                              required="required"
                              disabled={true}
                              value={monthlyInterest}
                            />
                          </div>
                          <div className="input input--secondary">
                            <label htmlFor="anNumInTwo">Earn</label>
                            <input
                              type="number"
                              name="an__num_in_two"
                              id="anNumInTwo"
                              placeholder="€ 35.00"
                              required="required"
                              disabled={true}
                              value={monthlyReturn}
                            />
                          </div>
                          <div className="capital">
                            <p>Capital Growth Split:</p>
                            <h5>
                              40%{" "}
                              <a href="/blog">
                                <FontAwesomeIcon icon={faCircleInfo} />
                              </a>
                            </h5>
                          </div>
                          <div className="item__security">
                            <div className="icon__box">
                              <img
                                src={require("../assets/images/home.png")}
                                alt="Security"
                              />
                            </div>
                            <div className="item__security__content">
                              <p className="secondary">Security</p>
                              <h6>1st-Rank Mortgage</h6>
                            </div>
                          </div>
                          <div className="suby">
                            <h5>
                              {monthlyReturn == "" ? "00" : investmentAmount}
                            </h5>

                            <Link
                              to={`${monthlyReturn !== "" ? "/checkout" : "#"}`}
                            >
                              <button
                                type="submit"
                                className="button button--effect"
                              >
                                Invest Now
                              </button>
                            </Link>
                          </div>
                        </form>
                      </div>
                      <p className="text-center neutral-bottom">
                        <a href="/contactus">Request a free callback</a>
                      </p>
                    </div>
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
                        Duis quis orci vehicula, fermentum tortor vitae,
                        imperdiet sem. Quisque iaculis eu odio in lobortis. Sed
                        vel ex non erat pellentesque lobortis vel vitae diam.
                        Donec gravida eleifend pellentesque. Curabitur dictum
                        blandit accumsan.
                      </p>
                      <a href="/blog">Read More</a>
                    </div>
                    <div className="group birinit">
                      <h6>Share via Social </h6>
                      <div className="social text-start">
                        <a style={{ cursor: "pointer" }}>
                          <FacebookShareButton
                            url={`https://investigo-tai.herokuapp.com/${projectDetails?._id}`}
                            subject="investigoproject"
                            body="learn from lux gap courses"
                          >
                            <i className="fab fa-facebook-f"></i>
                          </FacebookShareButton>
                        </a>
                        <a style={{ cursor: "pointer" }}>
                          <TwitterShareButton
                            url={`https://investigo-tai.herokuapp.com/${projectDetails?._id}`}
                            title="investigoproject"
                            hashtag="#investigoproject"
                          >
                            <i className="fab fa-twitter"></i>
                          </TwitterShareButton>
                        </a>
                        <a style={{ cursor: "pointer" }}>
                          <TwitterShareButton
                            url={`https://investigo-tai.herokuapp.com/${projectDetails?._id}`}
                            title="investigoproject"
                            hashtag="#investigoproject"
                          >
                            <i className="fab fa-instagram"></i>
                          </TwitterShareButton>
                        </a>
                        <a style={{ cursor: "pointer" }}>
                          <LinkedinShareButton
                            url={`https://investigo-tai.herokuapp.com/${projectDetails?._id}`}
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
                        Detailed Report on the Title diligence of the property
                        by Amarchand Mangaldas
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

        {/* gallery section */}
        <section className="p__gallery wow fadeInUp" id="gallery">
          <div className="container">
            <hr className="divider" />
            <div className="p__gallery__area section__space">
              <div className="title__with__cta">
                <div className="row d-flex align-items-center">
                  <div className="col-lg-8">
                    <h2>Property Gallery</h2>
                  </div>
                  <div className="col-lg-4">
                    <div className="text-start text-lg-end">
                      <a
                        href="/contactus"
                        className="button button--secondary button--effect"
                      >
                        Request info
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row p__gallery__single">
                <div className="col-md-6 col-lg-4 gallery__single__two">
                  <a href={require("../assets/images/gallery/one.png")}>
                    <img
                      src={require("../assets/images/gallery/one.png")}
                      alt="Property Image"
                    />
                  </a>
                </div>
                <div className="col-md-6 col-lg-4 gallery__single__two">
                  <a href={require("../assets/images/gallery/two.png")}>
                    <img
                      src={require("../assets/images/gallery/two.png")}
                      alt="Property Image"
                    />
                  </a>
                </div>
                <div className="col-md-6 col-lg-4 gallery__single__two">
                  <a href={require("../assets/images/gallery/three.png")}>
                    <img
                      src={require("../assets/images/gallery/three.png")}
                      alt="Property Image"
                    />
                  </a>
                </div>
                <div className="col-md-6 col-lg-4 gallery__single__two">
                  <a href={require("../assets/images/gallery/four.png")}>
                    <img
                      src={require("../assets/images/gallery/four.png")}
                      alt="Property Image"
                    />
                  </a>
                </div>
                <div className="col-md-6 col-lg-4 gallery__single__two">
                  <a href={require("../assets/images/gallery/five.png")}>
                    <img
                      src={require("../assets/images/gallery/five.png")}
                      alt="Property Image"
                    />
                  </a>
                </div>
                <div className="col-md-6 col-lg-4 gallery__single__two">
                  <a href={require("../assets/images/gallery/six.png")}>
                    <img
                      src={require("../assets/images/gallery/six.png")}
                      alt="Property Image"
                    />
                  </a>
                </div>
                <div className="col-md-6 col-lg-4 gallery__single__two">
                  <a href={require("../assets/images/gallery/seven.png")}>
                    <img
                      src={require("../assets/images/gallery/seven.png")}
                      alt="Property Image"
                    />
                  </a>
                </div>
                <div className="col-md-6 col-lg-4 gallery__single__two">
                  <a href={require("../assets/images/gallery/eight.png")}>
                    <img
                      src={require("../assets/images/gallery/eight.png")}
                      alt="Property Image"
                    />
                  </a>
                </div>
                <div className="col-md-6 col-lg-4 gallery__single__two">
                  <a href={require("../assets/images/gallery/nine.png")}>
                    <img
                      src={require("../assets/images/gallery/nine.png")}
                      alt="Property Image"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* properties section */}
        <section className="properties__grid section__space">
          <div className="container">
            <div className="properties__grid__area wow fadeInUp">
              <div className="title__with__cta">
                <div className="row d-flex align-items-center">
                  <div className="col-lg-8">
                    <h2>Browse Other Projects</h2>
                  </div>
                  <div className="col-lg-4">
                    <div className="text-start text-lg-end">
                      <a
                        href="/project"
                        className="button button--secondary button--effect"
                      >
                        Browse Other Projects
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="property__grid__wrapper">
                <div className="row">
                  {projects.map((project, i) => (
                    <div className="col-md-6 col-xl-4" key={i}>
                      <div className="property__grid__single column__space--secondary">
                        <div className="img__effect">
                          <a href={`/projectdetails/${project?._id}`}>
                            <img
                              src={`https://investigo-tai.herokuapp.com/${project?.image}`}
                              alt={project?.title}
                            />{" "}
                          </a>
                        </div>
                        <div className="property__grid__single__inner">
                          <h4>{project?.title}</h4>
                          <p>
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
                                {numberWithCommas(project?.invested)}
                              </span>{" "}
                              <span className="project__has__investors__percent">
                                (
                                {calcPercentage(
                                  project?.totalAmount,
                                  project?.invested
                                )}
                                %)
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
                                Read more
                                <i className="fa-solid fa-arrow-right-long" />
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

        {/* market */}
        <Market />
      </>
      <Footer />
    </>
  );
};

export default ProjectDetails;
