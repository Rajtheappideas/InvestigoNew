import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";

const BlogOverview = () => {
  return (
    <section className="blog__overview section__space">
      <div className="container">
        <div className="blog__overview__area">
          <div className="search__bar">
            <h2>Articles &amp; Resources</h2>
            <form action="#" method="post">
              <div>
                <input
                  type="text"
                  name="post_search"
                  id="postSearch"
                  placeholder="Search for articles"
                  required="required"
                />
                <i class="fa-solid fa-magnifying-glass"></i>
              </div>
              <button type="submit" className="button">
                Search
              </button>
            </form>
          </div>
          <div className="row">
            <div className="col-lg-7">
              <div className="featured__large__post">
                <a href="/singleblog" className="thumbnail">
                  <img
                    src={require("../../assets/images/blog/big-poster.png")}
                    alt="Poster"
                  />
                </a>
                <div className="blog__content">
                  <h4>
                    <a href="/singleblog">
                      Eight Tips For Launching Your Real Estate Investing Career
                    </a>
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do
                  </p>
                  <a href="/singleblog">
                    Read More <FontAwesomeIcon icon={faArrowCircleRight} />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="featured__post">
                <div className="featured__post-single">
                  <a href="/singleblog" className="thumbnail">
                    <img
                      src={require("../../assets/images/blog/one.png")}
                      alt="Blog Post"
                    />
                  </a>
                  <div className="featured__post-single-content">
                    <h5>
                      <a href="/singleblog">
                        What Is Turn Key Real Estate Investing?
                      </a>
                    </h5>
                    <a href="/singleblog">
                      Read More <FontAwesomeIcon icon={faArrowCircleRight} />
                    </a>
                  </div>
                </div>
                <div className="featured__post-single">
                  <a href="/singleblog" className="thumbnail">
                    <img
                      src={require("../../assets/images/blog/two.png")}
                      alt="Blog Post"
                    />
                  </a>
                  <div className="featured__post-single-content">
                    <h5>
                      <a href="/singleblog">
                        Getting Started in Residential Real Estate Investing
                      </a>
                    </h5>
                    <a href="/singleblog">
                      Read More <FontAwesomeIcon icon={faArrowCircleRight} />
                    </a>
                  </div>
                </div>
                <div className="featured__post-single">
                  <a href="/singleblog" className="thumbnail">
                    <img
                      src={require("../../assets/images/blog/one.png")}
                      alt="Blog Post"
                    />
                  </a>
                  <div className="featured__post-single-content">
                    <h5>
                      <a href="/singleblog">
                        Resolving the Real Estate Investing Fear Factor
                      </a>
                    </h5>
                    <a href="/singleblog">
                      Read More <FontAwesomeIcon icon={faArrowCircleRight} />
                    </a>
                  </div>
                </div>
                <div className="featured__post-single">
                  <a href="/singleblog" className="thumbnail">
                    <img
                      src={require("../../assets/images/blog/three.png")}
                      alt="Blog Post"
                    />
                  </a>
                  <div className="featured__post-single-content">
                    <h5>
                      <a href="/singleblog">
                        How to Make Better Real Estate Investments
                      </a>
                    </h5>
                    <a href="/singleblog">
                      Read More <FontAwesomeIcon icon={faArrowCircleRight} />
                    </a>
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

export default BlogOverview;
