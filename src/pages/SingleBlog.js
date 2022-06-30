import React from "react";
import { Helmet } from "react-helmet";
import { Footer, Navbar } from "../components";
import bgImg from "../assets/images/banner/blog-single-banner.png";
import bgImg1 from "../assets/images/blog/avatar-bg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const SingleBlog = () => {
  return (
    <>
      <Helmet>
        <title>Investigo - SingleBlog</title>
      </Helmet>
      <Navbar />
      {/* banner */}
      <div
        className="blog__single__banner clear__top bg__img"
        style={{ backgroundImage: `url(${bgImg})` }}
      ></div>
      <section className="blog__single__post">
        <div className="container">
          <div className="blog__single__post__content">
            <div className="blog__details__head">
              <div className="blog__item__info">
                <div className="post__date">
                  <div className="dat">
                    <img
                      src={require("../assets/images/blog/calendar.png")}
                      alt="Post Date"
                    />
                    <p>December 17, 2022</p>
                  </div>
                </div>
                <div className="post__read__time">
                  <div className="dat">
                    <img
                      src={require("../assets/images/blog/watch.png")}
                      alt="Post Read Time"
                    />
                    <p>7 Min Read</p>
                  </div>
                </div>
              </div>
              <div className="blog__social">
                <div className="social text-start text-lg-end">
                  <a href="javascript:void(0)">
                    <FontAwesomeIcon icon={faFacebookF} color="blue" />
                  </a>
                  <a href="javascript:void(0)">
                    <FontAwesomeIcon icon={faTwitter} color="blue" />
                  </a>
                  <a href="javascript:void(0)">
                    <FontAwesomeIcon icon={faInstagram} color="blue" />
                  </a>
                  <a href="javascript:void(0)">
                    <FontAwesomeIcon icon={faLinkedinIn} color="blue" />
                  </a>
                </div>
              </div>
            </div>
            <h2>Eight Tips For Launching Your Real Estate Investing Career</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              at lectus congue erat venenatis volutpat. Aenean mollis nunc at
              felis imperdiet finibus. Quisque porttitor, augue ac euismod
              lacinia, leo mauris lacinia libero, eget accumsan ipsum diam sit
              amet neque.
            </p>
            <div className="group">
              <h4>
                Real Estate Investment Loan - Invest Through Low Cost Funds
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent at lectus congue erat venenatis volutpat. Aenean mollis
                nunc at felis imperdiet finibus. Quisque porttitor, augue ac
                euismod lacinia, leo mauris lacinia libero, eget accumsan ipsum
                diam sit amet neque.
              </p>
              <ol>
                <li>
                  Penatibus non, amet sit faucibus nibh at et egestas.
                  Ullamcorper tempor volutpat
                </li>
                <li>
                  Penatibus non, amet sit faucibus nibh at et egestas.
                  Ullamcorper tempor volutpat
                </li>
                <li>
                  There are many variations of passages of Lorem Ipsum available
                </li>
                <li>
                  Many desktop publishing packages and web page editors now use
                  Lorem.
                </li>
              </ol>
            </div>
            <div className="poster">
              <img
                src={require("../assets/images/blog/single-poster.png")}
                alt="Poster"
              />
            </div>
            <div className="group">
              <h4>How to Make Better Real Estate Invest.</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent at lectus congue erat venenatis volutpat. Aenean mollis
                nunc at felis imperdiet finibus. Quisque porttitor, augue ac
                euismod lacinia, leo mauris lacinia libero, eget accumsan ipsum
                diam sit amet neque.
              </p>
              <ol>
                <li>
                  Penatibus non, amet sit faucibus nibh at et egestas.
                  Ullamcorper tempor volutpat
                </li>
                <li>
                  Penatibus non, amet sit faucibus nibh at et egestas.
                  Ullamcorper tempor volutpat
                </li>
                <li>
                  There are many variations of passages of Lorem Ipsum available
                </li>
                <li>
                  Many desktop publishing packages and web page editors now use
                  Lorem.
                </li>
              </ol>
            </div>
            <div className="group">
              <h4>
                Why Real Estate Investment Makes Better Sense Than Investing in
                Stocks
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent at lectus congue erat venenatis volutpat. Aenean mollis
                nunc at felis imperdiet finibus. Quisque porttitor, augue ac
                euismod lacinia, leo mauris lacinia libero, eget accumsan ipsum
                diam sit amet neque.
              </p>
              <div className="quot">
                <blockquote className="tertiary neutral-top neutral-bottom">
                  “Nisi quis eleifend quam adipiscing vitae aliquet bibendum
                  enim facilisis gravida neque velit euismod in pellentesque
                  massa placerat”
                </blockquote>
              </div>
            </div>
            <div className="group">
              <h4>HYIP Investments - Right Way to Earn a Million</h4>
              <p className="neutral-bottom">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent at lectus congue erat venenatis volutpat. Aenean mollis
                nunc at felis imperdiet finibus. Quisque porttitor, augue ac
                euismod lacinia, leo mauris lacinia libero, eget accumsan ipsum
                diam sit amet neque.
              </p>
            </div>
          </div>
          <div className="section__space">
            <div
              className="blog__post__author bg__img"
              style={{ backgroundImage: `url(${bgImg1})` }}
            >
              <img
                src={require("../assets/images/blog/avatar.png")}
                alt="Author"
              />
              <div>
                <h4>Fannie Simon</h4>
                <p className="cta__space">Joined Spoment on Dec 17, 2021</p>
                <div className="social text-start">
                  <a href="javascript:void(0)">
                    <FontAwesomeIcon icon={faFacebookF} color="blue" />
                  </a>
                  <a href="javascript:void(0)">
                    <FontAwesomeIcon icon={faTwitter} color="blue" />
                  </a>
                  <a href="javascript:void(0)">
                    <FontAwesomeIcon icon={faInstagram} color="blue" />
                  </a>
                  <a href="javascript:void(0)">
                    <FontAwesomeIcon icon={faLinkedinIn} color="blue" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  latest post & browse all post*/}
      <section className="latest__post__features section__space bg__img">
        <div className="container">
          <div className="latest__post__features__area wow fadeInUp">
            <div className="title__with__cta">
              <div className="row d-flex align-items-center">
                <div className="col-lg-8">
                  <h2>Latest Posts</h2>
                </div>
                <div className="col-lg-4">
                  <div className="text-start text-lg-end">
                    <a
                      href="/blog"
                      className="button button--secondary button--effect"
                    >
                      Browse All Posts
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row altr">
              <div className="col-md-6 col-xl-4">
                <div className="featured__large__post">
                  <a href="blog-single.html" className="thumbnail">
                    <img
                      src={require("../assets/images/blog/latest-one.png")}
                      alt="Poster"
                    />
                  </a>
                  <div className="blog__content">
                    <h5>
                      <a href="blog-single.html">
                        Learn the Benefits of Rental Property Investing
                      </a>
                    </h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do
                    </p>
                    <a href="blog-single.html">
                      Read More <FontAwesomeIcon icon={faArrowRightLong} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-4">
                <div className="featured__large__post">
                  <a href="blog-single.html" className="thumbnail">
                    <img
                      src={require("../assets/images/blog/latest__two.png")}
                      alt="Poster"
                    />
                  </a>
                  <div className="blog__content">
                    <h5>
                      <a href="blog-single.html">
                        A Short Guide on Rental Property Investment
                      </a>
                    </h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do
                    </p>
                    <a href="blog-single.html">
                      Read More <FontAwesomeIcon icon={faArrowRightLong} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-4">
                <div className="featured__large__post">
                  <a href="blog-single.html" className="thumbnail">
                    <img
                      src={require("../assets/images/blog/latest-three.png")}
                      alt="Poster"
                    />
                  </a>
                  <div className="blog__content">
                    <h5>
                      <a href="blog-single.html">
                        Learn the Benefits of Rental Property Investing
                      </a>
                    </h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do
                    </p>
                    <a href="blog-single.html">
                      Read More <FontAwesomeIcon icon={faArrowRightLong} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default SingleBlog;
