import React from "react";
import { Helmet } from "react-helmet";
import { Footer, Market, Navbar } from "../components";
import Faq from "../components/Faq";
import bgImg from "../assets/images/hero/list-bg.png";
import bgImg3 from "../assets/images/testimonial/dot-map.png";
import bgImg1 from "../assets/images/testimonial/quote.png";
import Slider from "react-slick";


const ListYourProgram = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "red" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "green" }}
        onClick={onClick}
      />
    );
  }
  var settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      <Helmet>
        <title>investigo - List Your Property</title>
      </Helmet>
      <Navbar />
      {/* hero section */}
      <section
        className="hero hero--two hero--three hero__list clear__top pos__rel over__hi bg__img"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="container">
          <div className="hero__area">
            <div className="row">
              <div className="col-lg-8">
                <div className="hero__content">
                  <h5 className="neutral-top">
                    List Your Property and sell instantly
                  </h5>
                  <h1>Sell your property, Online &amp; hassle-free</h1>
                  <p className="primary neutral-bottom">
                    Receiving rent from a commercial property and now want to
                    sell it instantly? List your property and convert the lakhs
                    of annual rent you are receiving into Crores by selling to
                    5000+ real estate investors on Revest.
                  </p>
                  <div className="hero__cta__group">
                    <a
                      href="/signup"
                      className="button button--secondary button--effect"
                    >
                      List Your Property
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* list overview section */}
      <section className="list__overview">
        <div className="container">
          <div className="list__overview__area">
            <div className="row">
              <div className="col-sm-6 col-lg-4">
                <div className="list__overview__single shadow__effect">
                  <img
                    src={require("../assets/images/icons/successs.png")}
                    alt="Success"
                  />
                  <h3>
                    <span className="counterFour">1000</span>+
                  </h3>
                  <p className="neutral-bottom">
                    Successful High-Value Transactions
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="list__overview__single shadow__effect">
                  <img
                    src={require("../assets/images/icons/served.png")}
                    alt="served"
                  />
                  <h3>
                    <span className="counterFour">5000</span>+
                  </h3>
                  <p className="neutral-bottom">Number of clients served</p>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="list__overview__single shadow__effect">
                  <img
                    src={require("../assets/images/icons/exp.png")}
                    alt="experience"
                  />
                  <h3>
                    <span className="counterFour">45</span> Year+
                  </h3>
                  <p className="neutral-bottom">
                    Real estate investment experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* number section */}
      <section className="numbers numbers__two section__space__bottom">
        <div className="container">
          <div className="numbers__area wow fadeInUp">
            <div className="row d-flex align-items-center">
              <div className="col-lg-6">
                <div className="content column__space">
                  <h5 className="neutral-top">Your success is our success.</h5>
                  <h2>Why sell through Revest?</h2>
                  <p>
                    Revest enables real estate owners to sell their properties
                    through its platform. Submit your property quickly and
                    easily!
                  </p>
                  <p>
                    <a href="/contactus">Let us know about your property</a>
                  </p>
                  <a href="/signin" className="button button--effect">
                    Submit Your Property
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row d-flex align-items-start align-items-lg-center">
                  <div className="col-sm-6">
                    <div className="numbers__single shadow__effect">
                      <img
                        src={require("../assets/images/icons/attractive.png")}
                        alt="Attractive"
                      />
                      <h5>Attractive conditions</h5>
                      <p className="neutral-bottom">
                        With us you sell your property without paying a
                        brokerage commission.
                      </p>
                    </div>
                    <div className="numbers__single shadow__effect">
                      <img
                        src={require("../assets/images/icons/fast.png")}
                        alt="Fast"
                      />
                      <h5>Fast processing</h5>
                      <p className="neutral-bottom">
                        Receive an initial offer and a property assessment
                        within 48 hours.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="numbers__single alt shadow__effect">
                      <img
                        src={require("../assets/images/icons/innovation.png")}
                        alt="Innovation"
                      />
                      <h5>Innovation</h5>
                      <p className="neutral-bottom">
                        Sell your property online through an innovative business
                        model.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* how to work section */}
      <section
        className="work__two section__space bg__img"
        data-background="./assets/images/gd-bg.png"
      >
        <div className="container">
          <div className="work__two__area wow fadeInUp">
            <div className="section__header">
              <h5 className="neutral-top">How it works</h5>
              <h2>It's Easy to Get Started.</h2>
              <p className="neutral-bottom">
                Submit your property quickly and easily!
              </p>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <div className="work__two__single">
                  <div className="ico">
                    <h4>1</h4>
                  </div>
                  <h4>Fill out the online form</h4>
                  <p className="neutral-bottom">
                    Answer a few questions and attach a summary file to help us
                    evaluate your property.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="work__two__single">
                  <div className="ico">
                    <h4>2</h4>
                  </div>
                  <h4>Analysis of the property</h4>
                  <p className="neutral-bottom">
                    Answer a few questions and attach a summary file to help us
                    evaluate your property.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="work__two__single">
                  <div className="ico">
                    <h4>3</h4>
                  </div>
                  <h4>Receive a first offer</h4>
                  <p className="neutral-bottom">
                    Answer a few questions and attach a summary file to help us
                    evaluate your property.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* faq */}
      <Faq />
      {/* testomonial */}
      <section
        className="testimonial testimonial--two section__space pos__rel over__hi bg__img"
        style={{ backgroundImage: `url(${bgImg3})` }}
      >
        <div className="container">
          <div className="testimonial__area">
            <div className="section__header">
              <h5 className="neutral-top">Investors Trust Us</h5>
              <h2>Trusted by Over 40,000 Worldwide Customer since 2022</h2>
              <p className="neutral-bottom">
                We divide each property into shares so anyone can get started.
                Kindly check out our Investors say about revest.
              </p>
            </div>
            <Slider {...settings}>
              <div className="testimonial__item__wrapper">
                <div className="testimonial__support">
                  <div
                    className="testimonial__item bg__img"
                    style={{ backgroundImage: `url(${bgImg1})` }}
                  >
                    <div className="testimonial__author__ratings">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                    </div>
                    <p className="tertiary">
                      Very trustworthy and clearly platform to invest in real
                      state. Safe investment with monthly payouts. Really
                      recommended!
                    </p>
                    <div className="testimonial__author">
                      <div className="testimonial__author__info">
                        <div className="avatar__wrapper">
                          <img
                            src={require("../assets/images/testimonial/avatar.png")}
                            alt="Allan Murphy"
                          />
                        </div>
                        <div>
                          <h5>Allan Murphy</h5>
                          <p className="neutral-bottom">United States</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial__item__wrapper">
                <div className="testimonial__support">
                  <div
                    className="testimonial__item bg__img"
                    style={{ backgroundImage: `url(${bgImg1})` }}
                  >
                    <div className="testimonial__author__ratings">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                    </div>
                    <p className="tertiary">
                      Very trustworthy and clearly platform to invest in real
                      state. Safe investment with monthly payouts. Really
                      recommended!
                    </p>
                    <div className="testimonial__author">
                      <div className="testimonial__author__info">
                        <div className="avatar__wrapper">
                          <img
                            src={require("../assets/images/testimonial/avatar.png")}
                            alt="Allan Murphy"
                          />
                        </div>
                        <div>
                          <h5>Allan Murphy</h5>
                          <p className="neutral-bottom">United States</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial__item__wrapper">
                <div className="testimonial__support">
                  <div
                    className="testimonial__item bg__img"
                    style={{ backgroundImage: `url(${bgImg1})` }}
                  >
                    <div className="testimonial__author__ratings">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                    </div>
                    <p className="tertiary">
                      Very trustworthy and clearly platform to invest in real
                      state. Safe investment with monthly payouts. Really
                      recommended!
                    </p>
                    <div className="testimonial__author">
                      <div className="testimonial__author__info">
                        <div className="avatar__wrapper">
                          <img
                            src={require("../assets/images/testimonial/avatar.png")}
                            alt="Allan Murphy"
                          />
                        </div>
                        <div>
                          <h5>Allan Murphy</h5>
                          <p className="neutral-bottom">United States</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial__item__wrapper">
                <div className="testimonial__support">
                  <div
                    className="testimonial__item bg__img"
                    style={{ backgroundImage: `url(${bgImg1})` }}
                  >
                    <div className="testimonial__author__ratings">
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                    </div>
                    <p className="tertiary">
                      Very trustworthy and clearly platform to invest in real
                      state. Safe investment with monthly payouts. Really
                      recommended!
                    </p>
                    <div className="testimonial__author">
                      <div className="testimonial__author__info">
                        <div className="avatar__wrapper">
                          <img
                            src={require("../assets/images/testimonial/avatar.png")}
                            alt="Allan Murphy"
                          />
                        </div>
                        <div>
                          <h5>Allan Murphy</h5>
                          <p className="neutral-bottom">United States</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
      {/* market */}
      <Market />
      <Footer />
    </>
  );
};

export default ListYourProgram;
