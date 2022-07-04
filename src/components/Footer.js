import React from "react";
import fimage1 from "../assets/images/footer/footer__left__circle.png";
import fimage2 from "../assets/images/footer/footer__right__circle.png";
import fimage3 from "../assets/images/footer/footer__home___illustration.png";
import logo from "../assets/images/logo-light.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import '.././assets/scss/layout/_footer.scss'

const Footer = () => {
  return (
    <footer className="footer pos__rel over__hi">
      <div className="container">
        <div className="footer__newsletter">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6">
              <div className="footer__newsletter__content column__space">
                <h3>
                  <span style={{color:"white"}}>Subscribe for updates</span>
                </h3>
                <p>
                  Stay on top of the latest blog posts, news and announcements
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-xxl-5 offset-xxl-1">
              <div className="footer__newsletter__form">
                <form action="#" method="post">
                  <div className="footer__newsletter__input__group">
                    <div className="input">
                      <input
                        type="email"
                        name="news__letter"
                        id="newsLetterMail"
                        placeholder="Enter Your Email"
                        required="required"
                      />
                    </div>
                    <button type="submit" className="button button--effect">
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__area section__space">
          <div className="row">
            {/* first div */}
            <div className="col-md-12 col-lg-4 col-xl-4">
              <div className="footer__intro">
                <a href="/">
                  <img src={logo} alt="Revest" className="logo" />
                </a>
                <p>
                  Revest is a platform offering anyone the ability to invest and
                  potentially earn money from property at the click of a button
                </p>
                <div className="social">
                  <a href="javascript:void(0)">
                    <FontAwesomeIcon icon={faFacebookF} color="white" />
                  </a>
                  <a href="javascript:void(0)">
                    <FontAwesomeIcon icon={faTwitter} color="white" />
                  </a>
                  <a href="javascript:void(0)">
                    <FontAwesomeIcon icon={faInstagram} color="white" />
                  </a>
                  <a href="javascript:void(0)">
                    <FontAwesomeIcon icon={faLinkedinIn} color="white" />
                  </a>
                </div>
              </div>
            </div>
            {/* second div / company */}
            <div className="col-sm-6 col-md-3 col-lg-2 col-xl-2">
              <div className="footer__links footer__links--alt">
                <h5>Company</h5>
                <ul>
                  <li>
                    <a href="/aboutus">About Us</a>
                  </li>
                  <li>
                    <a href="/career">Careers</a>
                  </li>
                  <li>
                    <a href="/blog">Blog</a>
                  </li>
                  <li>
                    <a href="/contactus">Contact Us</a>
                  </li>
                  <li className="neutral-bottom">
                    <a href="/affiliateprogram">Affiliate</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* third div / invest*/}
            <div className="col-sm-6 col-md-3 col-lg-2 col-xl-2">
              <div className="footer__links footer__links--alt">
                <h5>Invest</h5>
                <ul>
                  <li>
                    <a href="/properties">Browse Properties</a>
                  </li>
                  <li>
                    <a href="/howitsworks">How it works</a>
                  </li>
                  <li>
                    <a href="/loanapplication">Loan Application </a>
                  </li>
                  <li>
                    <a href="/propertyalert">Property Alerts</a>
                  </li>
                  <li className="neutral-bottom">
                    <a href="/support">FAQs</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* fourth div / insights */}
            <div className="col-sm-6 col-md-3 col-lg-2 col-xl-2">
              <div className="footer__links footer__links--alt--two">
                <h5>Insights</h5>
                <ul>
                  <li>
                    <a href="/support">Help Center</a>
                  </li>
                  <li>
                    <a href="/listyourproperty">List Your Property</a>
                  </li>
                  <li className="neutral-bottom">
                    <a href="/loyalityprogram">Loyality program </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* fifth div / legal */}
            <div className="col-sm-6 col-md-3 col-lg-2 col-xl-2">
              <div className="footer__links">
                <h5>Legal</h5>
                <ul>
                  <li>
                    <a href="/privacypolicy">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="/termsandconditions">Term &amp; Conditions</a>
                  </li>
                  <li>
                    <a href="/cookiepolicy">Cookie Policy</a>
                  </li>
                  <li className="neutral-bottom">
                    <a href="/keyrisks">Key Risks</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* credit div */}
        <div className="footer__credit">
          <div className="row d-flex align-items-center">
            <div className="col-sm-9 order-1 order-sm-0">
              <div className="footer__copyright">
                <p>
                  Copyright © All right reserved by{" "}
                  <a href="/">Investigo</a>
                </p>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="footer__language">
                <select className="language-select">
                  <option value="english">En</option>
                  <option value="australia">Aus</option>
                  <option value="brazil">Bra</option>
                  <option value="argentina">Arg</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* animation div */}
      <div className="footer__animation">
        <img src={fimage1} alt="Circle" className="left__circle" />
        <img src={fimage2} alt="Circle" className="right__circle" />
        <img src={fimage3} alt="Home" className="home__illustration" />
      </div>
    </footer>
  );
};

export default Footer;
