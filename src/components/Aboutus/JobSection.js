import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const JobSection = () => {
  return (
    <section className="open__job section__space">
      <div className="container">
        <div className="open__job__area">
          <h2 className="neutral-top">Join Us</h2>
          <div className="job__single">
            <div className="open__job__inner">
              <img
                src={require("../../assets/images/icons/sales.png")}
                alt="Sales"
              />
              <div className="open__job__info">
                <h5>
                  <a href="/careerdetails">Director of Sales</a>
                </h5>
                <ul>
                  <li>Sales</li>
                  <li>Remote</li>
                  <li>Full Time</li>
                </ul>
              </div>
            </div>
            <a href="/careerdetails" className="arrw">
              <FontAwesomeIcon icon={faAngleRight} size="lg" />
            </a>
          </div>
          <div className="job__single">
            <div className="open__job__inner">
              <img
                src={require("../../assets/images/icons/marketing.png")}
                alt="Product Marketing Lead"
              />
              <div className="open__job__info">
                <h5>
                  <a href="/careerdetails">Product Marketing Lead</a>
                </h5>
                <ul>
                  <li>Marketing</li>
                  <li>Remote</li>
                  <li>Full Time</li>
                </ul>
              </div>
            </div>
            <a href="/careerdetails" className="arrw">
              <FontAwesomeIcon icon={faAngleRight} size="lg" />
            </a>
          </div>
          <div className="job__single">
            <div className="open__job__inner">
              <img
                src={require("../../assets/images/icons/business.png")}
                alt="Business Development Representative"
              />
              <div className="open__job__info">
                <h5>
                  <a href="/careerdetails">
                    Business Development Representative
                  </a>
                </h5>
                <ul>
                  <li>Business</li>
                  <li>Remote</li>
                  <li>Full Time</li>
                </ul>
              </div>
            </div>
            <a href="/careerdetails" className="arrw">
              <FontAwesomeIcon icon={faAngleRight} size="lg" />
            </a>
          </div>
          <div className="job__single">
            <div className="open__job__inner">
              <img
                src={require("../../assets/images/icons/development.png")}
                alt="Business Development Representative"
              />
              <div className="open__job__info">
                <h5>
                  <a href="/careerdetails">
                    Business Development Representative
                  </a>
                </h5>
                <ul>
                  <li>Business</li>
                  <li>Remote</li>
                  <li>Full Time</li>
                </ul>
              </div>
            </div>
            <a href="/careerdetails" className="arrw">
              <FontAwesomeIcon icon={faAngleRight} size="lg" />
            </a>
          </div>
        </div>
        <div className="cta__btn">
          <a href="/career" className="button button--effect">
            See all open roles <FontAwesomeIcon icon={faAngleRight} size="lg" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default JobSection;
