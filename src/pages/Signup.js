import React, { useState } from "react";
import { Helmet } from "react-helmet";
import bgImg from "../assets/images/registration-bg.png";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/vendor/nice-select/css/nice-select.css";
import { Link, useNavigate } from "react-router-dom";
import { FormikProvider, ErrorMessage, Form, useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import { useUserContext } from "../context/UserContext";
import styled from "styled-components";
import useUserdata from "../hooks/useUserData";
import {
  signInWithPopup,
  FacebookAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";
// import { authentication } from "../firebaseConfig";

const Signup = () => {
  const [loadingGoogle, setLoadingGoogle] = useState(false);
  const { userData, setUserData } = useUserContext();
  const { handleLogout } = useUserdata();

  const navigate = useNavigate();
  // -------------------------------yup---------------------------
  const SignUpSchema = yup.object().shape({
    email: yup.string().required("email is required").email(),
    fname: yup.string().required("firstname is required"),
    lname: yup.string().required("lastname is required"),
    password: yup
      .string()
      .required("password is required")
      .min(
        10,
        "should be 10 chars minimum with at least 1 uppercase and one special character."
      )
      .matches(
        /^(?=.*[A-Z])(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{10,}$/,
        "Password should be 10 chars minimum with at least 1 uppercase and one special character."
      ),
    confirmpassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "password must match")
      .required("confirm password is required"),
    checkBox: yup
      .boolean()
      .oneOf([true], "You must accept the privacy & policy"),
  });
  // ------------------------formik----------------------------
  const formik = useFormik({
    initialValues: {
      email: "",
      fname: "",
      lname: "",
      password: "",
      confirmpassword: "",
      youAre: "particular",
      checkBox: false,
    },
    validationSchema: SignUpSchema,
    onSubmit: async (values) => {
      const user = {
        // google_id: "",
        // facebook_id: "",
        fname: values.fname,
        lname: values.lname,
        email: values.email,
        password: values.password,
        youAre: values.youAre,
      };
      await axios
        .post("https://investigo-tai.herokuapp.com/register", user, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          if (res.data.status === "success") {
            console.log(res?.data);
            window.localStorage.setItem("user", JSON.stringify(res?.data));
            setUserData(res?.data);
            navigate("/");
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }
        })
        .catch((err) => {
          const error = err?.response?.data?.message;
          if (error === "email already registered") {
            toast.error("Email already exist!!", {
              duration: 2000,
              style: {
                width: "500px",
                background: "black",
                color: "white",
                fontSize: "large",
              },
              position: "top-center",
            });
          } else {
            return true;
          }
        });
    },
  });
  const { handleSubmit, isSubmitting, getFieldProps, values } = formik;
  // -------------------input errror text color--------------

  // sign in with google
  // const SignInwithFacebook = () => {
  //   const provider = new FacebookAuthProvider();
  //   signInWithPopup(authentication, provider)
  //     .then(({ user }) => {
  //       const userdata = {
  //         email: user.email,
  //         name: user.displayName,
  //         googleId: user?.uid,
  //       };
  //       setLoadingGoogle(true);
  //       axios
  //         .post("https://investigo-tai.herokuapp.com/login", userdata, {
  //           headers: {
  //             Accept: "application/json",
  //             "Content-Type": "application/json",
  //           },
  //         })
  //         .then((res) => {
  //           if (res.data.status === "success") {
  //             localStorage.setItem(
  //               "user",
  //               JSON.stringify(user?.reloadUserInfo)
  //             );
  //             setUserData(user?.reloadUserInfo);
  //             navigate("/");
  //             window.scrollTo({
  //               top: 0,
  //               behavior: "smooth",
  //             });
  //             setLoadingGoogle(false);
  //           }
  //         });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       setLoadingGoogle(false);
  //     });
  // };

  // sign in with google
  // const SignInwithGoogle = () => {
  //   const provider = new GoogleAuthProvider();
  //   signInWithPopup(authentication, provider)
  //     .then(({ user }) => {
  //       const userdata = {
  //         email: user.email,
  //         name: user.displayName,
  //         googleId: user?.uid,
  //       };
  //       setLoadingGoogle(true);
  //       axios
  //         .post("https://investigo-tai.herokuapp.com/login", userdata, {
  //           headers: {
  //             Accept: "application/json",
  //             "Content-Type": "application/json",
  //           },
  //         })
  //         .then((res) => {
  //           if (res.data.status === "success") {
  //             localStorage.setItem(
  //               "user",
  //               JSON.stringify(user?.reloadUserInfo)
  //             );
  //             setUserData(user?.reloadUserInfo);
  //             navigate("/");
  //             window.scrollTo({
  //               top: 0,
  //               behavior: "smooth",
  //             });
  //             setLoadingGoogle(false);
  //           }
  //         });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       setLoadingGoogle(false);
  //     });
  // };
  const TextError = styled.p`
    color: #ff0000;
    font-size: medium;
    text-align: left;
  `;
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
              <h4 className="neutral-top">Registration</h4>
              <p>
                Already Registered?{" "}
                <a href="/sigin" style={{ textDecoration: "none" }}>
                  Login
                </a>
              </p>
              <FormikProvider value={formik}>
                <Form
                  autoComplete="off"
                  onSubmit={handleSubmit}
                  className="registration__form"
                >
                  <div className="regi__type">
                    <label htmlFor="typeSelect">You are?</label>
                    <select
                      className="type__select nice-select list"
                      id="typeSelect"
                      style={{ fontSize: "20px" }}
                      {...getFieldProps("youAre")}
                    >
                      <option value="particular">Particular</option>
                      <option value="individual">Individual</option>
                    </select>
                    <ErrorMessage name="youAre" component={TextError} />
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="input input--secondary">
                        <label htmlFor="firstName">First Name*</label>
                        <input
                          type="text"
                          name="fname"
                          id="firstName"
                          placeholder="First Name"
                          {...getFieldProps("fname")}
                        />
                        <ErrorMessage name="fname" component={TextError} />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="input input--secondary">
                        <label htmlFor="lastName">Last Name*</label>
                        <input
                          type="text"
                          name="lname"
                          id="lastName"
                          placeholder="Last Name"
                          {...getFieldProps("lname")}
                        />
                        <ErrorMessage name="lname" component={TextError} />
                      </div>
                    </div>
                  </div>
                  <div className="input input--secondary">
                    <label htmlFor="registrationMail">Email*</label>
                    <input
                      type="email"
                      name="email"
                      id="loginMail"
                      placeholder="Enter your email"
                      {...getFieldProps("email")}
                    />

                    <ErrorMessage name="email" component={TextError} />
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="input input--secondary">
                        <label htmlFor="regiPass">Password*</label>
                        <input
                          type="password"
                          name="password"
                          id="regiPass"
                          placeholder="Password"
                          {...getFieldProps("password")}
                        />
                        <ErrorMessage name="password" component={TextError} />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="input input--secondary">
                        <label htmlFor="passCon">Password Confirmation*</label>
                        <input
                          type="password"
                          name="confirmpassword"
                          id="passCon"
                          placeholder="Password Confirm"
                          {...getFieldProps("confirmpassword")}
                        />
                        <ErrorMessage
                          name="confirmpassword"
                          component={TextError}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input
                        type="checkbox"
                        id="condtion"
                        name="checkBox"
                        defaultValue="agree"
                        {...getFieldProps("checkBox")}
                      />
                      <span className="checkmark" />I have read and I agree to
                      the{" "}
                      <a href="/keyrisks" style={{ textDecoration: "none" }}>
                        Privacy Policy
                      </a>
                    </label>
                    <ErrorMessage
                      name="checkBox"
                      component={TextError}
                    />
                  </div>
                  <div className="input__button">
                    <button type="submit" className="button button--effect">
                      {isSubmitting ? "Loading..." : "Create My Account"}
                    </button>
                  </div>
                </Form>
              </FormikProvider>
            </div>
          </div>
        </section>
        {/* ==== #registration section end ==== */}
      </div>
    </>
  );
};

export default Signup;
