import React from "react";
import { Helmet } from "react-helmet";
import { Footer, Market, Navbar } from "../components";
import bgImg from "../assets/images/banner/program-bg.png";
import bgImg1 from "../assets/images/step-two-bg.png";
import bgImg2 from "../assets/images/testimonial/quote.png";
import bgImg3 from "../assets/images/testimonial/dot-map.png";
import Slider from "react-slick";

const AffiliateProgram = () => {
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
        <title>investigo - Affiliate Program</title>
      </Helmet>
      <Navbar />
      {/* banner */}
      <section
        className="banner key-banner banner--secondary clear__top bg__img"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="container">
          <div className="banner__area">
            <h1 className="neutral-top">Affiliate Program</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Pages
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Affiliate Program
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <img
          src={require("../assets/images/banner/affi-thumb.png")}
          alt="Career"
          className="banner__thumb"
        />
      </section>
      {/* market */}
      <section className="market market__two section__space over__hi">
        <div className="container">
          <div className="market__area">
            <div className="row d-flex align-items-center">
              <div className="col-lg-6 col-xl-5">
                <div className="market__thumb thumb__rtl column__space d-none d-lg-block">
                  <img
                    src={require("../assets/images/affiliate-illustration.png")}
                    alt="Affiliate Program"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-xl-6 offset-xl-1">
                <div className="content">
                  <h5 className="neutral-top">Earn Money</h5>
                  <h2>Affiliate Program</h2>
                  <p>
                    Earn commission from every revest new user you help to
                    bring.Join our affiliate program, refer your audience, and
                    earn revenue.
                  </p>
                  <a href="/signup" className="button button--effect">
                    Join As a Affiliate
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* step up two section */}
      <section
        className="step__two section__space__top bg__img"
        style={{ backgroundImage: `url(${bgImg1})` }}
      >
        <div className="container">
          <div className="step__two-area wow fadeInUp">
            <div className="section__header">
              <h5 className="neutral-top">How the program Works</h5>
              <h2>Start to make money in 3 easy steps</h2>
            </div>
            <div className="row">
              <div className="col-sm-6 col-lg-4">
                <div className="step__two__single shadow__effect">
                  <img
                    src={require("../assets/images/icons/join.png")}
                    alt="Join"
                  />
                  <h4>Join</h4>
                  <p className="neutral-bottom">
                    It’s free to get started. Access marketing materials, tools,
                    and more!
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="step__two__single shadow__effect">
                  <img
                    src={require("../assets/images/icons/promote.png")}
                    alt="Promote"
                  />
                  <h4>Promote</h4>
                  <p className="neutral-bottom">
                    Share with your target audience. There’s a match for every
                    need
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="step__two__single shadow__effect">
                  <img
                    src={require("../assets/images/icons/earn.png")}
                    alt="Earn"
                  />
                  <h4>Earn</h4>
                  <p className="neutral-bottom">
                    Rake in the moment your traffic converts. Check our
                    commission plans
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ==== video popup section start ==== */}
        <div className="video video__two section__space__top">
          <div className="container">
            <div className="video__area">
              <img
                src={require("../assets/images/video-illustration.png")}
                alt="Video Illustration"
              />
              <div className="video__btn">
                <a
                  className="video__popup"
                  href="https://www.youtube.com/watch?v=LCihLrSehCo"
                  target="_blank"
                  title="YouTube video player"
                >
                  <i className="fa-solid fa-play" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* ==== #video popup section end ==== */}
      </section>
      {/* number */}
      <section className="program section__space">
        <div className="container">
          <div className="program__area wow fadeInUp">
            <div className="section__header">
              <h2 className="neutral-top">Affiliate Program</h2>
              <p className="neutral-bottom">
                Investigo Affiliate Program aims to reward our most active and
                larger investors, whilst at the same time encouraging investors
                to minimize risk by spreading their investments into multiple
                investment opportunities.
              </p>
            </div>
            <div className="row">
              <div className="col-sm-6 col-xl-3">
                <div className="program__single shadow__effect">
                  <div className="box">
                    <h3>
                      <span className="counterFive">2.0</span>%
                    </h3>
                  </div>
                  <h5>Classic</h5>
                  <p className="neutral-bottom">
                    Earn 2.5% commission on any first purchase you refer.
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-xl-3">
                <div className="program__single shadow__effect">
                  <div className="box">
                    <h3>
                      <span className="counterFive">4</span>%
                    </h3>
                  </div>
                  <h5>Elite</h5>
                  <p className="neutral-bottom">
                    Earn 5% commission on any first purchase you refer.
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-xl-3">
                <div className="program__single shadow__effect">
                  <div className="box">
                    <h3>
                      <span className="counterFive">5</span>%
                    </h3>
                  </div>
                  <h5>Premium</h5>
                  <p className="neutral-bottom">
                    Earn 7% commission on any first purchase you refer.
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-xl-3">
                <div className="program__single shadow__effect">
                  <div className="box">
                    <h3>
                      <span className="counterFive">7</span>%
                    </h3>
                  </div>
                  <h5>Ulimate</h5>
                  <p className="neutral-bottom">
                    Earn 10% commission on any first purchase you refer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Market />

      <Footer />
    </>
  );
};

export default AffiliateProgram;
