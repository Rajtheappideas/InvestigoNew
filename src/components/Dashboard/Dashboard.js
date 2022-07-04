import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightLong,
  faBarsStaggered,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet";

const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      <Helmet>
        <title>Ivnestigo - Dashboard</title>
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
                      href="javascript:void(0)"
                      onClick={() => setShowSidebar(false)}
                      className="close__sidebar"
                      style={{ cursor: "pointer" }}
                    >
                      <FontAwesomeIcon icon={faXmark} color="black" size="lg" />
                    </a>
                    <div className="sidenav__wrapper">
                      <ul>
                        <li>
                          <a href="/dashboard" className="sidenav__active">
                            <img
                              src={require("../../assets/images/icons/dashboard.png")}
                              alt="Dashboard"
                            />{" "}
                            Dashboard
                          </a>
                        </li>
                        <li>
                          <a href="/investment">
                            <img
                              src={require("../../assets/images/icons/investments.png")}
                              alt="Investments"
                            />
                            Investments
                          </a>
                        </li>
                        <li>
                          <a href="/transaction">
                            <img
                              src={require("../../assets/images/icons/transactions.png")}
                              alt="Transactions"
                            />
                            Orders
                          </a>
                        </li>
                        <li>
                          <a href="/withdraw">
                            <img
                              src={require("../../assets/images/icons/withdraw.png")}
                              alt="Withdraw"
                            />{" "}
                            Withdraw
                          </a>
                        </li>
                        <li>
                          <a href="/account">
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
                          <a href="/signin">
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
                  <div className="breadcrumb-dashboard">
                    <h5>Wallet</h5>
                    <div>
                      <a href="/">Home</a>
                      <FontAwesomeIcon icon={faArrowRightLong} />
                      <a href="javascript:void(0)">Wallet</a>
                    </div>
                  </div>
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
                        color="white"
                        size="lg"
                      />
                    </a>
                  </div>
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n                                .dashboard-box {\n                                    background-color: rgb(255, 255, 255);\n                                    padding: 15px;\n                                    height: 110px;\n                                    width: 100%;\n                                    display: flex;\n                                    justify-content: space-between;\n                                    align-items: center;\n                                    color: black;\n                                    border-radius: 10px;\n                                    margin-bottom: 15px;\n                                }\n\n                                .dashboard-box:hover {\n                                    background-color: #4e0dff;\n                                    color: white;\n                                    transition: all .5s ease-in;\n                                }\n                                .total-dashboard p {\n                                    font-size: 14px;\n                                    color: black;\n                                    padding-bottom: 1rem;\n                                }\n                                .Invest-numbers {\n                                    padding: 5px;\n                                    font-size: 35px;\n                                    font-weight: 900;\n                                }\n\n                                .invest-symbol img {\n                                    height: 50px;\n                                }\n                               \n                            ",
                    }}
                  />
                  <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                      <div className="dashboard-box shadow">
                        <div className="total-dashboard">
                          <p>Total investment</p>
                          <div className="Invest-numbers">5000</div>
                        </div>
                        <div className="invest-symbol">
                          <img
                            src={require("../../assets/images/cash.png")}
                            alt="cash"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                      <div className="dashboard-box shadow">
                        <div className="total-dashboard">
                          <p>Total interest</p>
                          <div className="Invest-numbers">20000</div>
                        </div>
                        <div className="invest-symbol">
                          <img
                            src={require("../../assets/images/interest.png")}
                            alt="cash"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                      <div className="dashboard-box shadow">
                        <div className="total-dashboard">
                          <p>Total orders</p>
                          <div className="Invest-numbers">20</div>
                        </div>
                        <div className="invest-symbol">
                          <img
                            src={require("../../assets/images/orders.png")}
                            alt="cash"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                      <div className="dashboard-box shadow">
                        <div className="total-dashboard">
                          <p>Total projects</p>
                          <div className="Invest-numbers">5</div>
                        </div>
                        <div className="invest-symbol">
                          <img
                            src={require("../../assets/images/analytics.png")}
                            alt="cash"
                          />
                        </div>
                      </div>
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

export default Dashboard;
