import React from "react";
import { Helmet } from "react-helmet";
import { Footer, Navbar, VideoPopup } from "../components";
import bgImg from "../assets/images/banner/banner-bg.png";

const LoyaltyProgram = () => {
  return (
    <>
      <Helmet>
        <title>Investigo - LoyaltyProgram</title>
      </Helmet>
      <Navbar />
      {/* banner */}
      <section
        className="banner key-banner banner--secondary clear__top bg__img"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="container">
          <div className="banner__area">
            <h1 className="neutral-top">LoyaltyProgram</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Pages
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  LoyaltyProgram
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <img
          src={require("../assets/images/banner/program-illustration.png")}
          alt="Career"
          class="banner__thumb"
        />
      </section>
      {/* video popup */}
      <VideoPopup />
      {/* program secction */}
      <section className="program section__space">
        <div className="container">
          <div className="program__area wow fadeInUp">
            <div className="section__header">
              <h2 className="neutral-top">Loyalty Program</h2>
              <p className="neutral-bottom">
                Revest Loyalty Program aims to reward our most active and larger
                investors, whilst at the same time encouraging investors to
                minimize risk by spreading their investments into multiple
                investment opportunities.
              </p>
            </div>
            <div className="row">
              <div className="col-sm-6 col-xl-3">
                <div className="program__single shadow__effect">
                  <div className="box">
                    <h3>
                      <span className="counterFive">10</span>%
                    </h3>
                  </div>
                  <h5>STARTER</h5>
                  <p className="neutral-bottom">
                    10% discount when participating in 25 opportunities or at
                    least €25,000 invested.
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-xl-3">
                <div className="program__single shadow__effect">
                  <div className="box">
                    <h3>
                      <span className="counterFive">20</span>%
                    </h3>
                  </div>
                  <h5>Premium</h5>
                  <p className="neutral-bottom">
                    20% discount when participating in 25 opportunities or at
                    least €25,000 invested.
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-xl-3">
                <div className="program__single shadow__effect">
                  <div className="box">
                    <h3>
                      <span className="counterFive">30</span>%
                    </h3>
                  </div>
                  <h5>Platinum</h5>
                  <p className="neutral-bottom">
                    30% discount when participating in 25 opportunities or at
                    least €25,000 invested.
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-xl-3">
                <div className="program__single shadow__effect">
                  <div className="box">
                    <h3>
                      <span className="counterFive">40</span>%
                    </h3>
                  </div>
                  <h5>Diamond</h5>
                  <p className="neutral-bottom">
                    40% discount when participating in 25 opportunities or at
                    least €25,000 invested.
                  </p>
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

export default LoyaltyProgram;
