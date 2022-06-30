import React from "react";
import { Helmet } from "react-helmet";
import { Footer, Navbar, BlogOverview, LatestBlog } from "../components";
import bgImg from "../assets/images/banner/banner-bg.png";

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Investigo - Blog</title>
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
          class="banner__thumb"
        />
      </section>
      {/* blog overview section */}
      <BlogOverview />
      {/* latest blog section */}
      <LatestBlog />
      <Footer />
    </>
  );
};

export default Blog;
