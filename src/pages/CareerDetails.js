import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Footer, Navbar } from "../components";
import bgImg from "../assets/images/banner/banner-bg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { useFormik, FormikProvider, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import { toast, Toaster } from "react-hot-toast";
import axios from "axios";
import styled from "styled-components";

const CareerDetails = () => {
  const [showOverview, setShowOverview] = useState(true);
  const [profileImage, setProfileImage] = useState("");
  const [prevImage, setprevImage] = useState(null);

  // image upload
  const handleImageUpload = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    setprevImage(URL.createObjectURL(file));
    setProfileImage(file);
  };
  // / -------------------------------yup---------------------------
  const SignInSchema = yup.object().shape({
    email: yup.string().required("email is required").email(),
    fname: yup.string().required("firstname is required"),
    lname: yup.string().required("lastname is required"),
    phone: yup
      .number()
      .typeError("That doesn't look like a phone number")
      .positive("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point")
      .min(8)
      .required("A phone number is required"),
    // resume: yup.mixed().test("fileSize", "The file is too large", (value) => {
    //   if (!value.length) return true; // attachment is optional
    //   return value[0].size <= 2000000;
    // }).required("file is required")
    // resume: yup
    //   .mixed()
    //   .required()
    //   .test("fileFormat", "PDF only", (value) => {
    //     console.log(value);
    //     return value && ["application/pdf"].includes(value.type);
    //   }),
  });

  // ------------------------formik----------------------------
  const formik = useFormik({
    initialValues: {
      email: "",
      fname: "",
      lname: "",
      phone: "",
      file: profileImage ?? null,
    },
    validationSchema: SignInSchema,
    onSubmit: async (values) => {
      let fd = new FormData();
      fd.append("fname", values.fname);
      fd.append("lname", values.lname);
      fd.append("email", values.email);
      fd.append("phone", values.phone);
      fd.append("resume", profileImage);

      await axios
        .post("https://investigo-tai.herokuapp.com/application", fd, {
          headers: {
            "Content-Type": "multipart/form-data",

            // "consumer-access-token": userData?.api_token,
          },
        })
        .then((res) => {
          console.log(res?.data);
          if (res.data.status === "success") {
            toast.success(res?.data?.message, {
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
          }
          setProfileImage("");
          resetForm();
        })
        .catch((err) => {
          console.log(err?.response?.data);
          if (err?.response?.data?.status === "fail") {
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
          setProfileImage("");
          resetForm();
        });
    },
  });
  const { handleSubmit, isSubmitting, getFieldProps, resetForm, values } =
    formik;

  const TextError = styled.p`
    color: #ff0000;
    font-size: medium;
    text-align: left;
    text-transform: capitalize;
  `;
  return (
    <>
      <Helmet>
        <title>Investigo - CareerDetails</title>
      </Helmet>
      <Toaster />
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
          className="banner__thumb"
        />
      </section>
      {/* position details section */}
      <section className="position__details section__space">
        <div className="container">
          <div className="position__details__area">
            <h2 className="neutral-top">Investor Relations Support</h2>
            <div className="group__btn">
              <a
                style={{ cursor: "pointer" }}
                onClick={() => setShowOverview(true)}
                className={`button button--effect  job__application__btn ${
                  !showOverview && "button--secondary"
                }`}
              >
                Overview
              </a>
              <a
                className={`button button--effect  job__application__btn ${
                  showOverview && "button--secondary"
                }`}
                style={{ cursor: "pointer" }}
                onClick={() => setShowOverview(false)}
              >
                Application
              </a>
            </div>
            <div className="position__details__content__wrapper">
              {showOverview ? (
                // overview
                <div className="position__details__content">
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
                      Investor Relations and will spend the majority of your
                      time interacting with our investors to build new
                      relationships, help them onboard onto the Revest platform
                      and generally ensure they receive a world-className
                      experience. If you enjoy a fast-paced environment, an
                      energetic and social culture, and are looking for an
                      opportunity where you can scale your career alongside a
                      rapidly growing company, then this could be for you.
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
                        clients in an efficient and effective way with the
                        client experience being front of mind.
                      </li>
                      <li>
                        Assist the Head of Investor Relations and Investor
                        Relations Executives to nurture leads and follow up with
                        investors in a systematic and timely manner.
                      </li>
                      <li className="neutral-bottom">
                        Work with the technology and compliance team to build
                        processes and technology that streamlines and improves
                        our customer onboarding journey.
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
                        clients in an efficient and effective way with the
                        client experience being front of mind.
                      </li>
                      <li>
                        Assist the Head of Investor Relations and Investor
                        Relations Executives to nurture leads and follow up with
                        investors in a systematic and timely manner.
                      </li>
                      <li className="neutral-bottom">
                        Work with the technology and compliance team to build
                        processes and technology that streamlines and improves
                        our customer onboarding journey.
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
                        clients in an efficient and effective way with the
                        client experience being front of mind.
                      </li>
                      <li>
                        Assist the Head of Investor Relations and Investor
                        Relations Executives to nurture leads and follow up with
                        investors in a systematic and timely manner.
                      </li>
                      <li className="neutral-bottom">
                        Work with the technology and compliance team to build
                        processes and technology that streamlines and improves
                        our customer onboarding journey.
                      </li>
                    </ul>
                  </div>
                  <div className="cta__btn">
                    <a
                      className="button button--effect button--secondary job__application__btn"
                      style={{ cursor: "pointer" }}
                      href="#application"
                      onClick={() => {
                        // scrollToTop();
                        setShowOverview(false);
                      }}
                    >
                      Apply for this Job
                    </a>
                  </div>
                </div>
              ) : (
                // application
                <div className="position__details__content" id="application">
                  <FormikProvider value={formik}>
                    <Form name="application__form" onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="input input--secondary">
                            <label htmlFor="askFirstName">First Name*</label>
                            <input
                              type="text"
                              name="fname"
                              id="askFirstName"
                              placeholder="Enter Your First Name"
                              {...getFieldProps("fname")}
                            />
                            <ErrorMessage name="fname" component={TextError} />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="input input--secondary">
                            <label htmlFor="askLastName">Last Name*</label>
                            <input
                              type="text"
                              name="lname"
                              id="askLastName"
                              placeholder="Enter Your Last Name"
                              {...getFieldProps("lname")}
                            />
                            <ErrorMessage name="lname" component={TextError} />
                          </div>
                        </div>
                      </div>
                      <div className="input input--secondary">
                        <label htmlFor="askRegistrationMail">Email*</label>
                        <input
                          type="email"
                          name="email"
                          id="askRegistrationMail"
                          placeholder="Enter your email"
                          {...getFieldProps("email")}
                        />
                        <ErrorMessage name="email" component={TextError} />
                      </div>
                      <div className="input input--secondary input__alt">
                        <label htmlFor="askNumber">Phone*</label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <select
                              className="number__code__select"
                              id="numberCodeSelectAlert"
                            >
                              <option defaultValue="" value={0}>
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
                            type="tel"
                            maxLength={10}
                            name="phone"
                            id="askNumber"
                            {...getFieldProps("phone")}
                            placeholder="345-323-1234"
                          />
                        </div>
                        <ErrorMessage name="phone" component={TextError} />
                      </div>
                      {/* {prevImage ? (
                        <img
                          src={prevImage}
                          className="w-full h-full object-cover bg-gray-300 object-center rounded-full border-8 border-white absolute -top-20 left-24"
                        />
                      ) : (
                        <img
                          src={prevImage ? prevImage : null}
                          className="w-full h-full object-cover bg-gray-300 object-center rounded-full border-8 border-white absolute -top-20 left-24"
                        />
                      )} */}
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
                            name="file"
                            value={profileImage}
                            id="uploadImage"
                            className="d-none"
                            {...getFieldProps("file")}
                            onChange={handleImageUpload}
                          />
                        </div>
                        <ErrorMessage name="resume" component={TextError} />
                      </div>
                      <div className="cta__btn">
                        <button type="submit" className="button button--effect">
                          {isSubmitting
                            ? "Submitting..."
                            : "Submit Application"}
                        </button>
                      </div>
                    </Form>
                  </FormikProvider>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CareerDetails;
