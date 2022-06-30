import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const TeamSection = () => {
  return (
    <section className="team section__space__bottom">
      <div className="container">
        <div className="team__area wow fadeInUp">
          <div className="section__header">
            <h5 className="neutral-top">Meet Our Incredible Team</h5>
            <h2>Built by a Diverse Team With Deep Expertise in Investing</h2>
            <p className="neutral-bottom">
              We're on a mission to build a better financial system by
              empowering the individual.
            </p>
          </div>
          <div className="row">
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="team__single shadow__effect">
                <div className="team__thumb">
                  <img
                    src={require("../../assets/images/team/paul.png")}
                    alt="Paul"
                  />
                  <a href="#0">
                    <FontAwesomeIcon icon={faLinkedinIn} size="lg" color="black" />
                  </a>
                </div>
                <h5 className="neutral-top">Paul Smith</h5>
                <p className="neutral-bottom">Founder &amp; CEO</p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="team__single shadow__effect">
                <div className="team__thumb">
                  <img
                    src={require("../../assets/images/team/ryan.png")}
                    alt="Ryan Jackson"
                  />
                  <a href="#0">
                    <FontAwesomeIcon icon={faLinkedinIn} size="lg" color="black" />
                  </a>
                </div>
                <h5 className="neutral-top">Ryan Jackson</h5>
                <p className="neutral-bottom">Head of Business Operations</p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="team__single shadow__effect">
                <div className="team__thumb">
                  <img
                    src={require("../../assets/images/team/rosen.png")}
                    alt="Brittany Rosen"
                  />
                  <a href="#0">
                    <FontAwesomeIcon icon={faLinkedinIn} size="lg" color="black" />
                  </a>
                </div>
                <h5 className="neutral-top">Brittany Rosen</h5>
                <p className="neutral-bottom">VP, Finance and Strategy</p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="team__single shadow__effect">
                <div className="team__thumb">
                  <img
                    src={require("../../assets/images/team/robert.png")}
                    alt="Robert Henriks"
                  />
                  <a href="#0">
                    <FontAwesomeIcon icon={faLinkedinIn} size="lg" color="black" />
                  </a>
                </div>
                <h5 className="neutral-top">Robert Henriks</h5>
                <p className="neutral-bottom">Senior Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
