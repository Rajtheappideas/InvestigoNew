import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightLong,
  faBarsStaggered,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet";
import useUserdata from "../../hooks/useUserData";

const Withdraw = ({
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
  const [selectValue, setSelectValue] = useState(null);
  const { handleLogout } = useUserdata();
  return (
    <>
      <Helmet>
        <title>Ivnestigo - Withdraw</title>
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
                  <div className="main__content-dashboard">
                    <div className="breadcrumb-dashboard">
                      <h5>Withdraw</h5>
                      <div>
                        <a href="/">Home</a>
                        <FontAwesomeIcon icon={faArrowRightLong} />
                        <a href="javascript:void(0)">Withdraw</a>
                      </div>
                    </div>
                    <div className="withdraw-funds">
                      <div className="withdraw-funds__inner">
                        <h5>Withdraw Funds</h5>
                        <p>
                          Use the form below to withdraw from wallet instantly
                        </p>
                        <form action="#" method="post">
                          <div className="input input--secondary">
                            <label htmlFor="withdrawAmount">Amount</label>
                            <input
                              type="number"
                              name="withdraw_amount"
                              id="withdrawAmount"
                              placeholder={100}
                              required="required"
                            />
                          </div>

                          {/* <div className="regi__type">
                            <label htmlFor="methodSelect">Payment Method</label>
                            <select
                              className="type__select"
                              id="methodSelect"
                              onChange={(e) => setSelectValue(e.target.value)}
                              style={{
                                display: "block",
                                padding: "15px",
                                borderRadius: "8px",
                                width: "100%",
                              }}
                            >
                              <option value="method">Payment Method</option>
                              <option value="paypal">Paypal</option>
                              <option value="maestro">Maestro</option>
                              <option value="visa">Visa</option>
                              <option value="express">American Express</option>
                            </select>
                          </div> */}

                          <button
                            type="submit"
                            className="button button--effect"
                          >
                            Withdraw
                          </button>
                        </form>
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

export default Withdraw;
