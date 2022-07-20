import React, { useCallback, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Footer, Navbar, BlogOverview, LatestBlog } from "../components";
import bgImg from "../assets/images/banner/banner-bg.png";
import { Toaster } from "react-hot-toast";
import axios from "axios";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [allContentCounts, setAllContentCounts] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchBlogs = () => {
    setLoading(true);
    axios("https://investigo-tai.herokuapp.com/blog")
      .then((res) => {
        setBlogs(res?.data?.blogs);
        setAllContentCounts(res?.data?.counts);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err?.response?.data);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <>
      <Helmet>
        <title>Investigo - Blog</title>
      </Helmet>
      <Toaster />
      <Navbar />
      {/* banner */}
      <section
        className="banner key-banner banner--secondary clear__top bg__img"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="container">
          <div className="banner__area">
            <h1 className="neutral-top">
              Blogs
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
                  Blog
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <img
          src={require("../assets/images/banner/blog__thumb.png")}
          alt="Career"
          className="banner__thumb"
        />
      </section>
      {/* blog overview section */}
      <BlogOverview blogs={blogs} loading={loading} />
      {/* latest blog section */}
      <LatestBlog
        allContentCounts={allContentCounts}
        blogs={blogs}
        loading={loading}
      />
      <Footer />
    </>
  );
};

export default Blog;
