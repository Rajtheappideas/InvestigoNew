import React from "react";
import { Helmet } from "react-helmet";
import { Community, Footer, Navbar, VideoPopup } from "../components";
import bgImg from "../assets/images/testimonial/dot-map.png";
import bgImg1 from "../assets/images/testimonial/quote.png";
import Slider from "react-slick";

const HowitsWorks = () => {
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
        <title>Investigo - How It Works</title>
      </Helmet>
      <Navbar />
      {/* banner */}
      <section
        className="banner key-banner banner--secondary clear__top bg__img"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="container">
          <div className="banner__area">
            <h1 className="neutral-top">
              How It Works
              {/* <span>Privacy Policy</span> */}
            </h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Pages
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  How It Works
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      {/* video section */}
      <VideoPopup />
      {/* start step section */}
      <section className="section__space">
        <div className="container">
          <div className="start__area">
            <div className="row">
              <div className="col-md-6 col-xl-4">
                <div className="start__single__item column__space--secondary">
                  <div className="img__box">
                    <img
                      src={require("../assets/images/step/browse.png")}
                      alt="Browse Properties"
                    />
                    <div className="step__count">
                      <h4>01</h4>
                    </div>
                  </div>
                  <h4>Browse Properties</h4>
                  <p className="neutral-bottom">
                    Select a property that fits your goal from our huge variety
                    of hand-picked properties.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-xl-4">
                <div className="start__single__item column__space--secondary">
                  <div className="img__box arrow__container">
                    <img
                      src={require("../assets/images/step/invest.png")}
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
                      src={require("../assets/images/step/earn.png")}
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
      {/* community */}
      <Community />
      {/* testimonial */}
      <section
        className="testimonial testimonial--two section__space pos__rel over__hi bg__img"
        style={{ backgroundImage: `url(${bgImg})` }}
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
                <div className="testimonial__support" style={{ zIndex: 1 }}>
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

      <Footer />
    </>
  );
};

export default HowitsWorks;
