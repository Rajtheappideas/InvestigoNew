import React, { useState } from "react";
import { Helmet } from "react-helmet";
import bgImg from "../assets/images/registration-bg.png";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import useUserData from "../hooks/useUserData";
import { useUserContext } from "../context/UserContext";
import { useFormik, FormikProvider, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import { toast, Toaster } from "react-hot-toast";
import axios from "axios";
import {
  signInWithPopup,
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithCredential,
  signInWithEmailAndPassword,
} from "firebase/auth";
import styled from "styled-components";
import { authentication } from "../Firebaseconfig";
import google from "../assets/images/google.png";

const Signin = () => {
  const { handleLogout } = useUserData();
  const [loadingGoogle, setLoadingGoogle] = useState(false);
  const [isRememnerME, setIsRememnerME] = useState(
    localStorage.getItem("rememberMe") ? true : false
  );
  const [email, setEmail] = useState("");

  const { userData, setUserData } = useUserContext();

  const navigate = useNavigate();
  // -------------------------------yup---------------------------
  const SignInSchema = yup.object().shape({
    email: yup.string().required("email is required").email(),
    password: yup.string().required("password is required"),
  });

  // ------------------------formik----------------------------
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: SignInSchema,
    onSubmit: async (values) => {
      const user = {
        email: values.email,
        password: values.password,
      };
      await axios
        .post("https://investigo-tai.herokuapp.com/login", user, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res?.data);
          if (res.data.status === "success") {
            window.localStorage.setItem("user", JSON.stringify(res?.data));
            setUserData(res?.data);
            // navigate("/");
            window.history.back();
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }
        })
        .catch((err) => {
          if (err?.response?.data?.status === "fail") {
            console.log(err?.response?.data);
            toast.error(err?.response?.data?.message, {
              duration: 2000,
              style: {
                width: "auto",
                height: "auto",
                background: "black",
                color: "white",
                fontSize: "large",
              },
              position: "top-center",
            });
            return false;
          }
        });
    },
  });
  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  // sign in with google
  // const SignInwithFacebook = () => {
  //   const provider = new FacebookAuthProvider();
  //   // signInWithCredential(authentication, provider)
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
  const SignInwithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
      .then(({ user }) => {
        const userdata = {
          email: user.email,
          fname: user.displayName.split(" ", 2)[0],
          lname: user.displayName.split(" ", 2)[1],
          googleId: user?.uid,
        };
        setLoadingGoogle(true);
        axios
          .post("https://investigo-tai.herokuapp.com/login", userdata, {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          })
          .then((res) => {
            if (res.data.status === "success") {
              localStorage.setItem("user", JSON.stringify(res?.data));
              setUserData(res?.data);
              window.history.back();
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
              setLoadingGoogle(false);
            }
          });
      })
      .catch((err) => {
        console.log(err);
        setLoadingGoogle(false);
      });
  };

  const RememerMe = () => {
    if (localStorage.getItem("rememberMe") === "" && !isRememnerME) {
      localStorage.setItem("rememberMe", isRememnerME);
      localStorage.setItem("email", email);
    } else {
      setEmail(JSON.parse(localStorage.getItem("email")));
    }
  };

  const TextError = styled.p`
    color: #ff0000;
    font-size: medium;
    text-align: left;
    text-transform: capitalize;
  `;

  return (
    <>
      <Helmet>
        <title>Investigo - Signin</title>
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
              {userData !== null ? (
                <div className="navbar__out order-2 order-xl-3">
                  <div className="nav__group__btn">
                    <a
                      style={{
                        textDecoration: "none",
                        color: "white",
                        cursor: "pointer",
                      }}
                      className="button button--effect d-none d-sm-block"
                      onClick={() => handleLogout()}
                    >
                      {" "}
                      Log out{" "}
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
              ) : (
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
              )}
              {userData !== null ? (
                <div
                  className="collapse navbar-collapse order-3 order-xl-2"
                  id="primaryNav"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item d-block d-sm-none">
                      <a
                        // href="#"
                        style={{ cursor: "pointer" }}
                        className="nav-link"
                        onClick={() => handleLogout()}
                      >
                        Log out
                      </a>
                    </li>
                  </ul>
                </div>
              ) : (
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
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Join Now <i className="fa-solid fa-arrow-right-long" />
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </nav>
        </header>
        {/* ==== #header end ==== */}
        {/* ==== registration section start ==== */}
        {userData !== null ? (
          <section className="registration clear__top">
            <div className="container">
              <div className="registration__area">
                <h4 className="neutral-top">You are already logged in !!!</h4>
                <p>
                  <a
                    // href=""
                    onClick={() => handleLogout()}
                    style={{ textDecoration: "none", cursor: "pointer" }}
                  >
                    Log out
                  </a>
                </p>
              </div>
            </div>
          </section>
        ) : (
          <section className="registration clear__top">
            <div className="container">
              <div className="registration__area">
                <h4 className="neutral-top">Log in</h4>
                <p>
                  Don't have an account?{" "}
                  <a href="/signup" style={{ textDecoration: "none" }}>
                    Register here.
                  </a>
                </p>
                <FormikProvider value={formik}>
                  <Form
                    onSubmit={handleSubmit}
                    autoComplete="off"
                    className="form__login"
                  >
                    <div className="input input--secondary">
                      <label htmlFor="loginMail">Email*</label>
                      <input
                        type="email"
                        name="email"
                        id="loginMail"
                        placeholder="Enter your email"
                        {...getFieldProps("email")}
                      />

                      <ErrorMessage name="email" component={TextError} />
                    </div>
                    <div className="input input--secondary">
                      <label htmlFor="loginPass">Password*</label>
                      <input
                        type="password"
                        name="password"
                        id="loginPass"
                        placeholder="Password"
                        {...getFieldProps("password")}
                      />
                      <ErrorMessage name="password" component={TextError} />
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
                      <a
                        href="/forgotpassword"
                        style={{ textDecoration: "none" }}
                      >
                        Forget Password ?
                      </a>
                    </div>
                    <div className="input__button">
                      <button type="submit" className="button button--effect">
                        {isSubmitting ? "loading..." : "Login"}
                      </button>
                    </div>
                    {/* google login */}
                    <div className="input__button">
                      <button
                        type="button"
                        onClick={SignInwithGoogle}
                        className=" button button--effect button--secondary"
                        style={{ color: "", width: "100%" }}
                      >
                        <img
                          src={google}
                          style={{ height: "2rem", width: "2rem" }}
                        />
                        Login with google
                      </button>
                    </div>
                  </Form>
                </FormikProvider>
              </div>
            </div>
          </section>
        )}
        {/* ==== #registration section end ==== */}
      </div>
    </>
  );
};

export default Signin;
