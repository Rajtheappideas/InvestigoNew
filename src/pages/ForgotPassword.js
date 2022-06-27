import React, { useState } from "react";
import signin from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import { MailIcon } from "@heroicons/react/solid";
import OtpVerify from "../components/OtpVerify";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";

const Forgotpassword = () => {
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState("");

  const CloseModal = () => setOpenModal(false);

  const forgotPassword = () => {
    if (email === "") {
      toast.error("Oops you forgot to enter email!!", {
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
    }
    setLoading(true);
    const data = {
      email,
    };
    axios
      .post("https://investigo-tai.herokuapp.com/forgot", data)
      .then((res) => {
        if (res?.data?.status === "success") {
          console.log(res?.data);
          setOpenModal(true);
          setLoading(false);
          setOtp(res?.data?.otp);
        }
      })
      .catch((err) => {
        if (err?.response?.data?.status === "fail") {
          console.log(err?.response?.data);
          toast.error(err?.response?.data?.message, {
            duration: 2000,
            style: {
              width: "500px",
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
  return (
    <>
      <Helmet>
        <title>Forgot Password</title>
      </Helmet>
      <Toaster />
      {/* ---------------logo--------------- */}
      <div className="p-10 h-10 cursor-pointer">
        <Link to="/">Logo</Link>
      </div>
      <div className="grid lg:grid-cols-2 place-items-center items-center py-5 sm:px-10 px-3 gap-10">
        {/* ---------------image div--------------- */}
        <div>
          <img
            src={signin}
            className="w-full lg:block hidden h-screen object-cover object-center"
          />
        </div>

        {/* ---------------form div--------------- */}
        <div className="h-auto bg-white w-full rounded-xl sm:p-10 p-3 shadow-lg space-y-10">
          {/* ---------------heading--------------- */}
          <h1 className="text-xl font-bold text-center bg-gradient-to-tr to-Purple from-VividBlue bg-clip-text text-transparent">
            Forgot Password
          </h1>
          <form className="space-y-5">
            {/* ---------------email--------------- */}
            <div className="flex items-center relative ">
              <label className="absolute top-0 left-12 my-2 text-sm">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                className="pl-12 pt-2 rounded-xl w-full h-16 bg-gray-300 outline-none focus:border-2 focus:border-green-400"
              />
              <MailIcon className="h-7 absolute top-5 left-3" />
            </div>

            {/* ---------------submit button--------------- */}
            <div className="w-full text-center">
              <button
                type="button"
                onClick={() => forgotPassword()}
                className="w-full tracking-wide active:scale-95 duration-100 ease-in transition-all text-center bg-VividBlue text-white font-semibold text-xl h-14 rounded-lg"
              >
                {loading ? "Loading..." : "Submit"}
              </button>
              {openModal && (
                <OtpVerify
                  openModal={openModal}
                  CloseModal={CloseModal}
                  email={email}
                  otp={otp}
                />
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Forgotpassword;
