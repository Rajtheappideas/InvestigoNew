import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const Overview = () => {
  return (
    <section className="about__overview">
      <div className="video video--secondary">
        <div className="container">
          <div className="video__area">
            <img
              src={require("../../assets/images/about-video-illustration.png")}
              alt="Video Illustration"
            />
            <div className="video__btn">
              <a
                className="video__popup"
                href="https://www.youtube.com/watch?v=LCihLrSehCo"
                target="_blank"
                title="YouTube video player"
              >
                <FontAwesomeIcon icon={faPlay} size="lg" color="blue"  />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="about__overview__area">
          <div className="section__header">
            <h5 className="neutral-top">
              Investing in real estate is now easier than buying stocks
            </h5>
            <h2>
              Make property Investing in simple, accessible and transparent
            </h2>
            <p className="neutral-bottom">
              Our mission is to empower the world to build wealth through modern
              real estate investing.
            </p>
          </div>
          <div className="portfolio__overview">
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <div className="portfolio__overview__single column__space">
                  <img
                    src={require("../../assets/images/icons/investors.png")}
                    alt="Investors"
                  />
                  <div>
                    <h2>
                      <span className="counterTwo">5678</span>
                    </h2>
                    <p>Investors</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="portfolio__overview__single column__space">
                  <img
                    src={require("../../assets/images/icons/completed.png")}
                    alt="completed"
                  />
                  <div>
                    <h2>
                      <span className="counterTwo">61316</span>
                    </h2>
                    <p>Investments Completed</p>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-4">
                <div className="portfolio__overview__single">
                  <img
                    src={require("../../assets/images/icons/annual-return.png")}
                    alt="Average Annual Return"
                  />
                  <div>
                    <h2 className="counterTwo">
                      <span className="counterTwo">10.36</span>%
                    </h2>
                    <p>Average Annual Return</p>
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

export default Overview;
