import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightLong,
  faBarsStaggered,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet";
import useUserdata from "../../hooks/useUserData";
import OrdersChart from "./OrderChart";
import ProjectsChart from "./ProjectsChart";
import InvestmentChart from "./InvestmentChart";
import InterestChart from "./InterestChart";

const Dashboard = ({
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
  const [showTotalInterest, setShowTotalInterest] = useState(false);
  const [showTotalInvestment, setShowTotalInvestment] = useState(
    showDashboard && true
  );
  const [showOrdersChart, setShowOrdersChart] = useState(false);
  const [showProjets, setShowProjets] = useState(false);
  const { handleLogout } = useUserdata();
  return (
    <>
      <Helmet>
        <title>Investigo - Dashboard</title>
      </Helmet>
      <div className="dashboard section__space__bottom">
        <div className="container">
          <div className="dashboard__area">
            <div className="row">
              {/* sidebar */}
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
                  <div className="breadcrumb-dashboard">
                    <h5>Wallet</h5>
                    <div>
                      <a href="/">Home</a>
                      <FontAwesomeIcon icon={faArrowRightLong} />
                      <a>Wallet</a>
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
                    {/* investment */}
                    <div
                      className="col-lg-3 col-md-6 col-sm-12"
                      onClick={() => {
                        setShowTotalInvestment(true);
                        setShowOrdersChart(false);
                        setShowProjets(false);
                        setShowTotalInterest(false);
                      }}
                      // style={{
                      //   backgroundImage:
                      //     "linear-gradient(to bottom, Transparente 0%,Transparente 50%,red 50%,red 100%)",
                      // }}
                    >
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
                    {/* interest */}
                    <div
                      className="col-lg-3 col-md-6 col-sm-12"
                      onClick={() => {
                        setShowTotalInvestment(false);
                        setShowOrdersChart(false);
                        setShowProjets(false);
                        setShowTotalInterest(true);
                      }}
                    >
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
                    {/* orders */}
                    <div
                      className="col-lg-3 col-md-6 col-sm-12"
                      onClick={() => {
                        setShowTotalInvestment(false);
                        setShowOrdersChart(true);
                        setShowProjets(false);
                        setShowTotalInterest(false);
                      }}
                    >
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
                    {/* projects */}
                    <div
                      className="col-lg-3 col-md-6 col-sm-12"
                      onClick={() => {
                        setShowTotalInvestment(false);
                        setShowOrdersChart(false);
                        setShowProjets(true);
                        setShowTotalInterest(false);
                      }}
                    >
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
                  {showTotalInvestment && <InvestmentChart />}
                  {showTotalInterest && <InterestChart />}
                  {showOrdersChart && <OrdersChart />}
                  {showProjets && <ProjectsChart />}
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
