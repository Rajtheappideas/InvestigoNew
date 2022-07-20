import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import "../assets/scss/layout/_header.scss";
import { useUserContext } from "../context/UserContext";
import useUserdata from "../hooks/useUserData";
import { Toaster } from "react-hot-toast";
import axios from "axios";

const Navbar = () => {
  const { userData } = useUserContext();
  const { handleLogout } = useUserdata();
  const [projects, setProjects] = useState([]);

  const fetchProjects = () => {
    axios("https://investigo-tai.herokuapp.com/project")
      .then((res) => setProjects(res?.data?.projects))
      .catch((err) => console.log(err?.response?.data));
  };
  useEffect(() => {
    fetchProjects();
  }, []);
  return (
    <header className="header">
      <Toaster />
      <nav className="navbar navbar-expand-xl">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Logo" className="logo" />
          </a>
          <div className="navbar__out order-2 order-xl-3">
            {userData !== null ? (
              <div className="nav__group__btn">
                <a
                  href=""
                  className="button button--effect d-none d-sm-block"
                  onClick={() => handleLogout()}
                >
                  Log out
                </a>
              </div>
            ) : (
              <div className="nav__group__btn">
                <a href="/signin" className="log d-none d-sm-block">
                  {" "}
                  Log In{" "}
                </a>
                <a
                  href="/signup"
                  className="button button--effect d-none d-sm-block"
                >
                  {" "}
                  Join Now <FontAwesomeIcon icon={faRightLong} size="lg" />
                </a>
              </div>
            )}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#primaryNav"
              aria-controls="primaryNav"
              aria-expanded="false"
              aria-label="Toggle Primary Nav"
            >
              <span className="icon-bar top-bar" />
              <span className="icon-bar middle-bar" />
              <span className="icon-bar bottom-bar" />
            </button>
          </div>
          <div
            className="collapse navbar-collapse order-3 order-xl-2"
            id="primaryNav"
          >
            <ul className="navbar-nav">
              {/* home */}
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              {/* about */}
              <li className="nav-item">
                <a className="nav-link" href="/aboutus">
                  About us
                </a>
              </li>
              {/* packges */}
              <li className="nav-item">
                <a className="nav-link" href="/packages">
                  Packages
                </a>
              </li>
              {/* projects */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href=""
                  id="navbarPropertyDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Projects
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarPropertyDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="/project">
                      All
                    </a>
                  </li>
                  {projects.map((title) => (
                      <li key={title._id}>
                        <a
                          className="dropdown-item"
                          href={`/projectdetails/${title?._id}`}
                        >
                          {title.title}
                        </a>
                      </li>
                  ))}
                </ul>
              </li>
              {/* more */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href=""
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/dashboard">
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/howitsworks">
                      How It Works
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/benefits">
                      My Benefits
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/blog">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/career">
                      Career
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/loyalityprogram">
                      Loyality Program
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/termsandconditions">
                      Terms Conditions
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/privacypolicy">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/cookiepolicy">
                      Cookie Policy
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/support">
                      Support
                    </a>
                  </li>
                </ul>
              </li>
              {/* contact */}
              <li className="nav-item">
                <a className="nav-link" href="/contactus">
                  Contact
                </a>
              </li>
              {userData !== null ? (
                <li className="nav-item d-block d-sm-none">
                  <a
                    onClick={() => handleLogout()}
                    style={{ cursor: "pointer" }}
                    className="nav-link"
                  >
                    Log out
                  </a>
                </li>
              ) : (
                <>
                  {/* login */}

                  <li className="nav-item d-block d-sm-none">
                    <a href="/signin" className="nav-link">
                      Log In
                    </a>
                  </li>
                  {/* signup */}
                  <li className="nav-item d-block d-sm-none">
                    <a
                      href="/signup"
                      className="button button--effect button--last"
                    >
                      Join Now <i className="fa-solid fa-arrow-right-long" />
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
