import React from "react";
import bgimg from "../../assets/images/banner/banner-bg.png";

const Banner = () => {
  return (
    <section
      className="banner clear__top bg__img"
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      <div className="container">
        <div className="banner__area">
          <h1 className="neutral-top">About Us</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Pages
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                About Us
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Banner;
