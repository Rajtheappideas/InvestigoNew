import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightLong,
  faBarsStaggered,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet";

const Withdraw = () => {
  return (
    <>
      <Helmet>
        <title>Ivnestigo - Withdraw</title>
      </Helmet>
      <div className="dashboard section__space__bottom">
        <div className="container">
          <div className="dashboard__area">
            <div className="row">
              <div className="col-xxl-3">
                <div className="sidebar">
                  <a href="javascript:void(0)" className="close__sidebar">
                    <FontAwesomeIcon icon={faXmark} />
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
              <div className="col-xxl-9">
                <div className="main__content">
                  <div className="collapse__sidebar">
                    <h4>Dashboard</h4>
                    <a
                      href="javascript:void(0)"
                      className="collapse__sidebar__btn"
                    >
                      <FontAwesomeIcon icon={faBarsStaggered} />
                    </a>
                  </div>
                  <div className="main__content-dashboard">
                    <div className="breadcrumb-dashboard">
                      <h5>Withdraw</h5>
                      <div>
                        <a href="index.html">Home</a>
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
                          <div className="regi__type">
                            <label htmlFor="methodSelect">Payment Method</label>
                            <select className="type__select" id="methodSelect">
                              <option value="method">Payment Method</option>
                              <option value="paypal">Paypal</option>
                              <option value="maestro">Maestro</option>
                              <option value="visa">Visa</option>
                              <option value="express">American Express</option>
                            </select>
                          </div>
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
