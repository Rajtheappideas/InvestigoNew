import React from "react";
import { Helmet } from "react-helmet";
import { Footer, Navbar } from "../components";
import bgImg from "../assets/images/contact-banner-bg.png";
import bgImg1 from "../assets/images/ask-bg.png";
import { useUserContext } from "../context/UserContext";
import { useFormik, FormikProvider, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import { toast, Toaster } from "react-hot-toast";
import axios from "axios";
import styled from "styled-components";

const Contactus = () => {
  // -------------------------------yup---------------------------
  const SignInSchema = yup.object().shape({
    email: yup.string().required("email is required").email(),
    fname: yup.string().required("firstname is required"),
    lname: yup.string().required("lastname is required"),
    message: yup.string().required("message is required"),
    subject: yup.string().required("subject is required"),
    phone: yup
      .number()
      .typeError("That doesn't look like a phone number")
      .positive("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point")
      .min(8)
      .required("A phone number is required"),
  });

  // ------------------------formik----------------------------
  const formik = useFormik({
    initialValues: {
      email: "",
      fname: "",
      lname: "",
      phone: "",
      message: "",
      subject: "",
    },
    validationSchema: SignInSchema,
    onSubmit: async (values) => {
      const user = {
        fname: values.fname,
        lname: values.lname,
        email: values.email,
        phone: values.phone,
        message: values.message,
        subject: values.subject,
      };
      await axios
        .post("https://investigo-tai.herokuapp.com/contact", user, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
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
          resetForm();
        })
        .catch((err) => {
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
          resetForm();
        });
    },
  });
  const { handleSubmit, isSubmitting, getFieldProps, resetForm } = formik;

  const TextError = styled.p`
    color: #ff0000;
    font-size: medium;
    text-align: left;
    text-transform: capitalize;
  `;

  return (
    <>
      <Helmet>
        <title>Investigo - Contactus</title>
      </Helmet>
      <Toaster />
      <Navbar />
      {/* banner */}
      <section
        className="support__banner contact__banner bg__img clear__top"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="container">
          <div className="support__banner__area">
            <div className="support__banner__inner">
              <h1 className="neutral-top">How can we help?</h1>
              <h5 className="neutral-top">Got a question?</h5>
            </div>
          </div>
        </div>
      </section>
      {/* contact over view */}
      <section className="contact__overview">
        <div className="container">
          <div className="contact__overview__area">
            <div className="row">
              <div className="col-md-6 col-xl-4">
                <div className="contact__overview__single column__space--secondary shadow__effect">
                  <img
                    src={require("../assets/images/icons/email.png")}
                    alt="email"
                  />
                  <h5>Send Us an Email</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing.</p>
                  <hr />
                  <p className="neutral-bottom">
                    <a href="mailto:example@example.com">contact@revest.com</a>
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-xl-4">
                <div className="contact__overview__single column__space--secondary shadow__effect">
                  <img
                    src={require("../assets/images/icons/phone.png")}
                    alt="Call"
                  />
                  <h5>Give Us a Call</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing.</p>
                  <hr />
                  <p className="neutral-bottom">
                    <a href="tel:+17087362094">(414) 807 - 7478</a>
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-xl-4">
                <div className="contact__overview__single shadow__effect">
                  <img
                    src={require("../assets/images/icons/chat.png")}
                    alt="Chat"
                  />
                  <h5>Chat with us</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing.</p>
                  <hr />
                  <p className="neutral-bottom">
                    <a href="#0">Open live chat</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ask question */}
      <section
        className="ask section__space bg__img"
        style={{ backgroundImage: `url(${bgImg1})` }}
      >
        <div className="container">
          <div className="ask__area">
            <div className="alert__newsletter__area">
              <div className="section__header">
                <h2 className="neutral-top">Ask a Question</h2>
              </div>
              <FormikProvider value={formik}>
                <Form onSubmit={handleSubmit}>
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
                  <div className="input input--secondary">
                    <label htmlFor="askSubject">Subject*</label>
                    <input
                      type="text"
                      name="subject"
                      id="askSubject"
                      placeholder="Write Subject"
                      {...getFieldProps("subject")}
                    />
                    <ErrorMessage name="subject" component={TextError} />
                  </div>
                  <div className="input input--secondary">
                    <label htmlFor="askMessage">Message*</label>
                    <textarea
                      name="message"
                      id="askMessage"
                      placeholder="Write Message"
                      {...getFieldProps("message")}
                    />
                    <ErrorMessage name="message" component={TextError} />
                  </div>
                  <div className="input__button">
                    <button type="submit" className="button button--effect">
                      {isSubmitting ? "Submitting..." : "Subscribe"}
                    </button>
                  </div>
                </Form>
              </FormikProvider>
            </div>
          </div>
        </div>
      </section>

      {/* faq */}
      <section className="faq section__space">
        <div className="container">
          <div className="faq__area">
            <div className="section__header">
              <h2 className="neutral-top">Frequently Asked Questions</h2>
            </div>
            <div className="faq__group">
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
                        combined with a handful of model sentence structures, to
                        generate Lorem Ipsum which looks reasonable. The
                        generated Lorem Ipsum is therefore always free from
                        repetition, injected humour, or
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
                        combined with a handful of model sentence structures, to
                        generate Lorem Ipsum which looks reasonable. The
                        generated Lorem Ipsum is therefore always free from
                        repetition, injected humour, or
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item content__space">
                  <h5 className="accordion-header" id="headingFundThree">
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
                        combined with a handful of model sentence structures, to
                        generate Lorem Ipsum which looks reasonable. The
                        generated Lorem Ipsum is therefore always free from
                        repetition, injected humour, or
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item content__space">
                  <h5 className="accordion-header" id="headingFundFour">
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
                      data-bs-target="#collapseFundFour"
                      aria-expanded="false"
                      aria-controls="collapseFundFour"
                    >
                      What happens to my investments if Revest goes into
                      bankruptcy?
                    </button>
                  </h5>
                  <div
                    id="collapseFundFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFundFour"
                    data-bs-parent="#accordionExampleFund"
                  >
                    <div className="accordion-body">
                      <p>
                        combined with a handful of model sentence structures, to
                        generate Lorem Ipsum which looks reasonable. The
                        generated Lorem Ipsum is therefore always free from
                        repetition, injected humour, or
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item content__space">
                  <h5 className="accordion-header" id="headingFundFive">
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
                      data-bs-target="#collapseFundFive"
                      aria-expanded="false"
                      aria-controls="collapseFundFive"
                    >
                      What regulations apply to Revest?
                    </button>
                  </h5>
                  <div
                    id="collapseFundFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFundFive"
                    data-bs-parent="#accordionExampleFund"
                  >
                    <div className="accordion-body">
                      <p>
                        combined with a handful of model sentence structures, to
                        generate Lorem Ipsum which looks reasonable. The
                        generated Lorem Ipsum is therefore always free from
                        repetition, injected humour, or
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item content__space">
                  <h5 className="accordion-header" id="headingFundSix">
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
                      data-bs-target="#collapseFundSix"
                      aria-expanded="false"
                      aria-controls="collapseFundSix"
                    >
                      How do I Fund investing in Revest?
                    </button>
                  </h5>
                  <div
                    id="collapseFundSix"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFundSix"
                    data-bs-parent="#accordionExampleFund"
                  >
                    <div className="accordion-body">
                      <p className="neutral-top neutral-bottom">
                        combined with a handful of model sentence structures, to
                        generate Lorem Ipsum which looks reasonable. The
                        generated Lorem Ipsum is therefore always free from
                        repetition, injected humour, or
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contactus;
