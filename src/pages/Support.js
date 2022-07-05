import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Footer, Navbar } from "../components";
import bgImg from "../assets/images/support-bg.png";
import Faq from "../components/Faq";

const Support = () => {
  const [activeButton, setActiveButton] = useState("start");
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
                  onClick={() => setActiveButton("start")}
                  className={`faq__tab__btn ${
                    activeButton == "start" && "faq__tab__btn__active"
                  }`}
                >
                  Getting Started
                </a>
                <a
                  href="#funds"
                  onClick={() => setActiveButton("funds")}
                  className={`faq__tab__btn ${
                    activeButton == "funds" && "faq__tab__btn__active"
                  }`}
                >
                  Adding Funds
                </a>
                <a
                  href="#investing"
                  onClick={() => setActiveButton("investing")}
                  className={`faq__tab__btn ${
                    activeButton == "investing" && "faq__tab__btn__active"
                  }`}
                >
                  Investing
                </a>
                <a
                  href="#security"
                  onClick={() => setActiveButton("security")}
                  className={`faq__tab__btn ${
                    activeButton == "security" && "faq__tab__btn__active"
                  }`}
                >
                  Security
                </a>
                <a
                  href="#taxes"
                  onClick={() => setActiveButton("taxes")}
                  className={`faq__tab__btn ${
                    activeButton == "taxes" && "faq__tab__btn__active"
                  }`}
                >
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
