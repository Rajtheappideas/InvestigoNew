import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const DashboardFooter = () => {
  return (
    <footer className="footer dashboard-footer pos__rel over__hi">
      <div className="container">
        <div className="footer__area section__space">
          <div className="row">
            <div className="col-md-12 col-lg-4 col-xl-4">
              <div className="footer__intro">
                <a href="/">
                  <img
                    src={require("../../assets/images/logo.png")}
                    alt="Revest"
                    className="logo"
                  />
                </a>
                <p>
                  <FontAwesomeIcon icon={faLocationDot} />
                  1134 W Hubbard St. Floor 3, Chicago, IL, 60642, USA
                </p>
                <p>
                  <FontAwesomeIcon icon={faPhone} />
                  (814) 277-4833
                </p>
                <p>
                  <FontAwesomeIcon icon={faEnvelope} />
                  support@revest.com
                </p>
              </div>
            </div>
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

                  <li className="neutral-bottom">
                    <a href="/support">FAQs</a>
                  </li>
                </ul>
              </div>
            </div>
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
        <div className="footer__credit">
          <div className="row d-flex align-items-center">
            <div className="col-md-8">
              <div className="footer__copyright">
                <p>
                  Copyright © All right reserved by <a href="/">Investigo</a>
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="social">
                <a style={{ cursor: "pointer" }}>
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a style={{ cursor: "pointer" }}>
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a style={{ cursor: "pointer" }}>
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a style={{ cursor: "pointer" }}>
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default DashboardFooter;
