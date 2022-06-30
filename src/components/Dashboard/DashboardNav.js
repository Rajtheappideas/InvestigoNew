import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const DashboardNav = () => {
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
            <a className="button button--effect" href="/investment">
              <img
                src={require("../../assets/images/direction.png")}
                alt="Investment"
              />{" "}
              New Investments
            </a>
            <div className="notification-area">
              <a
                href="javascript:void(0)"
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
                    <a href="javascript:void(0)">
                      <h6>Welcome to spoment</h6>
                      <p>
                        We are happy to welcome you to our community spoment.
                      </p>
                    </a>
                    <p className="time">2 hours ago</p>
                  </div>
                  <div className="notification__single">
                    <a href="javascript:void(0)">
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
              <select className="select-dashboard-language">
                <option value="english">En</option>
                <option value="australia">Aus</option>
                <option value="germany">GER</option>
                <option value="argentina">Arg</option>
              </select>
            </div>
            <a href="account.html" className="profile">
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
