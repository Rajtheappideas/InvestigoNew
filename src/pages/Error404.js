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
    <div className="text-center py-10">
      <Helmet>
        <title>Page 404</title>
      </Helmet>
      <Lottie options={defaultOptions} height={500} width={800} />
      <Link to="/">
        <button className="button button--secondary button--effect">
          Go back to Home
        </button>
      </Link>
    </div>
  );
};

export default Error404;
