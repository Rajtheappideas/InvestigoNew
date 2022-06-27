import React from "react";

const ProfitOverview = () => {
  return (
    <section className="profit section__space">
      <div className="container">
        <div className="profit__area wow fadeInUp">
          <div className="section__header">
            <h5 className="neutral-top">
              Built to help smart investors invest smarter
            </h5>
            <h2>
              We handle the heavy lifting so you can sit back, relax, and
              profit.
            </h2>
            <p className="neutral-bottom">
              We make institutional quality real estate accessible to investors,
              in a simple and transparent way.
            </p>
          </div>
          <div className="profit__item__wrapper">
            <div className="row">
              <div className="col-md-6">
                <div className="profit__single__item alt shadow__effect">
                  <div className="img__box">
                    <img
                      src={require("../../assets/images/overview/passive-income.png")}
                      alt="Passive Income"
                    />
                  </div>
                  <div className="item__content">
                    <h4>Passive Income</h4>
                    <p>Earn rental income and receive deposits quarterly</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="profit__single__item shadow__effect">
                  <div className="img__box">
                    <img
                      src={require("../../assets/images/overview/secure.png")}
                      alt="secure"
                    />
                  </div>
                  <div className="item__content">
                    <h4>Secure &amp; Cost-efficient</h4>
                    <p>
                      Digital security is legally compliant and tangible for
                      qualified investors
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="profit__item__wrapper">
            <div className="row">
              <div className="col-md-6">
                <div className="profit__single__item alt shadow__effect">
                  <div className="img__box">
                    <img
                      src={require("../../assets/images/overview/transparency.png")}
                      alt="Transparency"
                    />
                  </div>
                  <div className="item__content">
                    <h4>Transparency</h4>
                    <p>
                      Easily consult the full documentation for each property.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="profit__single__item shadow__effect">
                  <div className="img__box">
                    <img
                      src={require("../../assets/images/overview/support.png")}
                      alt="Support"
                    />
                  </div>
                  <div className="item__content">
                    <h4>Support</h4>
                    <p>Earn rental income and receive deposits quarterly</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfitOverview;
