import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import bgImg from "../assets/images/registration-bg.png";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import { MailIcon } from "@heroicons/react/solid";
import OtpVerify from "../components/OtpVerify";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const Forgotpassword = () => {
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState("");

  const CloseModal = () => setOpenModal(false);

  const forgotPassword = () => {
    if (email === "") {
      toast.error("Oops you forgot to enter email!!", {
        duration: 2000,
        style: {
          width: "500px",
          background: "black",
          color: "white",
          fontSize: "large",
        },
        position: "top-center",
      });
      return false;
    }
    setLoading(true);
    const data = {
      email,
    };
    axios
      .post("https://investigo-tai.herokuapp.com/forgot", data)
      .then((res) => {
        if (res?.data?.status === "success") {
          console.log(res?.data);
          setOpenModal(true);
          setLoading(false);
          setOtp(res?.data?.otp);
        }
      })
      .catch((err) => {
        if (err?.response?.data?.status === "fail") {
          console.log(err?.response?.data);
          toast.error(err?.response?.data?.message, {
            duration: 2000,
            style: {
              width: "500px",
              background: "black",
              color: "white",
              fontSize: "large",
            },
            position: "top-center",
          });
          setLoading(false);
        }
      });
  };

  // styled component
  return (
    <>
      <Helmet>
        <title>Investigo - Forgot password</title>
      </Helmet>
      <Toaster />
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
                  <a
                    href="/signin"
                    style={{ textDecoration: "none" }}
                    className="log d-none d-sm-block"
                  >
                    {" "}
                    Log In{" "}
                  </a>
                  <a
                    href="/signup"
                    className="button button--effect d-none d-sm-block"
                    style={{ color: "white", textDecoration: "none" }}
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
                    <a href="/signin" className="nav-link">
                      Log In
                    </a>
                  </li>
                  <li className="nav-item d-block d-sm-none">
                    <a
                      href="/signup"
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
              <h4 className="neutral-top">Forgot Password</h4>

              <div className="input input--secondary">
                <label htmlFor="loginMail">Email*</label>
                <input
                  type="email"
                  name="email"
                  id="loginMail"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input__button">
                <button
                  onClick={() => forgotPassword()}
                  type="button"
                  className="button button--effect"
                >
                  {loading ? "Loading..." : "Submit"}{" "}
                </button>
                {openModal && (
                  <OtpVerify
                    openModal={openModal}
                    CloseModal={CloseModal}
                    email={email}
                    otp={otp}
                  />
                )}
              </div>
            </div>
          </div>
        </section>
        {/* ==== #registration section end ==== */}
      </div>
    </>
  );
};

export default Forgotpassword;
