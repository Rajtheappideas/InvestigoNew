import React from "react";
import bgimg from "../../assets/images/step/start-bg.png";

const StartStep = () => {
  return (
    <section
      className="start section__space__top bg__img"
      data-background="./assets/images/step/start-bg.png"
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      <div className="container">
        <div className="start__area wow fadeInUp">
          <div className="section__header">
            <h5 className="neutral-top">We're changing the way you invest.</h5>
            <h2>It's Easy to Get Started.</h2>
            <p className="neutral-bottom">
              Signing up with Revest is simple and only takes a few minutes. We
              can automatically connect with more than 3,500 banks, so no
              complicated paperwork is required to fund your account.
            </p>
          </div>
          <div className="row">
            <div className="col-md-6 col-xl-4">
              <div className="start__single__item column__space--secondary">
                <div className="img__box">
                  <img
                    src={require("../../assets/images/step/browse.png")}
                    alt="Browse Properties"
                  />
                  <div className="step__count">
                    <h4>01</h4>
                  </div>
                </div>
                <h4>Browse Properties</h4>
                <p className="neutral-bottom">
                  Select a property that fits your goal from our huge variety of
                  hand-picked properties.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="start__single__item column__space--secondary">
                <div className="img__box arrow__container">
                  <img
                    src={require("../../assets/images/step/invest.png")}
                    alt="View Details & Invest"
                  />
                  <div className="step__count">
                    <h4>02</h4>
                  </div>
                </div>
                <h4>View Details &amp; Invest</h4>
                <p className="neutral-bottom">
                  View detailed metrics for that property like Rental Yield,
                  etc. and invest like institutions.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="start__single__item">
                <div className="img__box">
                  <img
                    src={require("../../assets/images/step/earn.png")}
                    alt="Earn and Track"
                  />
                  <div className="step__count">
                    <h4>03</h4>
                  </div>
                </div>
                <h4>Earn and Track</h4>
                <p className="neutral-bottom">
                  You have full visibility into the performance of your
                  investment. Track your total current.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartStep;
