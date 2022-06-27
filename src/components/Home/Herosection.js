import React from "react";
import logo from "../../assets/images/hero/hero-two-bg.png";

const Herosection = () => {
  return (
    <section
      className="hero hero--two pos__rel over__hi bg__img"
      style={{
        backgroundImage: `url(${logo})`,
      }}
    >
      <div className="container">
        <div className="hero__area">
          <div className="row">
            <div className="col-lg-7 col-xxl-6">
              <div className="hero__content">
                <h5 className="neutral-top">Smart. Simple. Accessible.</h5>
                <h1>
                  Investing Made <span>Simple</span> &amp;
                  <span>Transparent</span>
                </h1>
                <p className="primary neutral-bottom">
                  Start growing your passive income today. Invest from as low as
                  100 EUR in real estate opportunities worldwide.
                </p>
                <div className="hero__cta__group">
                  <a href="/properties" className="button button--effect">
                    Start Exploring
                  </a>
                  <a
                    href="business-loan.html"
                    className="button button--secondary button--effect"
                  >
                    Get Funding
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-xxl-6">
              <div className="hero__illustration d-none d-lg-block">
                <img
                  src={require(`../../assets/images/hero/hero-two-illustration.png`)}
                  alt="Hero Illustration"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
