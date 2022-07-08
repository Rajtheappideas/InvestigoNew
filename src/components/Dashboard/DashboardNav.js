import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const DashboardNav = ({
  setShowDashboard,
  setShowAccount,
  setShowOrders,
  setShowInvestment,
  setShowWithdraw,
}) => {
  const [optionValue, setOptionValue] = useState("english");
  return (
    <header className="dashboard-header">
      <div className="container">
        <div className="dashboard-header__area">
          <a href="/" className="header-logo">
            <img
              src={require("../../assets/images/logo.png")}
              alt="Logo"
              className="logo"
            />
          </a>
          <div className="dashboard-header__area-content">
            <a
              className="button button--effect"
              onClick={() => {
                setShowDashboard(false);
                setShowAccount(false);
                setShowInvestment(true);
                setShowWithdraw(false);
                setShowOrders(false);
              }}
              style={{ cursor: "pointer" }}
            >
              <img
                src={require("../../assets/images/direction.png")}
                alt="Investment"
              />{" "}
              New Investments
            </a>
            <div className="notification-area">
              <a
                href=""
                className="icon__wrapper notification__icon"
              >
                <FontAwesomeIcon icon={faBell} color="blue" />
                <span>03</span>
              </a>
              <div className="notification__wrapper">
                <div className="notification__head">
                  <p className="text-center">3 New</p>
                  <p className="text-center">Notification</p>
                </div>
                <div className="notification__single-wrapper">
                  <div className="notification__single">
                    <a href="">
                      <h6>Welcome to spoment</h6>
                      <p>
                        We are happy to welcome you to our community spoment.
                      </p>
                    </a>
                    <p className="time">2 hours ago</p>
                  </div>
                  <div className="notification__single">
                    <a href="">
                      <h6>Welcome to spoment</h6>
                      <p>
                        We are happy to welcome you to our community spoment.
                      </p>
                    </a>
                    <p className="time">2 hours ago</p>
                  </div>
                </div>
                <div className="mark__read">
                  <a href="#">Mark all as read</a>
                </div>
              </div>
            </div>
            <div className="dashboard-language">
              <select
                onChange={(e) => setOptionValue(e.target.value)}
                className="select-dashboard-language nice-select list"
                style={{
                  fontSize: "1.2rem",
                  paddingRight: "0",
                  marginRight: "0",
                }}
              >
                <option
                  value="english"
                  
                  className={`${
                    optionValue === "english" && "option list selected focus"
                  }`}
                >
                  <h4>En</h4>
                </option>
                <option
                  value="australia"
                  className={`${
                    optionValue === "australia" && " option selected focus"
                  }`}
                >
                  Aus
                </option>
                <option
                  value="germany"
                  className={`${
                    optionValue === "germany" && "option  selected focus"
                  }`}
                >
                  GER
                </option>
                <option
                  value="argentina"
                  className={`${
                    optionValue === "argentina" && "option  selected focus"
                  }`}
                >
                  Arg
                </option>
              </select>
            </div>
            <a
              style={{ cursor: "pointer" }}
              onClick={() => {
                setShowDashboard(false);
                setShowAccount(true);
                setShowInvestment(false);
                setShowWithdraw(false);
                setShowOrders(false);
              }}
              className="profile"
            >
              <img
                src={require("../../assets/images/profile.png")}
                alt="Profile"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardNav;
