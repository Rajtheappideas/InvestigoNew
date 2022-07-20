import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightLong,
  faBarsStaggered,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import useUserdata from "../../hooks/useUserData";

const Invesment = ({
  setShowDashboard,
  setShowAccount,
  setShowOrders,
  setShowInvestment,
  setShowWithdraw,
  showDashboard,
  showAccount,
  showOrders,
  showInvestment,
  showWithdraw,
}) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const { handleLogout } = useUserdata();
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Investigo - Invesment</title>
      </Helmet>
      <div className="dashboard section__space__bottom">
        <div className="container">
          <div className="dashboard__area">
            <div className="row">
              {showSidebar && (
                <div className="col-xxl-3">
                  <div
                    className={`sidebar ${
                      showSidebar ? "sidebar__active" : "close__active"
                    } `}
                  >
                    <a
                      onClick={() => setShowSidebar(false)}
                      className="close__sidebar"
                      style={{ cursor: "pointer" }}
                    >
                      <FontAwesomeIcon icon={faXmark} color="black" size="lg" />
                    </a>
                    <div className="sidenav__wrapper">
                      <ul>
                        <li
                          onClick={() => {
                            setShowDashboard(true);
                            setShowAccount(false);
                            setShowInvestment(false);
                            setShowWithdraw(false);
                            setShowOrders(false);
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          <a
                            href="/dashboard"
                            className={`${showDashboard && "sidenav__active"}`}
                          >
                            <img
                              src={require("../../assets/images/icons/dashboard.png")}
                              alt="Dashboard"
                            />{" "}
                            Dashboard
                          </a>
                        </li>
                        <li
                          onClick={() => {
                            setShowDashboard(false);
                            setShowAccount(false);
                            setShowInvestment(true);
                            setShowWithdraw(false);
                            setShowOrders(false);
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          <a
                            className={`${showInvestment && "sidenav__active"}`}
                          >
                            <img
                              src={require("../../assets/images/icons/investments.png")}
                              alt="Investments"
                            />
                            Investments
                          </a>
                        </li>
                        <li
                          onClick={() => {
                            setShowDashboard(false);
                            setShowAccount(false);
                            setShowInvestment(false);
                            setShowWithdraw(false);
                            setShowOrders(true);
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          <a className={`${showOrders && "sidenav__active"}`}>
                            <img
                              src={require("../../assets/images/icons/transactions.png")}
                              alt="Transactions"
                            />
                            Orders
                          </a>
                        </li>
                        <li
                          onClick={() => {
                            setShowDashboard(false);
                            setShowAccount(false);
                            setShowInvestment(false);
                            setShowWithdraw(true);
                            setShowOrders(false);
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          <a className={`${showWithdraw && "sidenav__active"}`}>
                            <img
                              src={require("../../assets/images/icons/withdraw.png")}
                              alt="Withdraw"
                            />{" "}
                            Withdraw
                          </a>
                        </li>
                        <li
                          onClick={() => {
                            setShowDashboard(false);
                            setShowAccount(true);
                            setShowInvestment(false);
                            setShowWithdraw(false);
                            setShowOrders(false);
                          }}
                          style={{ cursor: "pointer" }}
                        >
                          <a
                            className={`${showAccount && "sidenav__active"}`}
                          >
                            <img
                              src={require("../../assets/images/icons/account.png")}
                              alt="Account"
                            />{" "}
                            Account
                          </a>
                        </li>
                      </ul>
                      <hr />
                      <ul className="logout">
                        <li>
                          <a
                            style={{ cursor: "pointer" }}
                            onClick={handleLogout}
                          >
                            <img
                              src={require("../../assets/images/icons/logout.png")}
                              alt="Logout"
                            />{" "}
                            Logout
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="sidenav__wrapper sidenav__footer">
                      <h6>Last Login</h6>
                      <hr />
                      <div className="sidenav__time">
                        <p className="secondary">
                          <img
                            src={require("../../assets/images/icons/calendar.png")}
                            alt="Calendar"
                          />
                          02.01.2022
                        </p>
                        <p className="secondary">15:48:13</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div className="col-xxl-9">
                <div className="main__content">
                  <div className="collapse__sidebar">
                    <h4>Dashboard</h4>
                    <a
                      // href="javascript:void(0)"
                      onClick={() => setShowSidebar(true)}
                      className="collapse__sidebar__btn"
                      style={{ cursor: "pointer" }}
                    >
                      <FontAwesomeIcon
                        icon={faBarsStaggered}
                        color="white "
                        size="lg"
                      />
                    </a>
                  </div>
                  <div className="main__content-dashboard">
                    <div className="breadcrumb-dashboard">
                      <h5>Investments</h5>
                      <div>
                        <a href="/">Home</a>
                        <FontAwesomeIcon icon={faArrowRightLong} />
                        <a href="javascript:void(0)">Investments</a>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="investment-table">
                          <div className="intro">
                            <h5>New Investments</h5>
                          </div>
                        </div>
                        <div className="dashboard-single__box pt-5">
                          <div className="new-invest">
                            <div className="poster">
                              <a href="/properties">
                                <img
                                  src={require("../../assets/images/project-about-01.png")}
                                  alt="San Francisco"
                                />
                              </a>
                            </div>
                            <div className="invest-content">
                              <div className="item__head__left">
                                <h6>Real Estate</h6>
                                <div className="progress__type progress__type--two">
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
                                      <span>20-06-2022 | </span>
                                      <span className="project__has__investors">
                                        Classic
                                      </span>{" "}
                                      |{" "}
                                      <span className="project__has__investors__amount">
                                        250{" "}
                                        <FontAwesomeIcon icon="fa-solid fa-euro-sign" />
                                      </span>{" "}
                                      |{" "}
                                      <span className="project__has__investors__percent">
                                        {" "}
                                        5% Monthly
                                      </span>
                                      <span> | 20-06-2023</span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="new-invest">
                            <div className="poster">
                              <a href="/properties">
                                <img
                                  src={require("../../assets/images/project-about-03.png")}
                                  alt="San Francisco"
                                />
                              </a>
                            </div>
                            <div className="invest-content">
                              <div className="item__head__left">
                                <h6>Transport</h6>
                                <div className="progress__type progress__type--two">
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
                                      <span>20-06-2022 | </span>
                                      <span className="project__has__investors">
                                        Elite
                                      </span>{" "}
                                      |{" "}
                                      <span className="project__has__investors__amount">
                                        500{" "}
                                        <FontAwesomeIcon icon="fa-solid fa-euro-sign" />
                                      </span>{" "}
                                      |{" "}
                                      <span className="project__has__investors__percent">
                                        {" "}
                                        4% Monthly
                                      </span>
                                      <span> | 20-06-2023</span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="new-invest">
                            <div className="poster">
                              <a href="/properties">
                                <img
                                  src={require("../../assets/images/project-about-04.png")}
                                  alt="San Francisco"
                                />
                              </a>
                            </div>
                            <div className="invest-content">
                              <div className="item__head__left">
                                <h6>Agriculture</h6>
                                <div className="progress__type progress__type--two">
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
                                      <span>20-06-2022 | </span>
                                      <span className="project__has__investors">
                                        Premium
                                      </span>{" "}
                                      |{" "}
                                      <span className="project__has__investors__amount">
                                        5000{" "}
                                        <FontAwesomeIcon icon="fa-solid fa-euro-sign" />
                                      </span>{" "}
                                      |{" "}
                                      <span className="project__has__investors__percent">
                                        {" "}
                                        3% Monthly
                                      </span>
                                      <span> | 20-01-2023</span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="dashboard-single__box investment-single-box">
                      <div className="intro">
                        <h5 className="investo">Investment Chart</h5>
                        <a href="#">Generate Report</a>
                      </div>
                      <div id="investmentChartTwo" />
                      <BarChart
                        width={730}
                        className="pt-5"
                        height={250}
                        data={data}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="pv" fill="#8884d8" />
                      </BarChart>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Invesment;
