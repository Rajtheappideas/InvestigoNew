import React from "react";
import { Helmet } from "react-helmet";
import { Footer, Navbar } from "../components";
import bgImg from "../assets/images/support-bg.png";
import Faq from "../components/Faq";

const Support = () => {
  return (
    <>
      <Helmet>
        <title>Investigo - Support</title>
      </Helmet>
      <Navbar />
      {/* banner */}
      <section
        className="support__banner bg__img clear__top"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="container">
          <div className="support__banner__area">
            <div className="support__banner__inner">
              <h1 className="neutral-top">How can we help?</h1>
              <div className="input input--secondary">
                <input
                  type="text"
                  name="sear"
                  id="sear_faq"
                  placeholder="Search"
                />
              </div>
              <div className="faq__tab">
                <a
                  href="#start"
                  className="faq__tab__btn faq__tab__btn__active"
                >
                  Getting Started
                </a>
                <a href="#funds" className="faq__tab__btn">
                  Adding Funds
                </a>
                <a href="#investing" className="faq__tab__btn">
                  Investing
                </a>
                <a href="#security" className="faq__tab__btn">
                  Security
                </a>
                <a href="#taxes" className="faq__tab__btn">
                  Taxes
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* faqs */}
      <Faq />
      <Footer />
    </>
  );
};

export default Support;
