import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleRight,
  faArrowCircleLeft,
} from "@fortawesome/free-solid-svg-icons";

const LatestBlog = () => {
  return (
    <section className="latest__post section__space">
      <div className="container">
        <div className="latest__post__area">
          <div className="row">
            <div className="col-xl-8">
              <div className="left__wrap">
                <div className="filter__bar">
                  <h3>Latest Posts</h3>
                  <div className="filter__bar__tabs">
                    <a
                      href="javascript:void(0)"
                      className="filter__bar__tab button button--effect"
                      data-target="all"
                    >
                      All
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="filter__bar__tab button button--effect button--secondary"
                      data-target="articles"
                    >
                      Articles
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="filter__bar__tab button button--effect button--secondary"
                      data-target="news"
                    >
                      News
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="filter__bar__tab button button--effect button--secondary"
                      data-target="resources"
                    >
                      Resources
                    </a>
                  </div>
                </div>
                <div className="row latest__blog__shuffle__list">
                  <div
                    className="col-md-12 latest__blog__item"
                    data-groups='["all","resources"]'
                  >
                    <div className="featured__large__post">
                      <a href="/singleblog" className="thumbnail">
                        <img
                          src={require("../../assets/images/blog/latest-one.png")}
                          alt="Poster"
                        />
                      </a>
                      <div className="blog__content">
                        <h5>
                          <a href="/singleblog">
                            Learn the Benefits of Rental Property Investing
                          </a>
                        </h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do
                        </p>
                        <a href="/singleblog">
                          Read More{" "}
                          <FontAwesomeIcon icon={faArrowCircleRight} />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-12 latest__blog__item "
                    data-groups='["all","news"]'
                  >
                    <div className="featured__large__post">
                      <a href="/singleblog" className="thumbnail">
                        <img
                          src={require("../../assets/images/blog/latest__two.png")}
                          alt="Poster"
                        />
                      </a>
                      <div className="blog__content">
                        <h5>
                          <a href="/singleblog">
                            A Short Guide on Rental Property Investment
                          </a>
                        </h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do
                        </p>
                        <a href="/singleblog">
                          Read More{" "}
                          <FontAwesomeIcon icon={faArrowCircleRight} />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-12 latest__blog__item"
                    data-groups='["all","articles"]'
                  >
                    <div className="featured__large__post">
                      <a href="/singleblog" className="thumbnail">
                        <img
                          src={require("../../assets/images/blog/latest-three.png")}
                          alt="Poster"
                        />
                      </a>
                      <div className="blog__content">
                        <h5>
                          <a href="/singleblog">
                            Getting Started in Residential Real Estate Investing
                          </a>
                        </h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do
                        </p>
                        <a href="/singleblog">
                          Read More{" "}
                          <FontAwesomeIcon icon={faArrowCircleRight} />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-12 latest__blog__item"
                    data-groups='["all","news"]'
                  >
                    <div className="featured__large__post">
                      <a href="/singleblog" className="thumbnail">
                        <img
                          src={require("../../assets/images/blog/latest-four.png")}
                          alt="Poster"
                        />
                      </a>
                      <div className="blog__content">
                        <h5>
                          <a href="/singleblog">
                            Five Key Principles to Real Estate Investment{" "}
                          </a>
                        </h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do
                        </p>
                        <a href="/singleblog">
                          Read More{" "}
                          <FontAwesomeIcon icon={faArrowCircleRight} />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-12 latest__blog__item"
                    data-groups='["all","resources"]'
                  >
                    <div className="featured__large__post">
                      <a href="/singleblog" className="thumbnail">
                        <img
                          src={require("../../assets/images/blog/latest__five.png")}
                          alt="Poster"
                        />
                      </a>
                      <div className="blog__content">
                        <h5>
                          <a href="/singleblog">
                            Tips For Commercial Real Estate Investment{" "}
                          </a>
                        </h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do
                        </p>
                        <a href="/singleblog">
                          Read More{" "}
                          <FontAwesomeIcon icon={faArrowCircleRight} />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-12 latest__blog__item"
                    data-groups='["all","articles"]'
                  >
                    <div className="featured__large__post">
                      <a href="/singleblog" className="thumbnail">
                        <img
                          src={require("../../assets/images/blog/latest-six.png")}
                          alt="Poster"
                        />
                      </a>
                      <div className="blog__content">
                        <h5>
                          <a href="/singleblog">
                            How to Choose Real Estate Investment Property
                          </a>
                        </h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do
                        </p>
                        <a href="/singleblog">
                          Read More{" "}
                          <FontAwesomeIcon icon={faArrowCircleRight} />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-12 latest__blog__item"
                    data-groups='["all","resources"]'
                  >
                    <div className="featured__large__post">
                      <a href="/singleblog" className="thumbnail">
                        <img
                          src={require("../../assets/images/blog/latest-three.png")}
                          alt="Poster"
                        />
                      </a>
                      <div className="blog__content">
                        <h5>
                          <a href="/singleblog">
                            How to Choose Real Estate Investment Property
                          </a>
                        </h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do
                        </p>
                        <a href="/singleblog">
                          Read More{" "}
                          <FontAwesomeIcon icon={faArrowCircleRight} />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-12 latest__blog__item"
                    data-groups='["all","news"]'
                  >
                    <div className="featured__large__post">
                      <a href="/singleblog" className="thumbnail">
                        <img
                          src={require("../../assets/images/blog/latest-eight.png")}
                          alt="Poster"
                        />
                      </a>
                      <div className="blog__content">
                        <h5>
                          <a href="/singleblog">
                            How to Choose Real Estate Investment Property
                          </a>
                        </h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do
                        </p>
                        <a href="/singleblog">
                          Read More{" "}
                          <FontAwesomeIcon icon={faArrowCircleRight} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-center">
                    <li className="page-item">
                      <a className="page-link" href="/singleblog">
                        <FontAwesomeIcon icon={faArrowCircleLeft} />
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="/singleblog">
                        01
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="/singleblog">
                        02
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="/singleblog">
                        03
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="/singleblog">
                        <FontAwesomeIcon icon={faArrowCircleRight} />
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="right__wrap">
                <div className="blog__newsletter">
                  <img
                    src={require("../../assets/images/blog/newsletter.png")}
                    alt="Newsletter"
                  />
                  <h4>Subscribe to our newsletter</h4>
                  <p>
                    Lorem ipsum dolor sit amet dolor consectetur adipiscing elit
                  </p>
                  <form action="#" method="post">
                    <div className="input">
                      <input
                        type="email"
                        name="sub_email"
                        id="subEmail"
                        placeholder="Enter Your Email"
                      />
                    </div>
                    <button type="submit" className="button button--effect">
                      Subscribe
                    </button>
                  </form>
                </div>
                <div className="blog__popular">
                  <h5 className="neutral-top">Popular Articles</h5>
                  <div className="blog__popular__single">
                    <a href="/singleblog" className="thumbnail">
                      <img
                        src={require("../../assets/images/blog/popular-one.png")}
                        alt="Popular One"
                      />
                    </a>
                    <div className="blog__popular__single-content">
                      <h6>
                        <a href="/singleblog">
                          3-Step Rental Property Investing Strategy{" "}
                        </a>
                      </h6>
                      <a href="/singleblog">
                        Read More <FontAwesomeIcon icon={faArrowCircleRight} />
                      </a>
                    </div>
                  </div>
                  <div className="blog__popular__single">
                    <a href="/singleblog" className="thumbnail">
                      <img
                        src={require("../../assets/images/blog/popular-two.png")}
                        alt="Popular One"
                      />
                    </a>
                    <div className="blog__popular__single-content">
                      <h6>
                        <a href="/singleblog">
                          Learn the Benefits of Rental Property Investing
                        </a>
                      </h6>
                      <a href="/singleblog">
                        Read More <FontAwesomeIcon icon={faArrowCircleRight} />
                      </a>
                    </div>
                  </div>
                  <div className="blog__popular__single">
                    <a href="/singleblog" className="thumbnail">
                      <img
                        src={require("../../assets/images/blog/popular-one.png")}
                        alt="Popular One"
                      />
                    </a>
                    <div className="blog__popular__single-content">
                      <h6>
                        <a href="/singleblog">
                          A Short Guide on Rental Property Investment{" "}
                        </a>
                      </h6>
                      <a href="/singleblog">
                        Read More <FontAwesomeIcon icon={faArrowCircleRight} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="blog__popular">
                  <h5 className="neutral-top">Read More</h5>
                  <div className="blog__popular__single">
                    <div className="categories">
                      <h6>
                        <a href="/singleblog">– Exited projects</a>
                      </h6>
                      <h6>
                        <a href="/singleblog">(07)</a>
                      </h6>
                    </div>
                  </div>
                  <div className="blog__popular__single">
                    <div className="categories">
                      <h6>
                        <a href="/singleblog">– How to</a>
                      </h6>
                      <h6>
                        <a href="/singleblog">(04)</a>
                      </h6>
                    </div>
                  </div>
                  <div className="blog__popular__single">
                    <div className="categories">
                      <h6>
                        <a href="/singleblog">– Insider updates</a>
                      </h6>
                      <h6>
                        <a href="/singleblog">(09)</a>
                      </h6>
                    </div>
                  </div>
                  <div className="blog__popular__single">
                    <div className="categories">
                      <h6>
                        <a href="/singleblog">– News</a>
                      </h6>
                      <h6>
                        <a href="/singleblog">(23)</a>
                      </h6>
                    </div>
                  </div>
                  <div className="blog__popular__single">
                    <div className="categories">
                      <h6>
                        <a href="/singleblog">– Tips and tricks</a>
                      </h6>
                      <h6>
                        <a href="/singleblog">(16)</a>
                      </h6>
                    </div>
                  </div>
                  <div className="blog__popular__single">
                    <div className="categories">
                      <h6>
                        <a href="/singleblog">– Get inspired</a>
                      </h6>
                      <h6>
                        <a href="/singleblog">(13)</a>
                      </h6>
                    </div>
                  </div>
                  <div className="blog__popular__single">
                    <div className="categories">
                      <h6>
                        <a href="/singleblog">– Invesments</a>
                      </h6>
                      <h6>
                        <a href="/singleblog">(22)</a>
                      </h6>
                    </div>
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

export default LatestBlog;
