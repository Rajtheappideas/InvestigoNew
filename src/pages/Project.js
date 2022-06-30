import React from "react";
import { Helmet } from "react-helmet";
import { Filter, Footer, Navbar, Properties } from "../components";
import bgImg from "../assets/images/banner/banner-two-bg.png";

const Project = () => {
  return (
    <>
      <Helmet>
        <title>Investigo - Project</title>
      </Helmet>
      <Navbar />
      {/* banner */}
      <section
        className="banner__alt bg__img"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="container">
          <div className="banner__alt__area">
            <h1 className="neutral-top neutral-bottom">
              <span>Browse Properties</span>
            </h1>
          </div>
        </div>
      </section>
      <Filter />
      <Properties />
      <Footer />
    </>
  );
};

export default Project;
