import React from "react";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import pagenotfound from "../assets/animations/404.json";
import Helmet from "react-helmet";

const Error404 = () => {
  // default options for lottie files
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: pagenotfound,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <Helmet>
        <title>Page 404</title>
      </Helmet>
      {/* <Lottie options={defaultOptions} height={500} width={800} /> */}
      <section
        className="error bg__img pos__rel over__hi"
        data-background="./assets/images/error-bg.png"
      >
        <div className="container">
          <div className="error__area">
            <div className="row d-flex align-items-center">
              <div className="col-lg-4">
                <div className="error__content">
                  <h1>Oops!</h1>
                  <h3>Page Not Found</h3>
                  <p className="primary">
                    We can’t seem to find the page you’re looking for
                  </p>
                  <a href="/" style={{textDecoration:"none"}} className="button button--effect button--secondary">
                    {" "}
                    Back To Home <i className="fa-solid fa-arrow-right-long" />{" "}
                  </a>
                </div>
              </div>
              <div className="col-lg-8 d-none d-lg-block">
                <div className="error__thumb thumb__ltr">
                  <img src={require("../assets/images/error.png")} alt="Error" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <button className="button button--secondary button--effect">
          Go back to Home
        </button> */}
    </>
  );
};

export default Error404;
