import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightLong,
  faBarsStaggered,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet";

const Orders = () => {
  return (
    <>
      <Helmet>
        <title>Ivnestigo - Orders</title>
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
                      <h5>Orders</h5>
                      <div>
                        <a href="index.html">Home</a>
                        <FontAwesomeIcon icon={faArrowRightLong} />
                        <a href="javascript:void(0)">Transactions</a>
                      </div>
                    </div>
                    <div className="investment-table investment-table-two">
                      <div className="intro">
                        <h5>Orders</h5>
                        <h6>
                          Total Number of Transactions <span>(5)</span>
                        </h6>
                      </div>
                      <div className="table-wrapper">
                        <table>
                          <tbody>
                            <tr>
                              <th>Project</th>
                              <th>Amount Invested</th>
                              <th>Payment Type</th>
                              <th>Date / Time</th>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src={require("../../assets/images/table-img.png")}
                                  alt="Investment"
                                />
                                A19, Vilnius
                              </td>
                              <td>$500.00</td>
                              <td>Paypal</td>
                              <td>18.03.2022</td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src={require("../../assets/images/table-img.png")}
                                  alt="Investment"
                                />
                                A19, Vilnius
                              </td>
                              <td>$500.00</td>
                              <td>Visa</td>
                              <td>18.03.2022</td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src={require("../../assets/images/table-img.png")}
                                  alt="Investment"
                                />
                                A19, Vilnius
                              </td>
                              <td>$500.00</td>
                              <td>American Express</td>
                              <td>18.03.2022</td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src={require("../../assets/images/table-img.png")}
                                  alt="Investment"
                                />
                                A19, Vilnius
                              </td>
                              <td>$500.00</td>
                              <td>Maestro</td>
                              <td>18.03.2022</td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src={require("../../assets/images/table-img.png")}
                                  alt="Investment"
                                />
                                A19, Vilnius
                              </td>
                              <td>$500.00</td>
                              <td>Paypal</td>
                              <td>18.03.2022</td>
                            </tr>
                          </tbody>
                        </table>
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

export default Orders;
