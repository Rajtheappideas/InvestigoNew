import React from "react";
import { Helmet } from "react-helmet";
import bgImg from "../assets/images/registration-bg.png";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Signup = () => {
  return (
    <>
      <Helmet>
        <title>Investigo - Signup</title>
      </Helmet>
      <div
        className="wrapper bg__img"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        {/* ==== header start ==== */}
        <header className="header header--secondary">
          <nav className="navbar navbar-expand-xl">
            <div className="container">
              <a className="navbar-brand" href="/">
                <img
                  src={require("../assets/images/logo.png")}
                  alt="Logo"
                  className="logo"
                />
              </a>
              <div className="navbar__out order-2 order-xl-3">
                <div className="nav__group__btn">
                  <a href="/signin" className="log d-none d-sm-block">
                    {" "}
                    Log In{" "}
                  </a>
                  <a
                    href="/signup"
                    className="button button--effect d-none d-sm-block"
                  >
                    {" "}
                    Join Now <FontAwesomeIcon icon={faArrowRightLong} />{" "}
                  </a>
                </div>
                <button
                  className="navbar-toggler d-block d-sm-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#primaryNav"
                  aria-controls="primaryNav"
                  aria-expanded="false"
                  aria-label="Toggle Primary Nav"
                >
                  <span className="icon-bar top-bar" />
                  <span className="icon-bar middle-bar" />
                  <span className="icon-bar bottom-bar" />
                </button>
              </div>
              <div
                className="collapse navbar-collapse order-3 order-xl-2"
                id="primaryNav"
              >
                <ul className="navbar-nav">
                  <li className="nav-item d-block d-sm-none">
                    <a href="login.html" className="nav-link">
                      Log In
                    </a>
                  </li>
                  <li className="nav-item d-block d-sm-none">
                    <a
                      href="registration.html"
                      className="button button--effect button--last"
                    >
                      Join Now <FontAwesomeIcon icon={faArrowRightLong} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        {/* ==== #header end ==== */}
        {/* ==== registration section start ==== */}
        <section className="registration clear__top">
          <div className="container">
            <div className="registration__area">
              <h4 className="neutral-top">Registration</h4>
              <p>
                Already Registered? <a href="/sigin">Login</a>
              </p>
              <form action="#" method="post" name="registration__form">
                <div className="regi__type">
                  <label htmlFor="typeSelect">You are?</label>
                  <select className="type__select" id="typeSelect">
                    <option value="particular">Particular</option>
                    <option value="individual">Individual</option>
                  </select>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="input input--secondary">
                      <label htmlFor="firstName">First Name*</label>
                      <input
                        type="text"
                        name="first__name"
                        id="firstName"
                        placeholder="First Name"
                        required="required"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input input--secondary">
                      <label htmlFor="lastName">Last Name*</label>
                      <input
                        type="text"
                        name="last__name"
                        id="lastName"
                        placeholder="Last Name"
                        required="required"
                      />
                    </div>
                  </div>
                </div>
                <div className="input input--secondary">
                  <label htmlFor="registrationMail">Email*</label>
                  <input
                    type="email"
                    name="registration__email"
                    id="registrationMail"
                    placeholder="Enter your email"
                    required="required"
                  />
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="input input--secondary">
                      <label htmlFor="regiPass">Password*</label>
                      <input
                        type="password"
                        name="regi__pass"
                        id="regiPass"
                        placeholder="Password"
                        required="required"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input input--secondary">
                      <label htmlFor="passCon">Password Confirmation*</label>
                      <input
                        type="password"
                        name="pass__con"
                        id="passCon"
                        placeholder="Password Confirm"
                        required="required"
                      />
                    </div>
                  </div>
                </div>
                <div className="checkbox">
                  <label>
                    <input
                      type="checkbox"
                      id="condtion"
                      name="accept__condition"
                      defaultValue="agree"
                    />
                    <span className="checkmark" />I have read and I agree to the{" "}
                    <a href="/keyrisks">Privacy Policy</a>
                  </label>
                </div>
                <div className="input__button">
                  <button type="submit" className="button button--effect">
                    Create My Account
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
        {/* ==== #registration section end ==== */}
        {/* Scroll To Top */}
        <a href="javascript:void(0)" className="scrollToTop">
          <i className="fa-solid fa-angles-up" />
        </a>
      </div>
    </>
  );
};

export default Signup;
