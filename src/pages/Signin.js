import React from "react";
import { Helmet } from "react-helmet";
import bgImg from "../assets/images/registration-bg.png";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Signin = () => {
  return (
    <>
      <Helmet>
        <title>Investigo - Signin</title>
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
                      Join Now <i className="fa-solid fa-arrow-right-long" />
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
              <h4 className="neutral-top">Log in</h4>
              <p>
                Don't have an account? <a href="/signup">Register here.</a>
              </p>
              <form
                action="#"
                method="post"
                name="login__form"
                className="form__login"
              >
                <div className="input input--secondary">
                  <label htmlFor="loginMail">Email*</label>
                  <input
                    type="email"
                    name="login__email"
                    id="loginMail"
                    placeholder="Enter your email"
                    required="required"
                  />
                </div>
                <div className="input input--secondary">
                  <label htmlFor="loginPass">Password*</label>
                  <input
                    type="password"
                    name="login__pass"
                    id="loginPass"
                    placeholder="Password"
                    required="required"
                  />
                </div>
                <div className="checkbox login__checkbox">
                  <label>
                    <input
                      type="checkbox"
                      id="remeberPass"
                      name="remeber__pass"
                      defaultValue="remember"
                      color="blue"
                    />
                    <span className="checkmark" />
                    Remember Me
                  </label>
                  <a href="/forgotpassword">Forget Password</a>
                </div>
                <div className="input__button">
                  <button type="submit" className="button button--effect">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
        {/* ==== #registration section end ==== */}
      </div>
    </>
  );
};

export default Signin;
