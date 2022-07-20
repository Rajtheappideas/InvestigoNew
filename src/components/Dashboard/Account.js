import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Navbar } from "../";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightLong,
  faBarsStaggered,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import { useUserContext } from "../../context/UserContext";
import useUserdata from "../../hooks/useUserData";
import { Form, FormikProvider, useFormik, ErrorMessage } from "formik";
import * as yup from "yup";
import styled from "styled-components";

const Account = ({
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
  const [openGeneral, setOpenGeneral] = useState(true);
  const [openBilling, setOpenBilling] = useState(false);
  const [openSecurity, setOpenSecurity] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [prevImage, setPrevImage] = useState(null);
  const [profileImage, setProfileImage] = useState("");

  const [loading, setLoading] = useState(false);

  const { userData, userProfile } = useUserContext();
  const { handleLogout } = useUserdata();

  const changePassword = () => {
    if (oldPassword === "" || newPassword === "" || confirmNewPassword === "") {
      toast.error("All filed should be filled!!", {
        duration: 2000,
        style: {
          width: "500px",
          background: "black",
          color: "white",
          fontSize: "large",
        },
        position: "top-center",
      });
      return false;
    } else if (newPassword !== confirmNewPassword) {
      toast.error("new password and confirm password should be match!!", {
        duration: 2000,
        style: {
          width: "100%",
          background: "black",
          color: "white",
          fontSize: "large",
          whiteSpace: "nowrap",
        },
        position: "top-center",
      });
      return false;
    }
    setLoading(true);
    const data = {
      currentpass: oldPassword,
      newpass: newPassword,
      cfnewpass: confirmNewPassword,
    };
    axios
      .post("https://investigo-tai.herokuapp.com/changepass", data, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: userData?.token,
        },
      })
      .then((res) => {
        if (res?.data?.status === "success") {
          toast.success(res?.data?.message, {
            duration: 2000,
            style: {
              width: "100%",
              background: "black",
              color: "white",
              fontSize: "large",
            },
            position: "top-center",
          });
          setLoading(false);
          setOldPassword("");
          setNewPassword("");
          setConfirmNewPassword("");
        }
      })
      .catch((err) => {
        if (err?.response?.data?.message === "Invalid current password") {
          toast.error("Invalid old password", {
            duration: 2000,
            style: {
              width: "100%",
              background: "black",
              color: "white",
              fontSize: "large",
            },
            position: "top-center",
          });
          setLoading(false);
          return false;
        } else {
          toast.error(err?.response?.data?.message, {
            duration: 2000,
            style: {
              width: "100%",
              background: "black",
              color: "white",
              fontSize: "large",
            },
            position: "top-center",
          });
          setLoading(false);
        }
      });
  };
  // --------------------yup-------------
  const userProfileSchema = yup.object().shape({
    email: yup.string().required("email is required").email(),
    national: yup.string().required(),
    fname: yup.string().required("firstname is required"),
    lname: yup.string().required("lastname is required"),
    // phone: yup.number().required("phone is required"),
    // website: yup
    //   .string()
    //   .matches(
    //     /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
    //     "Enter correct url!"
    //   )
    //   .required("Please enter website"),
  });
  // --------------------------formik-------------
  const formik = useFormik({
    initialValues: {
      userId: userProfile?.userId,
      email: userProfile?.email || "",
      fname: userProfile?.fname || "",
      lname: userProfile?.lname || "",
      national: userProfile?.national || "",
      phone: userProfile?.phone || "",
      website: userProfile?.website || "",
      linkedin: userProfile?.linkedin || "",
      instagram: userProfile?.instagram || "",
      image: userProfile?.image || "",
    },
    enableReinitialize: true,
    validationSchema: userProfileSchema,
    onSubmit: (values) => {
      let fd = new FormData();
      fd.append("email", values.email);
      fd.append("fname", values.fname);
      fd.append("lname", values.lname);
      fd.append("national", values.national);
      fd.append("instagram", values.instagram);
      fd.append("image", profileImage);
      fd.append("linkedin", values.linkedin);
      fd.append("website", values.website);
      fd.append("phone", values.phone);
      axios
        .post("https://investigo-tai.herokuapp.com/profile", fd, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: userData?.token,
          },
        })
        .then((response) => {
          if (response?.data?.status == "success") {
            console.log(response?.data);
            toast.success("Account updated", {
              duration: 2000,
              style: {
                width: "auto",
                height: "auto",
                background: "black",
                color: "white",
                fontSize: "large",
              },
              position: "top-center",
            });
            setTimeout(() => {
              window.location.reload();
            }, 1000);
          }
        })
        .catch((err) => {
          if (err?.response?.status == "error") {
          }
          console.log(err?.response);
        });
    },
  });

  // image upload
  const handleImageUpload = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    setPrevImage(URL.createObjectURL(file));
    setProfileImage(file);
  };

  const { handleSubmit, getFieldProps, isSubmitting, touched, errors } = formik;

  return (
    <>
      <Helmet>
        <title>Investigo - Account</title>
      </Helmet>
      <Navbar />
      <Toaster />
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
                          <a className={`${showAccount && "sidenav__active"}`}>
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
                      <h5>Account</h5>
                      <div>
                        <a href="/">Home</a>
                        <FontAwesomeIcon icon={faArrowRightLong} />
                        <a>Account</a>
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
                        >
                          Security
                        </button>
                      </div>
                      <div className="account-content_wrapper">
                        {/* general */}
                        {openGeneral && (
                          <FormikProvider
                            value={userProfile || formik.initialValues}
                          >
                            <Form
                              className="save__form"
                              autoComplete="off"
                              onSubmit={handleSubmit}
                            >
                              <div className="account-content" id="general">
                                <div className="avatar-wrapper">
                                  <div className="avatar-content">
                                    <div className="avatar">
                                      <img
                                        src={`${
                                          prevImage
                                            ? prevImage
                                            : userProfile?.image
                                            ? `https://investigo-tai.herokuapp.com/${userProfile?.image}`
                                            : `${require("../../assets/images/team/ryan.png")}`
                                        }
                                        `}
                                        style={{ objectFit: "contain" }}
                                        alt="Avatar"
                                      />
                                    </div>
                                    <div className="avatar-content__guideline">
                                      <h6>Your Avatar</h6>
                                      <p>Profile picture size: 400px x 400px</p>
                                    </div>
                                  </div>
                                  <div className="avatar">
                                    <input
                                      type="file"
                                      accept="image/*"
                                      name="image"
                                      id="avatarUpload"
                                      onChange={handleImageUpload}
                                    />
                                    <label htmlFor="avatarUpload">
                                      Upload new avatar
                                    </label>
                                  </div>
                                </div>
                                {/* national number & userid */}
                                <div className="row">
                                  <div className="col-sm-6">
                                    <div className="input input--secondary">
                                      <label htmlFor="saveNationalNumber">
                                        National Number
                                      </label>
                                      <input
                                        type="text"
                                        name="national"
                                        placeholder="National Number"
                                        {...getFieldProps("national")}
                                        required="required"
                                        style={
                                          touched.national &&
                                          errors.national && {
                                            border: "solid red 2px",
                                          }
                                        }
                                      />
                                    </div>
                                  </div>
                                  <div className="col-sm-6">
                                    <div className="input input--secondary">
                                      <label htmlFor="saveUserid">
                                        User ID
                                      </label>
                                      <input
                                        type="text"
                                        name="userId"
                                        disabled={true}
                                        {...getFieldProps("userId")}
                                      />
                                    </div>
                                  </div>
                                </div>
                                {/* fnmae & lname */}
                                <div className="row">
                                  <div className="col-sm-6">
                                    <div className="input input--secondary">
                                      <label htmlFor="saveFirstName">
                                        First Name
                                      </label>
                                      <input
                                        type="text"
                                        name="fname"
                                        placeholder="First Name"
                                        {...getFieldProps("fname")}
                                        required="required"
                                        style={
                                          touched.fname &&
                                          errors.fname && {
                                            border: "solid red 2px",
                                          }
                                        }
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
                                        name="lname"
                                        placeholder="Last Name"
                                        required="required"
                                        {...getFieldProps("lname")}
                                        style={
                                          touched.lname &&
                                          errors.lname && {
                                            border: "solid red 2px",
                                          }
                                        }
                                      />
                                    </div>
                                  </div>
                                </div>
                                {/* email & phone */}
                                <div className="row">
                                  <div className="col-sm-6">
                                    <div className="input input--secondary">
                                      <label htmlFor="saveEmail">Email</label>
                                      <input
                                        type="email"
                                        name="email"
                                        id="saveEmail"
                                        placeholder="Enter Your Email"
                                        {...getFieldProps("email")}
                                        required="required"
                                        style={
                                          touched.email &&
                                          errors.email && {
                                            border: "solid red 2px",
                                          }
                                        }
                                      />
                                    </div>
                                  </div>
                                  <div className="col-sm-6">
                                    <div className="input input--secondary">
                                      <label htmlFor="savePhone">Phone</label>
                                      <input
                                        type="tel"
                                        name="phone"
                                        maxLength={10}
                                        minLength={10}
                                        placeholder="345-323-1234"
                                        {...getFieldProps("phone")}
                                      />
                                    </div>
                                  </div>
                                </div>
                                {/* insta & linkedin */}
                                <div className="row">
                                  <div className="col-sm-6">
                                    <div className="input input--secondary">
                                      <label htmlFor="instagram">
                                        Instagram
                                      </label>
                                      <input
                                        type="text"
                                        name="instagram"
                                        id="instagram"
                                        placeholder="Enter Your Instagram"
                                        {...getFieldProps("instagram")}
                                      />
                                    </div>
                                  </div>
                                  <div className="col-sm-6">
                                    <div className="input input--secondary">
                                      <label htmlFor="linkedin">Linkedin</label>
                                      <input
                                        type="text"
                                        name="linkedin"
                                        placeholder="https://name.com"
                                        {...getFieldProps("linkedin")}
                                      />
                                    </div>
                                  </div>
                                </div>
                                {/* website */}
                                <div className="row">
                                  <div className="col-sm-12">
                                    <div className="input input--secondary">
                                      <label htmlFor="website">Website</label>
                                      <input
                                        type="text"
                                        name="website"
                                        placeholder="https://yourwebsite.com"
                                        {...getFieldProps("website")}
                                      />
                                    </div>
                                  </div>
                                </div>
                                {/* button */}
                                <div>
                                  <button
                                    type="submit"
                                    className="button button--effect"
                                  >
                                    {isSubmitting
                                      ? "Updating..."
                                      : "Save Changes"}
                                  </button>
                                </div>

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
                                      Before deleting your account, please note
                                      that if you delete your account, Dash
                                      cannot recover it.
                                    </p>
                                  </div>
                                  <a href="#" className="button button--effect">
                                    Delete
                                  </a>
                                </div>
                              </div>
                            </Form>
                          </FormikProvider>
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
                                  <img alt="Visa" />
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
                                    src={require("../../assets/images/mastercard.png")}
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
                                      href="/forgotpassword"
                                      className="button button--effect"
                                    >
                                      Forgot Password?
                                    </a>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <form name="change__pass">
                                    <div className="input input--secondary">
                                      <label htmlFor="currentPass">
                                        Current Password
                                      </label>
                                      <input
                                        type="password"
                                        name="current_pass"
                                        id="currentPass"
                                        placeholder="Current Password"
                                        value={oldPassword}
                                        onChange={(e) =>
                                          setOldPassword(e.target.value)
                                        }
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
                                        value={newPassword}
                                        onChange={(e) =>
                                          setNewPassword(e.target.value)
                                        }
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
                                        value={confirmNewPassword}
                                        onChange={(e) =>
                                          setConfirmNewPassword(e.target.value)
                                        }
                                      />
                                    </div>
                                    <div>
                                      <button
                                        type="button"
                                        onClick={changePassword}
                                        className="button button--effect"
                                      >
                                        {loading
                                          ? "Loading..."
                                          : "Update Password"}
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
                                    src={require("../../assets/images/icons/mobile.png")}
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
                                    src={require("../../assets/images/icons/tablet.png")}
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
                                    src={require("../../assets/images/icons/desktop.png")}
                                    alt="Desktop"
                                  />
                                  <div className="content__alt">
                                    <h6>iMac OSX</h6>
                                    <p>New York City · June 20 at 14:00</p>
                                  </div>
                                </div>
                                <div className="content-right">
                                  <a
                                    href="/signin"
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

      {/* <DashboardFooter /> */}
    </>
  );
};

export default Account;
