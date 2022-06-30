import React from "react";
import { Helmet } from "react-helmet";
import { Footer, Navbar } from "../components";
import bgImg from "../assets/images/banner/banner-bg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";

const CareerDetails = () => {
  return (
    <>
      <Helmet>
        <title>Investigo - CareerDetails</title>
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
          src={require("../assets/images/banner/career-details-banner-illustration.png")}
          alt="Career"
          class="banner__thumb"
        />
      </section>
      {/* position details section */}
      <section className="position__details section__space">
        <div className="container">
          <div className="position__details__area">
            <h2 className="neutral-top">Investor Relations Support</h2>
            <div className="group__btn">
              <a
                href="#overview"
                className="button button--effect job__application__btn"
              >
                Overview
              </a>
              <a
                href="#application"
                className="button button--effect button--secondary job__application__btn"
              >
                Application
              </a>
            </div>
            <div className="position__details__content__wrapper">
              <div className="position__details__content" id="overview">
                <div className="text__group">
                  <div className="d-flex align-items-center justify-content-between">
                    <h3>Description</h3>
                    <a href="#0">
                      Share this job <FontAwesomeIcon icon={faShareNodes} />
                    </a>
                  </div>
                  <p className="neutral-bottom">
                    We are currently seeking someone in Investor Relations
                    Support to join our founding team as we rapidly grow our
                    client base. You will report directly to our Head of
                    Investor Relations and will spend the majority of your time
                    interacting with our investors to build new relationships,
                    help them onboard onto the Revest platform and generally
                    ensure they receive a world-class experience. If you enjoy a
                    fast-paced environment, an energetic and social culture, and
                    are looking for an opportunity where you can scale your
                    career alongside a rapidly growing company, then this could
                    be for you.
                  </p>
                </div>
                <div className="text__group">
                  <h3>Responsibilities</h3>
                  <ul>
                    <li>
                      Help strengthen and support relationships with Revest’s
                      existing clients, and generally delight Revest's clients
                      in every way possible.
                    </li>
                    <li>Expertly respond to and address client questions.</li>
                    <li>
                      {" "}
                      Manage &amp; execute new investor onboarding, evaluate a
                      client's corporate entities &amp; legal structures to
                      determine onboarding and due diligence requirements.
                      Gather accurate due diligence information from your
                      clients in an efficient and effective way with the client
                      experience being front of mind.
                    </li>
                    <li>
                      Assist the Head of Investor Relations and Investor
                      Relations Executives to nurture leads and follow up with
                      investors in a systematic and timely manner.
                    </li>
                    <li className="neutral-bottom">
                      Work with the technology and compliance team to build
                      processes and technology that streamlines and improves our
                      customer onboarding journey.
                    </li>
                  </ul>
                </div>
                <div className="text__group">
                  <h3>Requirements</h3>
                  <ul>
                    <li>
                      Help strengthen and support relationships with Revest’s
                      existing clients, and generally delight Revest's clients
                      in every way possible.
                    </li>
                    <li>Expertly respond to and address client questions.</li>
                    <li>
                      {" "}
                      Manage &amp; execute new investor onboarding, evaluate a
                      client's corporate entities &amp; legal structures to
                      determine onboarding and due diligence requirements.
                      Gather accurate due diligence information from your
                      clients in an efficient and effective way with the client
                      experience being front of mind.
                    </li>
                    <li>
                      Assist the Head of Investor Relations and Investor
                      Relations Executives to nurture leads and follow up with
                      investors in a systematic and timely manner.
                    </li>
                    <li className="neutral-bottom">
                      Work with the technology and compliance team to build
                      processes and technology that streamlines and improves our
                      customer onboarding journey.
                    </li>
                  </ul>
                </div>
                <div className="text__group">
                  <h3>Benefits</h3>
                  <ul>
                    <li>
                      Help strengthen and support relationships with Revest’s
                      existing clients, and generally delight Revest's clients
                      in every way possible.
                    </li>
                    <li>Expertly respond to and address client questions.</li>
                    <li>
                      {" "}
                      Manage &amp; execute new investor onboarding, evaluate a
                      client's corporate entities &amp; legal structures to
                      determine onboarding and due diligence requirements.
                      Gather accurate due diligence information from your
                      clients in an efficient and effective way with the client
                      experience being front of mind.
                    </li>
                    <li>
                      Assist the Head of Investor Relations and Investor
                      Relations Executives to nurture leads and follow up with
                      investors in a systematic and timely manner.
                    </li>
                    <li className="neutral-bottom">
                      Work with the technology and compliance team to build
                      processes and technology that streamlines and improves our
                      customer onboarding journey.
                    </li>
                  </ul>
                </div>
                <div className="cta__btn">
                  <a
                    href="#application"
                    className="button button--effect job__application__btn"
                  >
                    Apply for this Job
                  </a>
                </div>
              </div>
              <div className="position__details__content" id="application">
                <form action="#0" method="post" name="application__form">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="input input--secondary">
                        <label htmlFor="appFirstName">First Name*</label>
                        <input
                          type="text"
                          name="app__first__name"
                          id="appFirstName"
                          placeholder="Enter Your First Name"
                          required="required"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="input input--secondary">
                        <label htmlFor="appLastName">Last Name*</label>
                        <input
                          type="text"
                          name="app__last__name"
                          id="appLastName"
                          placeholder="Enter Your Last Name"
                          required="required"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="input input--secondary">
                    <label htmlFor="appRegistrationMail">Email*</label>
                    <input
                      type="email"
                      name="app__registration__email"
                      id="appRegistrationMail"
                      placeholder="Enter your email"
                      required="required"
                    />
                  </div>
                  <div className="input input--secondary input__alt">
                    <label htmlFor="appNumber">Phone*</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <select
                          className="number__code__select"
                          id="numberCodeSelect"
                        >
                          <option selected="" value={0}>
                            +1
                          </option>
                          <option value={1}>+2</option>
                          <option value={2}>+3</option>
                          <option value={3}>+4</option>
                          <option value={4}>+5</option>
                          <option value={5}>+6</option>
                        </select>
                      </div>
                      <input
                        type="number"
                        name="app__number"
                        id="appNumber"
                        placeholder="345-323-1234"
                      />
                    </div>
                  </div>
                  <div className="input__file__wrapper">
                    <p>Resume*</p>
                    <div className="input input__file">
                      <div className="icon__box">
                        <img
                          src={require("../assets/images/file.png")}
                          alt="Upload Avatar"
                        />
                      </div>
                      <label htmlFor="uploadImage">
                        <span>Upload a files</span> or drag and drop here
                      </label>
                      <input
                        type="file"
                        name="add_image"
                        id="uploadImage"
                        className="d-none"
                      />
                    </div>
                  </div>
                  <div className="cta__btn">
                    <button type="submit" className="button button--effect">
                      Submit Application
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CareerDetails;
