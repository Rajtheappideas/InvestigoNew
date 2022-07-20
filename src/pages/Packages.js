import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Footer, Navbar } from "../components";
import bgImg from "../assets/images/banner/banner-two-bg.png";
import img1 from "../assets/images/property/pack-01.png";
import img2 from "../assets/images/property/pack-02.png";
import img3 from "../assets/images/property/pack-03.png";
import img4 from "../assets/images/property/pack-04.png";
import { useUserContext } from "../context/UserContext";
import axios from "axios";
import SkeletonLoadingForPackages from "../components/SkeletonLoadingForPackages";

const Packages = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(false);
  const { userData } = useUserContext();

  const fetchPackages = () => {
    setLoading(true);
    axios("https://investigo-tai.herokuapp.com/package")
      .then((res) => {
        setPackages(res?.data?.packages);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err?.response?.data);
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchPackages();
  }, []);
  const data = [
    {
      img: img1,
      title: "Hotel",
      address: "8706 Herrick Ave, Los Angeles",
      investors: "17",
      amount: "7,94,196",
      percentage: "14.56%",
      annualReturn: "7.5% + 3%",
      propertyType: "Commercial",
      distribution: "Monthly",
      maximumTerm: "26 Months",
      goal: "1,00,000",
      remainTime: "",
      price: "250",
    },
    {
      img: img2,
      title: "Mineral Exploitation",
      address: "3335 21 St, San Francisco",
      investors: "178",
      amount: "2,94,196",
      percentage: "34.56%",
      annualReturn: "3.5% + 6%",
      propertyType: "Commercial",
      remainTime: "",
      distribution: "Monthly",
      maximumTerm: "48 Months",
      goal: "1,00,000",
      price: "500",
    },
    {
      img: img3,
      title: "Agriculture",
      address: " 356 La Jolla, San Diego",
      investors: "167",
      amount: "10,94,196",
      percentage: "24.56%",
      annualReturn: "2.5% + 2%",
      propertyType: "Commercial",
      remainTime: "",
      distribution: "Monthly",
      maximumTerm: "36 Months",
      goal: "1,00,000",
      price: "1000",
    },
    {
      img: img4,
      title: "Transport",
      address: "90071, Grand Avenue, San Diego",
      investors: "134",
      amount: "3,44,196",
      percentage: "64.56%",
      annualReturn: "7.5% + 3%",
      propertyType: "Commercial",
      remainTime: "",
      distribution: "Monthly",
      maximumTerm: "36 Months",
      goal: "1,00,000",
      price: "5000",
    },
  ];
  console.log(packages);
  return (
    <>
      <Helmet>
        <title>Investigo - Packages</title>
      </Helmet>
      <Navbar />
      {/* banner */}
      <section
        className="banner__alt bg__img"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <div className="container">
          <div className="banner__alt__area neut">
            <h5>
              <span className="neutral-top">
                Invest in loans and let your money GROW!
              </span>
            </h5>
            <h1>
              <span className="neutral-top neutral-bottom">
                Invest in Business Loans
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* featured properties section */}
      <section className="featured__properties section__space">
        <div className="container">
          <div className="featured__properties__area wow fadeInUp">
            <div className="title__with__cta">
              <div className="row d-flex align-items-center">
                <div className="col-lg-8">
                  <h2>Featured Packages</h2>
                </div>
                <div className="col-lg-4">
                  <div className="text-start text-lg-end">
                    <a
                      href="/project"
                      className="button button--secondary button--effect"
                    >
                      Browse All Projects
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {loading ? (
              <div className="loadingforpackages">
              <SkeletonLoadingForPackages />
              <SkeletonLoadingForPackages />
              <SkeletonLoadingForPackages />
              <SkeletonLoadingForPackages />
              </div>
            ) : (
              packages.map((pacakge, i) => (
                <div className="property__list__wrapper" key={i}>
                  <div className="row d-flex align-items-center">
                    <div className="col-lg-5">
                      <div className="property__item__image column__space--secondary">
                        <div className="img__effect">
                          <a href={`/projectdetails/${pacakge?._id}`}>
                            <img
                              src={`https://investigo-tai.herokuapp.com/${pacakge?.image}`}
                              alt="Packages"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <div className="property__item__content">
                        <div className="item__head">
                          <div className="item__head__left">
                            {/* <p>{pacakge?.title}</p> */}
                            <h4>{pacakge?.price} €</h4>
                            {/* <p>
                            <FontAwesomeIcon icon={faLocationDot} />{" "}
                            {pacakge?.address}
                          </p> */}
                          </div>
                        </div>
                        {/* green bar & goals & investors */}
                        {/* <div className="progress__type progress__type--two">
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            aria-valuenow={25}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                        <div className="project__info">
                          <p className="project__has">
                            <span className="project__has__investors">
                              {pacakge?.investors} Investors
                            </span>{" "}
                            |{" "}
                            <span className="project__has__investors__amount">
                              <FontAwesomeIcon icon={faDollarSign} />{" "}
                              {pacakge?.amount}
                            </span>{" "}
                            <span className="project__has__investors__percent">
                              ({pacakge?.percentage})
                            </span>
                          </p>
                          <p className="project__goal">
                            <FontAwesomeIcon icon={faDollarSign} />{" "}
                            {pacakge?.goal}
                            Goal
                          </p>
                        </div>
                      </div> */}
                        <div className="item__info">
                          <div className="item__info__single">
                            <p>Annual Return</p>
                            <h6>{pacakge?.annualReturn}%</h6>
                          </div>
                          <div className="item__info__single">
                            <p>Maximum Term</p>
                            <h6>{pacakge?.term} Months</h6>
                          </div>
                          <div className="item__info__single">
                            <p>Monthly Return</p>
                            <h6>{pacakge?.monthlyReturn}%</h6>
                          </div>
                          <div className="item__info__single">
                            <p>Distribution</p>
                            <h6>Monthly</h6>
                          </div>
                        </div>
                        <div className="item__footer">
                          <div className="item__security">
                            <div className="icon__box">
                              <img
                                src={require("../assets/images/home.png")}
                                alt="Security"
                              />
                            </div>
                            <div className="item__security__content">
                              <p className="secondary">Security</p>
                              <h6>1st-Rank Mortgage</h6>
                            </div>
                          </div>
                          <div className="item__cta__group">
                            <a
                              href="/projectdetails"
                              className="button button--effect"
                            >
                              {/* Invest Now */}
                              Read More
                              <i className="fa-solid fa-arrow-right-long" />{" "}
                            </a>
                            {/* {userData ? (
                            <a
                              href="/projectdetails"
                              className="button button--effect"
                            >
                              Invest Now
                            </a>
                          ) : (
                            <a href="/signin" className="button button--effect">
                              Invest Now
                            </a>
                          )} */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Packages;
