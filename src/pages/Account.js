import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { DashboardFooter, Navbar } from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightLong,
  faBarsStaggered,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const Account = () => {
  const [openGeneral, setOpenGeneral] = useState(true);
  const [openBilling, setOpenBilling] = useState(false);
  const [openSecurity, setOpenSecurity] = useState(false);
  return (
    <>
      <Helmet>Investigo - Account</Helmet>
      <Navbar />
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
                            src={require("../assets/images/icons/dashboard.png")}
                            alt="Dashboard"
                          />{" "}
                          Dashboard
                        </a>
                      </li>
                      <li>
                        <a href="/investment">
                          <img
                            src={require("../assets/images/icons/investments.png")}
                            alt="Investments"
                          />
                          Investments
                        </a>
                      </li>
                      <li>
                        <a href="/transaction">
                          <img
                            src={require("../assets/images/icons/transactions.png")}
                            alt="Transactions"
                          />
                          Orders
                        </a>
                      </li>
                      <li>
                        <a href="/withdraw">
                          <img
                            src={require("../assets/images/icons/withdraw.png")}
                            alt="Withdraw"
                          />{" "}
                          Withdraw
                        </a>
                      </li>
                      <li>
                        <a href="/account">
                          <img
                            src={require("../assets/images/icons/account.png")}
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
                            src={require("../assets/images/icons/logout.png")}
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
                          src={require("../assets/images/icons/calendar.png")}
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
                      <h5>Account</h5>
                      <div>
                        <a href="/">Home</a>
                        <FontAwesomeIcon icon={faArrowRightLong} />
                        <a href="javascript:void(0)">Account</a>
                      </div>
                    </div>
                    <div className="account-info">
                      <div className="account-info__btn-wrapper">
                        <button
                          type="button"
                          //   href="#general"
                          className={`account-info__btn ${
                            openGeneral && "account-info__btn-active"
                          } button button--effect`}
                          onClick={() => {
                            setOpenGeneral(true);
                            setOpenBilling(false);
                            setOpenSecurity(false);
                          }}
                        >
                          General
                        </button>
                        <button
                          //   href="#billing"
                          type="button"
                          onClick={() => {
                            setOpenGeneral(false);
                            setOpenBilling(true);
                            setOpenSecurity(false);
                          }}
                          className={`account-info__btn ${
                            openBilling && "account-info__btn-active"
                          } button button--effect`}
                        >
                          Billing
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setOpenGeneral(false);
                            setOpenBilling(false);
                            setOpenSecurity(true);
                          }}
                          //   href="#security"
                          className={`account-info__btn ${
                            openSecurity && "account-info__btn-active"
                          } button button--effect`}
                          F
                        >
                          Security
                        </button>
                      </div>
                      <div className="account-content_wrapper">
                        {/* general */}
                        {openGeneral && (
                          <div className="account-content" id="general">
                            <div className="avatar-wrapper">
                              <div className="avatar-content">
                                <div className="avatar">
                                  <img
                                    src={require("../assets/images/team/ryan.png")}
                                    alt="Avatar"
                                  />
                                </div>
                                <div className="avatar-content__guideline">
                                  <h6>Your Avatar</h6>
                                  <p>Profile picture size: 400px x 400px</p>
                                </div>
                              </div>
                              <form action="#" method="post">
                                <input
                                  type="file"
                                  name="avatar_upload"
                                  id="avatarUpload"
                                />
                                <label htmlFor="avatarUpload">
                                  Upload new avatar
                                </label>
                              </form>
                            </div>
                            <form
                              action="#"
                              name="save__from"
                              method="post"
                              className="save__form"
                            >
                              <div className="row">
                                <div className="col-sm-6">
                                  <div className="input input--secondary">
                                    <label htmlFor="saveFirstName">
                                      First Name
                                    </label>
                                    <input
                                      type="text"
                                      name="save__first__name"
                                      id="saveFirstName"
                                      placeholder="First Name"
                                      required="required"
                                    />
                                  </div>
                                </div>
                                <div className="col-sm-6">
                                  <div className="input input--secondary">
                                    <label htmlFor="saveLastName">
                                      Last Name
                                    </label>
                                    <input
                                      type="text"
                                      name="save__last__name"
                                      id="saveLastName"
                                      placeholder="Last Name"
                                      required="required"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-sm-6">
                                  <div className="input input--secondary">
                                    <label htmlFor="saveEmail">Email</label>
                                    <input
                                      type="email"
                                      name="save_email"
                                      id="saveEmail"
                                      placeholder="Enter Your Email"
                                      required="required"
                                    />
                                  </div>
                                </div>
                                <div className="col-sm-6">
                                  <div className="input input--secondary">
                                    <label htmlFor="savePhone">Phone</label>
                                    <input
                                      type="number"
                                      name="save_phone"
                                      id="savePhone"
                                      placeholder="345-323-1234"
                                      required="required"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-sm-6">
                                  <div className="input input--secondary">
                                    <label htmlFor="instagram">Instagram</label>
                                    <input
                                      type="text"
                                      name="instagram"
                                      id="instagram"
                                      placeholder="Enter Your Instagram"
                                      required="required"
                                    />
                                  </div>
                                </div>
                                <div className="col-sm-6">
                                  <div className="input input--secondary">
                                    <label htmlFor="linkedin">Linkedin</label>
                                    <input
                                      type="text"
                                      name="linkedin"
                                      id="linkedin"
                                      placeholder="https://name.com"
                                      required="required"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-sm-12">
                                  <div className="input input--secondary">
                                    <label htmlFor="website">Website</label>
                                    <input
                                      type="text"
                                      name="save_phone"
                                      id="savePhone"
                                      placeholder="https://yourwebsite.com"
                                      required="required"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div>
                                <button
                                  type="submit"
                                  className="button button--effect"
                                >
                                  Save Changes
                                </button>
                              </div>
                            </form>
                            <div className="account-content-single">
                              <div className="intro">
                                <h5>Notifications </h5>
                              </div>
                              <div className="account-content-single__inner">
                                <div className="content">
                                  <h6>Announcements</h6>
                                  <p>
                                    Occasional announcements of new features
                                  </p>
                                </div>
                                <div className="content-right">
                                  <div className="switch-wrapper">
                                    <input
                                      type="checkbox"
                                      id="announcement"
                                      defaultChecked="checked"
                                    />
                                    <label htmlFor="announcement" />
                                  </div>
                                </div>
                              </div>
                              <div className="account-content-single__inner">
                                <div className="content">
                                  <h6>Feedback requests</h6>
                                  <p>Occasional requests for feedback</p>
                                </div>
                                <div className="content-right">
                                  <div className="switch-wrapper">
                                    <input
                                      type="checkbox"
                                      id="feedback"
                                      defaultChecked="checked"
                                    />
                                    <label htmlFor="feedback" />
                                  </div>
                                </div>
                              </div>
                              <div className="account-content-single__inner">
                                <div className="content">
                                  <h6>Billing and account</h6>
                                  <p>
                                    Transactional emails and account
                                    notifications
                                  </p>
                                </div>
                                <div className="content-right">
                                  <p>Legally Obligated</p>
                                </div>
                              </div>
                            </div>
                            <div className="delete-account">
                              <div className="delete-content">
                                <h6>Delete your account</h6>
                                <p className="secondary">
                                  Before deleting your account, please note that
                                  if you delete your account, Dash cannot
                                  recover it.
                                </p>
                              </div>
                              <a href="#" className="button button--effect">
                                Delete
                              </a>
                            </div>
                          </div>
                        )}
                        {/* billing */}
                        {openBilling && (
                          <div className="account-content" id="billing">
                            <div className="account-content-single mt-0">
                              <div className="intro">
                                <h5>Payment Methods</h5>
                                <a href="#">Add Method</a>
                              </div>
                              <div className="account-content-single__inner">
                                <div className="content content-alt">
                                  <img
                                    src={require("../assets/images/visa.png")}
                                    alt="Visa"
                                  />
                                  <div>
                                    <h6>Visa ending in 1234</h6>
                                    <p>Expires 1/2025</p>
                                  </div>
                                </div>
                                <div className="content-right">
                                  <p>Default</p>
                                </div>
                              </div>
                              <div className="account-content-single__inner">
                                <div className="content content-alt">
                                  <img
                                    src={require("../assets/images/mastercard.png")}
                                    alt="Mastercard"
                                  />
                                  <div>
                                    <h6>Mastercard ending in 1234</h6>
                                    <p>Expires 1/2025</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="investment-table">
                              <div className="intro">
                                <h5>Invoices</h5>
                              </div>
                              <div className="table-wrapper">
                                <table>
                                  <tbody>
                                    <tr>
                                      <th>INVOICE ID</th>
                                      <th>AMOUNT</th>
                                      <th>DATE</th>
                                      <th>STATUS</th>
                                    </tr>
                                    <tr>
                                      <td>Invoice #123</td>
                                      <td>$500.00</td>
                                      <td>18.03.2022</td>
                                      <td>
                                        <span className="process" />
                                        Processing
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Invoice #123</td>
                                      <td>$500.00</td>
                                      <td>18.03.2022</td>
                                      <td>
                                        <span className="paid" />
                                        Paid
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Invoice #123</td>
                                      <td>$500.00</td>
                                      <td>18.03.2022</td>
                                      <td>
                                        <span className="paid" />
                                        Paid
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Invoice #123</td>
                                      <td>$500.00</td>
                                      <td>18.03.2022</td>
                                      <td>
                                        <span className="paid" />
                                        Paid
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Invoice #123</td>
                                      <td>$500.00</td>
                                      <td>18.03.2022</td>
                                      <td>
                                        <span className="paid" />
                                        Paid
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        )}
                        {/* security */}
                        {openSecurity && (
                          <div className="account-content" id="security">
                            <div className="two-factor-wrapper">
                              <div className="two-factor-content">
                                <h6>Two Factor Authentication</h6>
                                <p>
                                  Two-Factor Authentication (2FA) can be used to
                                  help protect your account
                                </p>
                              </div>
                              <a href="#" className="button button--effect">
                                Enable
                              </a>
                            </div>
                            <div className="change__pass">
                              <div className="row neutral-row">
                                <div className="col-md-6">
                                  <div className="change__pass-content column__space">
                                    <h5>Change Password</h5>
                                    <p>
                                      You can always change your password for
                                      security reasons or reset your password in
                                      case you forgot it.
                                    </p>
                                    <a
                                      href="#"
                                      className="button button--effect"
                                    >
                                      Forgot Password?
                                    </a>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <form
                                    action="#"
                                    name="change__pass"
                                    method="post"
                                  >
                                    <div className="input input--secondary">
                                      <label htmlFor="currentPass">
                                        Current Password
                                      </label>
                                      <input
                                        type="password"
                                        name="current_pass"
                                        id="currentPass"
                                        placeholder="Current Password"
                                        required="required"
                                      />
                                    </div>
                                    <div className="input input--secondary">
                                      <label htmlFor="newPass">
                                        New Password
                                      </label>
                                      <input
                                        type="password"
                                        name="new_pass"
                                        id="newPass"
                                        placeholder="New Password"
                                        required="required"
                                      />
                                    </div>
                                    <div className="input input--secondary">
                                      <label htmlFor="conNewPass">
                                        Confirm New Password
                                      </label>
                                      <input
                                        type="password"
                                        name="con_new_pass"
                                        id="conNewPass"
                                        placeholder="Confirm Password"
                                        required="required"
                                      />
                                    </div>
                                    <div>
                                      <button
                                        type="submit"
                                        className="button button--effect"
                                      >
                                        Update Password
                                      </button>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                            <div className="account-content-single account-content-single__alt">
                              <div className="intro">
                                <h5>Additional Security</h5>
                                <a href="#">Add Method</a>
                              </div>
                              <div className="account-content-single__inner">
                                <div className="content">
                                  <h6>SMS recovery</h6>
                                  <p>Number ending with 1234</p>
                                </div>
                                <div className="content-right">
                                  <a href="#" className="button button--effect">
                                    Disable SMS
                                  </a>
                                </div>
                              </div>
                              <div className="account-content-single__inner">
                                <div className="content">
                                  <h6>Autheticator App</h6>
                                  <p>Google Authenticator</p>
                                </div>
                                <div className="content-right">
                                  <a
                                    href="#"
                                    className="button button--effect alt"
                                  >
                                    Configure
                                  </a>
                                </div>
                              </div>
                              <div className="account-content-single__inner">
                                <div className="content">
                                  <h6>SSL Certificate</h6>
                                  <p>Secure Sockets Layer</p>
                                </div>
                                <div className="content-right">
                                  <a
                                    href="#"
                                    className="button button--effect alt"
                                  >
                                    Configure
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="account-content-single account-content-single__alt">
                              <div className="intro">
                                <h5>Your devices</h5>
                                <a href="#">Log out on all devices</a>
                              </div>
                              <div className="account-content-single__inner account-content-single__inner-alt">
                                <div className="content">
                                  <img
                                    src={require("../assets/images/icons/mobile.png")}
                                    alt="Mobile"
                                  />
                                  <div className="content__alt">
                                    <h6>Iphone 13 Pro Max</h6>
                                    <p>New York City · June 20 at 14:00</p>
                                  </div>
                                </div>
                                <div className="content-right">
                                  <a
                                    href="login.html"
                                    className="button button--effect alt"
                                  >
                                    Log Out
                                  </a>
                                </div>
                              </div>
                              <div className="account-content-single__inner account-content-single__inner-alt">
                                <div className="content">
                                  <img
                                    src={require("../assets/images/icons/tablet.png")}
                                    alt="Tablet"
                                  />
                                  <div className="content__alt">
                                    <h6>iPad Pro</h6>
                                    <p>New York City · June 20 at 14:00</p>
                                  </div>
                                </div>
                                <div className="content-right">
                                  <a
                                    href="login.html"
                                    className="button button--effect alt"
                                  >
                                    Log Out
                                  </a>
                                </div>
                              </div>
                              <div className="account-content-single__inner account-content-single__inner-alt">
                                <div className="content">
                                  <img
                                    src={require("../assets/images/icons/desktop.png")}
                                    alt="Desktop"
                                  />
                                  <div className="content__alt">
                                    <h6>iMac OSX</h6>
                                    <p>New York City · June 20 at 14:00</p>
                                  </div>
                                </div>
                                <div className="content-right">
                                  <a
                                    href="login.html"
                                    className="button button--effect alt"
                                  >
                                    Log Out
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DashboardFooter />
    </>
  );
};

export default Account;