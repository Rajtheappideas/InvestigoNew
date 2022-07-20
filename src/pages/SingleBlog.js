import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Footer, Navbar } from "../components";
import bgImg1 from "../assets/images/blog/avatar-bg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";
import Blog from "./Blog";
import moment from "moment";

const SingleBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [blogsLoading, setBlogsLoading] = useState(false);
  const [singleBlog, setSingleBlog] = useState(null);
  const [singleBlogLoading, setSingleBlogLoading] = useState(true);

  const { id } = useParams();

  const fetchBlogs = () => {
    setBlogsLoading(true);
    axios("https://investigo-tai.herokuapp.com/blog")
      .then((res) => {
        setBlogs(res?.data?.blogs);
        setBlogsLoading(false);
      })
      .catch((err) => {
        console.log(err?.response?.data);
        setBlogsLoading(false);
      });
  };

  const fetchBlogById = () => {
    setSingleBlogLoading(true);
    axios(`https://investigo-tai.herokuapp.com/blog/${id}`)
      .then((res) => {
        setSingleBlog(res?.data?.blog);
        setSingleBlogLoading(false);
      })
      .catch((err) => {
        console.log(err?.response?.data);
        setSingleBlogLoading(false);
      });
  };

  useEffect(() => {
    fetchBlogs();
    fetchBlogById();
  }, []);
  console.log(singleBlog !== null && singleBlog?.content);
  return (
    <>
      <Helmet>
        <title>Investigo - SingleBlog</title>
      </Helmet>
      <Navbar />
      {/* banner */}
      <div
        className="blog__single__banner clear__top bg__img"
        style={{
          backgroundImage: `url(${`https://investigo-tai.herokuapp.com/${singleBlog?.image}`})`,
        }}
      ></div>
      {/* blog section */}
      {singleBlog === null ? (
        "loading"
      ) : (
        <section className="blog__single__post">
          <div className="container">
            {/* single blog section */}
            <div className="blog__single__post__content">
              <div className="blog__details__head">
                <div className="blog__item__info">
                  <div className="post__date">
                    <div className="dat">
                      <img
                        src={require("../assets/images/blog/calendar.png")}
                        alt="Post Date"
                      />
                      <p>
                        {moment(singleBlog?.date.split("T")[0]).format("LL")}
                      </p>
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
                    <a style={{ cursor: "pointer" }}>
                      <FacebookShareButton
                        url={`https://investigo-tai.herokuapp.com/${SingleBlog?._id}`}
                        hashtag="#investigoblog"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </FacebookShareButton>
                    </a>
                    <a style={{ cursor: "pointer" }}>
                      <TwitterShareButton
                        url={`https://investigo-tai.herokuapp.com/${SingleBlog?._id}`}
                        title="investigoproject"
                        // hashtags="#investigoblog"
                      >
                        <i className="fab fa-twitter"></i>
                      </TwitterShareButton>
                    </a>
                    <a style={{ cursor: "pointer" }}>
                      <TwitterShareButton
                        url={`https://investigo-tai.herokuapp.com/${SingleBlog?._id}`}
                        title="investigo blog"
                        // hashtags={("#invesigoblog", "investininvestigo")}
                        // via="investigo"
                      >
                        <i className="fab fa-instagram"></i>
                      </TwitterShareButton>
                    </a>
                    <a style={{ cursor: "pointer" }}>
                      <LinkedinShareButton
                        url={`https://investigo-tai.herokuapp.com/${SingleBlog?._id}`}
                        title="investigo blog"
                        summary="investigo projects"
                        source="invesigo Real estate"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </LinkedinShareButton>
                    </a>
                  </div>
                </div>
              </div>
              <h2>{singleBlog?.title}</h2>
              <p>{singleBlog?.description}</p>
              {/* <div className="group">
                <h4>
                  Real Estate Investment Loan - Invest Through Low Cost Funds
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent at lectus congue erat venenatis volutpat. Aenean
                  mollis nunc at felis imperdiet finibus. Quisque porttitor,
                  augue ac euismod lacinia, leo mauris lacinia libero, eget
                  accumsan ipsum diam sit amet neque.
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
                    There are many variations of passages of Lorem Ipsum
                    available
                  </li>
                  <li>
                    Many desktop publishing packages and web page editors now
                    use Lorem.
                  </li>
                </ol>
              </div>
              <div className="poster">
                <img
                  src={require("../assets/images/blog/single-poster.png")}
                  alt="Poster"
                />
              </div> */}
              <div
                className="group"
                dangerouslySetInnerHTML={{ __html: singleBlog.content }}
              >
              </div>
            </div>
            {/* blog post admin section */}
            <div className="section__space">
              <div
                className="blog__post__author bg__img"
                style={{ backgroundImage: `url(${bgImg1})` }}
              >
                <img
                  src={`https://investigo-tai.herokuapp.com/${singleBlog?.creator?.image}                          `}
                  alt={singleBlog?.creator?.title}
                />
                <div>
                  <h4>{singleBlog?.creator?.name}</h4>
                  <p className="cta__space">
                    Joined Spoment on{" "}
                    {moment(singleBlog?.date.split("T")[0]).format("LL")}
                  </p>
                  <div className="blog__social">
                    <div className="social text-start text-lg-end">
                      <a href={singleBlog?.creator?.facebook} target="_blank">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                      <a href={singleBlog?.creator?.twitter} target="_blank">
                        <i className="fa-brands fa-twitter"></i>
                      </a>
                      <a href={singleBlog?.creator?.instagram} target="_blank">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                      <a href={singleBlog?.creator?.linkedin} target="_blank">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
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
            {/* latest blogs */}
            <div className="row altr">
              {blogsLoading
                ? "loading"
                : blogs.slice(0, 3).map((blog) => (
                    <div className="col-md-6 col-xl-4" key={blog?._id}>
                      <div className="featured__large__post">
                        <a
                          href={`/singleblog/${blog?._id}`}
                          className="thumbnail"
                        >
                          <img
                            src={`https://investigo-tai.herokuapp.com/${blog?.image}                          `}
                            alt={blog?.title}
                          />
                        </a>
                        <div className="blog__content">
                          <h5>
                            <a
                              href={`/singleblog/${blog?._id}`}
                              style={{
                                lineHeight: "1.9rem",
                                height: "auto",
                                overflow: "hidden",
                                // textOverflow: "ellipsis",
                                // whiteSpace: "nowrap",
                                // width: "100%",
                              }}
                            >
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
                            <FontAwesomeIcon icon={faArrowRightLong} />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default SingleBlog;
