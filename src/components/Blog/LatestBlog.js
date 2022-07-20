import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleRight,
  faArrowCircleLeft,
} from "@fortawesome/free-solid-svg-icons";
import { toast, Toaster } from "react-hot-toast";
import axios from "axios";

const LatestBlog = ({ allContentCounts, blogs, loading }) => {
  const [email, setEmail] = useState("");
  const [newsletterLoading, setNewsletterLoading] = useState(false);
  const [showArticles, setshowArticles] = useState(false);
  const [showResources, setShowResources] = useState(false);
  const [showNews, setShowNews] = useState(false);

  const handleNewsletter = () => {
    if (email === "") {
      toast.error("Oops you forgot to enter email!!", {
        duration: 2000,
        style: {
          width: "500px",
          background: "black",
          color: "white",
          fontSize: "large",
        },
        position: "top-center",
      });
      return false;
    }
    const data = {
      email,
    };
    setNewsletterLoading(true);
    axios
      .post("https://investigo-tai.herokuapp.com/newsletter", data)
      .then((res) => {
        if (res?.data?.status === "success") {
          toast.success(res?.data?.message, {
            duration: 2000,
            style: {
              width: "500px",
              background: "black",
              color: "white",
              fontSize: "large",
            },
            position: "top-center",
          });
          setNewsletterLoading(false);
          setEmail("");
        }
      })
      .catch((err) => {
        if (err?.response?.data?.status === "fail") {
          toast.error(err?.response?.data?.message, {
            duration: 2000,
            style: {
              width: "500px",
              background: "black",
              color: "white",
              fontSize: "large",
            },
            position: "top-center",
          });
          setNewsletterLoading(false);
          setEmail("");
        }
      });
  };
  return (
    <>
      <Toaster />
      <section className="latest__post section__space">
        <div className="container">
          <div className="latest__post__area">
            <div className="row" id="filter">
              <div className="col-xl-8">
                <div className="left__wrap">
                  <div className="filter__bar">
                    <h3>Latest Posts</h3>
                    {/* filter */}
                    <div className="filter__bar__tabs">
                      <a
                        style={{ cursor: "pointer" }}
                        className={`filter__bar__tab button button--effect ${
                          (showArticles || showNews || showResources) &&
                          "button--secondary"
                        } `}
                        data-target="all"
                        onClick={() => {
                          setShowNews(false);
                          setShowResources(false);
                          setshowArticles(false);
                        }}
                      >
                        All
                      </a>
                      <a
                        style={{ cursor: "pointer" }}
                        className={`filter__bar__tab button button--effect ${
                          !showArticles && "button--secondary"
                        } `}
                        data-target="articles"
                        onClick={() => {
                          setShowNews(false);
                          setShowResources(false);
                          setshowArticles(true);
                        }}
                      >
                        Articles
                      </a>
                      <a
                        style={{ cursor: "pointer" }}
                        className={`filter__bar__tab button button--effect ${
                          !showNews && "button--secondary"
                        } `}
                        data-target="news"
                        onClick={() => {
                          setShowNews(true);
                          setShowResources(false);
                          setshowArticles(false);
                        }}
                      >
                        News
                      </a>
                      <a
                        style={{ cursor: "pointer" }}
                        className={`filter__bar__tab button button--effect ${
                          !showResources && "button--secondary"
                        } `}
                        data-target="resources"
                        onClick={() => {
                          setShowNews(false);
                          setShowResources(true);
                          setshowArticles(false);
                        }}
                      >
                        Resources
                      </a>
                    </div>
                  </div>
                  {/* blogs */}
                  <div className="row latest__blog__shuffle__list">
                    {loading
                      ? "loading..."
                      : (!showArticles &&
                          !showNews &&
                          !showResources &&
                          blogs.slice(0, 6).map((blog) => (
                            <div
                              className="col-md-12 latest__blog__item"
                              key={blog?._id}
                            >
                              <div className="featured__large__post">
                                <a
                                  href={`/singleblog/${blog?._id}`}
                                  className="thumbnail"
                                >
                                  <img
                                    src={`https://investigo-tai.herokuapp.com/${blogs[0].image}                          `}
                                    alt={blog?.title}
                                  />
                                </a>
                                <div className="blog__content">
                                  <h5>
                                    <a href={`/singleblog/${blog?._id}`}>
                                      {blog?.title}
                                    </a>
                                  </h5>
                                  <p
                                    style={{
                                      lineHeight: "1.5rem",
                                      height: "3rem",
                                      overflow: "hidden",
                                    }}
                                  >
                                    {blog?.description}
                                  </p>
                                  <a href={`/singleblog/${blog?._id}`}>
                                    Read More{" "}
                                    <FontAwesomeIcon
                                      icon={faArrowCircleRight}
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          ))) ||
                        (showArticles &&
                          blogs
                            .filter((blog) => blog?.category == "Articals")
                            .slice(0, 3)
                            .map((blog) => (
                              <div
                                className="col-md-12 latest__blog__item"
                                key={blog?._id}
                              >
                                <div className="featured__large__post">
                                  <a
                                    href={`/singleblog/${blog?._id}`}
                                    className="thumbnail"
                                  >
                                    <img
                                      src={`https://investigo-tai.herokuapp.com/${blogs[0].image}                          `}
                                      alt={blog?.title}
                                    />
                                  </a>
                                  <div className="blog__content">
                                    <h5>
                                      <a href={`/singleblog/${blog?._id}`}>
                                        {blog?.title}
                                      </a>
                                    </h5>
                                    <p
                                      style={{
                                        lineHeight: "1.5rem",
                                        height: "3rem",
                                        overflow: "hidden",
                                      }}
                                    >
                                      {blog?.description}
                                    </p>
                                    <a href={`/singleblog/${blog?._id}`}>
                                      Read More{" "}
                                      <FontAwesomeIcon
                                        icon={faArrowCircleRight}
                                      />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            ))) ||
                        (showNews &&
                          blogs
                            .filter((blog) => blog?.category == "News")
                            .slice(0, 3)
                            .map((blog) => (
                              <div
                                className="col-md-12 latest__blog__item"
                                key={blog?._id}
                              >
                                <div className="featured__large__post">
                                  <a
                                    href={`/singleblog/${blog?._id}`}
                                    className="thumbnail"
                                  >
                                    <img
                                      src={`https://investigo-tai.herokuapp.com/${blogs[0].image}                          `}
                                      alt={blog?.title}
                                    />
                                  </a>
                                  <div className="blog__content">
                                    <h5>
                                      <a href={`/singleblog/${blog?._id}`}>
                                        {blog?.title}
                                      </a>
                                    </h5>
                                    <p
                                      style={{
                                        lineHeight: "1.5rem",
                                        height: "3rem",
                                        overflow: "hidden",
                                      }}
                                    >
                                      {blog?.description}
                                    </p>
                                    <a href={`/singleblog/${blog?._id}`}>
                                      Read More{" "}
                                      <FontAwesomeIcon
                                        icon={faArrowCircleRight}
                                      />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            ))) ||
                        (showResources &&
                          blogs
                            .filter((blog) => blog?.category == "Resources")
                            .slice(0, 3)
                            .map((blog) => (
                              <div
                                className="col-md-12 latest__blog__item"
                                key={blog?._id}
                              >
                                <div className="featured__large__post">
                                  <a
                                    href={`/singleblog/${blog?._id}`}
                                    className="thumbnail"
                                  >
                                    <img
                                      src={`https://investigo-tai.herokuapp.com/${blogs[0].image}                          `}
                                      alt={blog?.title}
                                    />
                                  </a>
                                  <div className="blog__content">
                                    <h5>
                                      <a href={`/singleblog/${blog?._id}`}>
                                        {blog?.title}
                                      </a>
                                    </h5>
                                    <p
                                      style={{
                                        lineHeight: "1.5rem",
                                        height: "3rem",
                                        overflow: "hidden",
                                      }}
                                    >
                                      {blog?.description}
                                    </p>
                                    <a href={`/singleblog/${blog?._id}`}>
                                      Read More{" "}
                                      <FontAwesomeIcon
                                        icon={faArrowCircleRight}
                                      />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            )))}
                  </div>
                  {/* pagination */}
                  <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                      <li className="page-item">
                        <a className="page-link" href={`#`}>
                          <FontAwesomeIcon icon={faArrowCircleLeft} />
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href={`#`}>
                          01
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href={`#`}>
                          02
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href={`#`}>
                          03
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href={`#`}>
                          <FontAwesomeIcon icon={faArrowCircleRight} />
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              {/* right side component */}
              <div className="col-xl-4">
                <div className="right__wrap">
                  <div className="blog__newsletter">
                    <img
                      src={require("../../assets/images/blog/newsletter.png")}
                      alt="Newsletter"
                    />
                    <h4>Subscribe to our newsletter</h4>
                    <p>
                      Lorem ipsum dolor sit amet dolor consectetur adipiscing
                      elit
                    </p>
                    <div>
                      <div className="input">
                        <input
                          type="email"
                          name="sub_email"
                          id="subEmail"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter Your Email"
                        />
                      </div>
                      <button
                        type="submit"
                        onClick={() => handleNewsletter()}
                        className="button button--effect"
                      >
                        {newsletterLoading ? "Submitting..." : "Subscribe"}
                      </button>
                    </div>
                  </div>
                  {/* articals blogs */}
                  <div className="blog__popular">
                    <h5 className="neutral-top">Popular Articles</h5>
                    {blogs
                      .filter((blog) => blog?.category == "Articals")
                      .slice(0, 3)
                      .map((blog) => (
                        <div className="blog__popular__single" key={blog?._id}>
                          <a
                            href={`/singleblog/${blog?._id}`}
                            className="thumbnail"
                          >
                            <img
                              src={`https://investigo-tai.herokuapp.com/${blog?.image}                          `}
                              alt={blog?.title}
                            />
                          </a>
                          <div className="blog__popular__single-content">
                            <h6>
                              <a href={`/singleblog/${blog?._id}`}>
                                {blog?.title}
                              </a>
                            </h6>
                            <a href={`/singleblog/${blog?._id}`}>
                              Read More{" "}
                              <FontAwesomeIcon icon={faArrowCircleRight} />
                            </a>
                          </div>
                        </div>
                      ))}
                  </div>
                  {/* read more totals of blog */}
                  <div className="blog__popular">
                    <h5 className="neutral-top">Read More</h5>

                    <div className="blog__popular__single">
                      <div className="categories">
                        <h6>
                          <a
                            href="#filter"
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              setShowNews(false);
                              setShowResources(false);
                              setshowArticles(true);
                            }}
                          >
                            – Articles
                          </a>
                        </h6>
                        <h6>
                          <a
                            href="#filter"
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              setShowNews(false);
                              setShowResources(false);
                              setshowArticles(true);
                            }}
                          >
                            ({allContentCounts?.Articals})
                          </a>
                        </h6>
                      </div>
                    </div>
                    <div className="blog__popular__single">
                      <div className="categories">
                        <h6>
                          <a
                            href="#filter"
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              setShowNews(false);
                              setShowResources(true);
                              setshowArticles(false);
                            }}
                          >
                            – Resources
                          </a>
                        </h6>
                        <h6>
                          <a
                            href="#filter"
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              setShowNews(false);
                              setShowResources(true);
                              setshowArticles(false);
                            }}
                          >
                            ({allContentCounts?.Resources})
                          </a>
                        </h6>
                      </div>
                    </div>
                    <div className="blog__popular__single">
                      <div className="categories">
                        <h6>
                          <a
                            href="#filter"
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              setShowNews(true);
                              setShowResources(false);
                              setshowArticles(false);
                            }}
                          >
                            – News
                          </a>
                        </h6>
                        <h6>
                          <a
                            href="#filter"
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              setShowNews(true);
                              setShowResources(false);
                              setshowArticles(false);
                            }}
                          >
                            ({allContentCounts?.News})
                          </a>
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
    </>
  );
};

export default LatestBlog;
