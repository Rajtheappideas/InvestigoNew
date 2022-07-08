import React from "react";

const Number = () => {
  return (
    <section
      className="numbers section__space bg__img"
      data-background="./assets/images/globe.png"
    >
      <div className="container">
        <div className="numbers__area wow fadeInUp">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6">
              <div className="content column__space">
                <h5 className="neutral-top">With Revest anyone can invest!</h5>
                <h2>Numbers Said More Than Words</h2>
                <p>
                  our low minimums give you the flexibility to invest the right
                  amount, at the right time, to meet your goals.
                </p>
                <a href="/project" className="button button--effect">
                  Start Exploring
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row d-flex align-items-start align-items-lg-center">
                <div className="col-sm-6">
                  <div className="numbers__single shadow__effect">
                    <img
                      src={require("../../assets/images/platforms.png")}
                      alt="platform"
                    />
                    <h3>
                      <span className="counter">3000</span>+
                    </h3>
                    <p className="neutral-bottom">Investors Using Platform</p>
                  </div>
                  <div className="numbers__single shadow__effect__secondary">
                    <img
                      src={require("../../assets/images/returns.png")}
                      alt="Returns"
                    />
                    <h3>
                      <span className="counter">18</span>%
                    </h3>
                    <p className="neutral-bottom">Returns upto</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="numbers__single alt shadow__effect__secondary">
                    <img
                      src={require("../../assets/images/experience.png")}
                      alt="Experience"
                    />
                    <h3 className="counter">45</h3>
                    <p className="neutral-bottom">Years Experience</p>
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

export default Number;
