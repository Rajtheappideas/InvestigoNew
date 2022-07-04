import React from "react";
import { Helmet } from "react-helmet";
import { Footer, Gallery, Navbar } from "../components";
import bgImg from "../assets/images/banner/banner-bg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Career = () => {
  return (
    <>
      <Helmet>
        <title>Investigo - Career</title>
      </Helmet>
      <Navbar />
      {/* banner */}
      <section
        className="banner key-banner banner--secondary clear__top bg__img"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="container">
          <div className="banner__area">
            <h1 className="neutral-top">Careers</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Pages
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Career
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <img
          src={require("../assets/images/banner/career-banner-illustration.png")}
          alt="Career"
          class="banner__thumb"
        />
      </section>
      {/* gallery */}
      <section className="image__gallery image__gallery--two section__space">
        <div className="section__header wow fadeInUp">
          <h5 className="neutral-top">Join Our Team Today</h5>
          <h2>Join a Team of Passionate Tinkerers</h2>
          <p className="neutral-bottom">
            We wanna hear from you! Revest is a growing startup and we're always
            on the lookout for kindred spirits.
          </p>
        </div>
        <Gallery />
      </section>
      {/* open position start */}
      <section className="open__tab__position section__space__bottom">
        <div className="container">
          <h2 className="neutral-top">Open Positions</h2>
          <div className="d-flex justify-content-center">
            <div className="open__tab">
              <a
                href="javascript:void(0)"
                className="button button--effect open__tab__btn"
                data-target="all"
              >
                All
              </a>
              <a
                href="javascript:void(0)"
                className="button button--effect open__tab__btn"
                data-target="sales"
              >
                Sales
              </a>
              <a
                href="javascript:void(0)"
                className="button button--effect open__tab__btn"
                data-target="marketing"
              >
                Marketing
              </a>
              <a
                href="javascript:void(0)"
                className="button button--effect open__tab__btn"
                data-target="engineering"
              >
                Engineering
              </a>
              <a
                href="javascript:void(0)"
                className="button button--effect open__tab__btn"
                data-target="design"
              >
                Design
              </a>
            </div>
          </div>
          <div className="open__position__tab__wrapper">
            <div
              className="job__single open__job__single"
              data-groups='["all","sales"]'
            >
              <div className="open__job__inner">
                <img
                  src={require("../assets/images/icons/sales.png")}
                  alt="Sales"
                />
                <div className="open__job__info">
                  <h5>
                    <a href="/careerdetails">Director of Sales</a>
                  </h5>
                  <ul>
                    <li>Sales</li>
                    <li>Remote</li>
                    <li>Full Time</li>
                  </ul>
                </div>
              </div>
              <a href="/careerdetails" className="arrw">
                <FontAwesomeIcon icon={faAngleRight} />
              </a>
            </div>
            <div
              className="job__single open__job__single"
              data-groups='["all","engineering"]'
            >
              <div className="open__job__inner">
                <img
                  src={require("../assets/images/icons/business.png")}
                  alt="Business Development Representative"
                />
                <div className="open__job__info">
                  <h5>
                    <a href="/careerdetails">
                      Business Development Representative
                    </a>
                  </h5>
                  <ul>
                    <li>Business</li>
                    <li>Remote</li>
                    <li>Full Time</li>
                  </ul>
                </div>
              </div>
              <a href="/careerdetails" className="arrw">
                <FontAwesomeIcon icon={faAngleRight} />
              </a>
            </div>
            <div
              className="job__single open__job__single"
              data-groups='["all","design"]'
            >
              <div className="open__job__inner">
                <img
                  src={require("../assets/images/icons/development.png")}
                  alt="Business Development Representative"
                />
                <div className="open__job__info">
                  <h5>
                    <a href="/careerdetails">
                      Business Development Representative
                    </a>
                  </h5>
                  <ul>
                    <li>Business</li>
                    <li>Remote</li>
                    <li>Full Time</li>
                  </ul>
                </div>
              </div>
              <a href="/careerdetails" className="arrw">
                <FontAwesomeIcon icon={faAngleRight} />
              </a>
            </div>
            <div
              className="job__single open__job__single"
              data-groups='["all","marketing"]'
            >
              <div className="open__job__inner">
                <img
                  src={require("../assets/images/icons/marketing.png")}
                  alt="Product Marketing Lead"
                />
                <div className="open__job__info">
                  <h5>
                    <a href="/careerdetails">Product Marketing Lead</a>
                  </h5>
                  <ul>
                    <li>Marketing</li>
                    <li>Remote</li>
                    <li>Full Time</li>
                  </ul>
                </div>
              </div>
              <a href="/careerdetails" className="arrw">
                <FontAwesomeIcon icon={faAngleRight} />
              </a>
            </div>
            <div
              className="job__single open__job__single"
              data-groups='["all","design"]'
            >
              <div className="open__job__inner">
                <img
                  src={require("../assets/images/icons/development.png")}
                  alt="Business Development Representative"
                />
                <div className="open__job__info">
                  <h5>
                    <a href="/careerdetails">
                      Business Development Representative
                    </a>
                  </h5>
                  <ul>
                    <li>Business</li>
                    <li>Remote</li>
                    <li>Full Time</li>
                  </ul>
                </div>
              </div>
              <a href="/careerdetails" className="arrw">
                <FontAwesomeIcon icon={faAngleRight} />
              </a>
            </div>
            <div
              className="job__single open__job__single"
              data-groups='["all","sales"]'
            >
              <div className="open__job__inner">
                <img
                  src={require("../assets/images/icons/sales.png")}
                  alt="Sales"
                />
                <div className="open__job__info">
                  <h5>
                    <a href="/careerdetails">Director of Sales</a>
                  </h5>
                  <ul>
                    <li>Sales</li>
                    <li>Remote</li>
                    <li>Full Time</li>
                  </ul>
                </div>
              </div>
              <a href="/careerdetails" className="arrw">
                <FontAwesomeIcon icon={faAngleRight} />
              </a>
            </div>
            <div
              className="job__single open__job__single"
              data-groups='["all","engineering"]'
            >
              <div className="open__job__inner">
                <img
                  src={require("../assets/images/icons/business.png")}
                  alt="Business Development Representative"
                />
                <div className="open__job__info">
                  <h5>
                    <a href="/careerdetails">
                      Business Development Representative
                    </a>
                  </h5>
                  <ul>
                    <li>Business</li>
                    <li>Remote</li>
                    <li>Full Time</li>
                  </ul>
                </div>
              </div>
              <a href="/careerdetails" className="arrw">
                <FontAwesomeIcon icon={faAngleRight} />
              </a>
            </div>
            <div
              className="job__single open__job__single"
              data-groups='["all","marketing"]'
            >
              <div className="open__job__inner">
                <img
                  src={require("../assets/images/icons/marketing.png")}
                  alt="Product Marketing Lead"
                />
                <div className="open__job__info">
                  <h5>
                    <a href="/careerdetails">Product Marketing Lead</a>
                  </h5>
                  <ul>
                    <li>Marketing</li>
                    <li>Remote</li>
                    <li>Full Time</li>
                  </ul>
                </div>
              </div>
              <a href="career-details.html" className="arrw">
                <FontAwesomeIcon icon={faAngleRight} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Career;
