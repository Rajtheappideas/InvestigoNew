import React from "react";
import { Helmet } from "react-helmet";
import { Footer, Navbar } from "../components";
import bgImg from "../assets/images/banner/banner-bg.png";

const TermsAndConditions = () => {
  return (
    <>
      <Helmet>
        <title>Investigo - Terms & Conditions</title>
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
              Terms & Conditions
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
                  Terms & Conditions
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <img
          src={require("../assets/images/banner/key-illustration.png")}
          alt="Career"
          className="banner__thumb"
        />
      </section>
      {/* page info */}
      <section className="terms section__space">
        <div className="container">
          <div className="terms-area">
            <div className="terms__single">
              <h3 className="neutral-top">
                We're always looking for new ways to provide privacy for our
                customers.
              </h3>
              <p>
                Id ipsum mi tempor eget. Pretium consectetur scelerisque blandit
                habitasse non ullamcorper enim, diam quam id et, tempus massa.
                Sed nam vulputate pellentesque quis. Varius a, nunc faucibus
                proin elementum id odio auctor. Nunc, suspendisse consequat
                libero, pharetra tellus vulputate auctor venenatis tortor non
                rhoncus at duis. Pharetra ipsum mauris integer sit feugiat.
              </p>
              <ul>
                <li>
                  Blandit dignissim nulla varius tristique a sed integer ut
                  tempor.
                </li>
                <li>Augue interdum semper bibendum amet sed.</li>
                <li>Dis in at ultricies tortor sit tellus.</li>
                <li>Habitant ornare aenean maecenas pretium</li>
              </ul>
            </div>
            <hr />
            <div className="terms__single">
              <h3 className="neutral-top">
                Your data is safe with us, we will not share any information
                with external sources.
              </h3>
              <p>
                Id ipsum mi tempor eget. Pretium consectetur scelerisque blandit
                habitasse non ullamcorper enim, diam quam id et, tempus massa.
                Sed nam vulputate pellentesque quis. Varius a, nunc faucibus
                proin elementum id odio auctor. Nunc, suspendisse consequat
                libero, pharetra tellus vulputate auctor venenatis tortor non
                rhoncus at duis. Pharetra ipsum mauris integer sit feugiat.
              </p>
              <ul>
                <li>
                  Blandit dignissim nulla varius tristique a sed integer ut
                  tempor.
                </li>
                <li>Augue interdum semper bibendum amet sed.</li>
                <li>Dis in at ultricies tortor sit tellus.</li>
                <li>Habitant ornare aenean maecenas pretium</li>
              </ul>
            </div>
            <hr />
            <div className="terms__single">
              <h3 className="neutral-top">
                We're always looking for new ways to provide privacy for our
                customers.
              </h3>
              <p>
                Id ipsum mi tempor eget. Pretium consectetur scelerisque blandit
                habitasse non ullamcorper enim, diam quam id et, tempus massa.
                Sed nam vulputate pellentesque quis. Varius a, nunc faucibus
                proin elementum id odio auctor. Nunc, suspendisse consequat
                libero, pharetra tellus vulputate auctor venenatis tortor non
                rhoncus at duis. Pharetra ipsum mauris integer sit feugiat.
              </p>
              <p>
                Id ipsum mi tempor eget. Pretium consectetur scelerisque blandit
                habitasse non ullamcorper enim, diam quam id et, tempus massa.
              </p>
              &gt;
              <ul>
                <li>
                  Blandit dignissim nulla varius tristique a sed integer ut
                  tempor.
                </li>
                <li>Augue interdum semper bibendum amet sed.</li>
                <li>Dis in at ultricies tortor sit tellus.</li>
                <li>Habitant ornare aenean maecenas pretium</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default TermsAndConditions;
