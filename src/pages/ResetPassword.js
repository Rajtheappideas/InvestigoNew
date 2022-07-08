import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import bgImg from "../assets/images/registration-bg.png";
import axios from "axios";
import React, { useState } from "react";
import Helmet from "react-helmet";
import { toast, Toaster } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Resetpassword = () => {
  const [loading, setLoading] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const { email } = useLocation().state;

  const navigate = useNavigate();

  const forgotPassword = () => {
    if (newPassword === "" || confirmNewPassword === "") {
      toast.error("All filed should be filled!!", {
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
    } else if (newPassword !== confirmNewPassword) {
      toast.error("new password and confirm password should be match!!", {
        duration: 2000,
        style: {
          width: "100%",
          background: "black",
          color: "white",
          fontSize: "large",
          whiteSpace: "nowrap",
        },
        position: "top-center",
      });
      return false;
    }
    setLoading(true);
    const data = {
      email,
      password: newPassword,
    };
    axios
      .post("https://investigo-tai.herokuapp.com/reset_pass", data)
      .then((res) => {
        if (res?.data?.status === "success") {
          toast.success("Password updated", {
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
          navigate("/signin");
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

  return (
    <>
      <Helmet>
        <title>Investigo - Reset Password</title>
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
        {/* ==== reset password section start ==== */}
        <section className="registration clear__top">
          <div className="container">
            <div className="registration__area">
              <h4 className="neutral-top">Reset Password</h4>

              <div className="input input--secondary">
                <label htmlFor="loginMail">Email*</label>
                <input
                  type="email"
                  name="email"
                  id="loginMail"
                  placeholder="Enter your email"
                  value={email}
                  disabled={true}
                />
              </div>
              <div className="input input--secondary">
                <label htmlFor="loginPass">New Password*</label>
                <input
                  type="password"
                  name="password"
                  id="loginPass"
                  placeholder="Enter New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
              <div className="input input--secondary">
                <label htmlFor="loginPass">Confrim New Password*</label>
                <input
                  type="password"
                  name="confirmpassword"
                  id="loginPass"
                  placeholder="Enter Confrim New Password"
                  value={confirmNewPassword}
                  onChange={(e) => setConfirmNewPassword(e.target.value)}
                />
              </div>

              <div className="input__button">
                <button
                  type="button"
                  onClick={forgotPassword}
                  className="button button--effect"
                >
                  {loading ? "loading..." : "Submit"}
                </button>
              </div>
              <div className="input__button">
                <button type="button" className="button button--effect">
                  <a href="/" style={{color:"white" ,textDecorationLine:"none",fontSize:"15px"}}>Back to login</a>
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* ==== #registration section end ==== */}
      </div>
    </>
  );
};

export default Resetpassword;
