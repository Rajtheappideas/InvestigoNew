import React from "react";
import bgImg from "../../assets/images/light-two.png";

const Market = () => {
  return (
    <section className="market market--two market--three section__space__bottom">
      <div className="container">
        <div
          className="market__area market__area--two section__space bg__img"
          data-background="./assets/images/light-two.png"
          style={{ backgroundImage: `url(${bgImg})` }}
        >
          <div className="row d-flex align-items-center">
            <div className="col-lg-6">
              <div className="content">
                <h5 className="neutral-top">
                  Real exposure to the real estate market
                </h5>
                <h2>You Invest. Revest Does the Rest</h2>
                <p>
                  Transparent Real Estate Investing Through Revest.Join us and
                  experience a smarter,better way to invest in real estate
                </p>
                <a href="properties.html" className="button button--effect">
                  Start Exploring
                </a>
                <img
                  src={require("../../assets/images/arrow.png")}
                  alt="Go to"
                />
              </div>
            </div>
          </div>
          <img
            src={require("../../assets/images/market-two-illustration.png")}
            alt="Explore the Market"
            className="d-none d-lg-block market__two__thumb"
          />
        </div>
        <div className="market__features">
          <div className="row">
            <div className="col-md-6 col-xl-4">
              <div className="market__features__single shadow__effect__secondary">
                <img
                  src={require("../../assets/images/icons/gain.png")}
                  alt="Gain Instant"
                />
                <h4>Gain Instant</h4>
                <p className="neutral-bottom">
                  Revest performs deep due diligence on sponsors, giving
                  investors peace of mind.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="market__features__single market__features__single--alt shadow__effect">
                <img
                  src={require("../../assets/images/icons/noticed.png")}
                  alt="Get noticed"
                />
                <h4>Get Noticed</h4>
                <p className="neutral-bottom">
                  REVEST VERIFIED sponsor profiles are available to accredited
                  real estate investment investors.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="market__features__single alt shadow__effect__secondary">
                <img
                  src={require("../../assets/images/icons/focus.png")}
                  alt="Focus on Deals"
                />
                <h4>Focus on Deals</h4>
                <p className="neutral-bottom">
                  Spend less time smiling, reaserching and dialing and more time
                  doing what you love.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Market;
