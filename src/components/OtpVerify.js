import { XIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import styled from "styled-components";

const OtpVerify = ({ openModal, CloseModal, email, otp }) => {
  const [EnteredOtp, setEnteredOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const SendEmailToResetPasswordPage = () => {
    navigate("/resetpassword", { state: { email: email } });
  };
  console.log(otp);

  const CheckOtp = () => {
    if (EnteredOtp === "") {
      toast.error("Enter otp", {
        duration: 2000,
        style: {
          width: "500px",
          background: "black",
          color: "white",
          fontSize: "large",
        },
        position: "top-center",
      });
      return false
    }
    setLoading(true);
    setTimeout(() => {
      if (otp !== EnteredOtp) {
        toast.error("Enter Valid Otp", {
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
        return false;
      } else if (otp === EnteredOtp) {
        setLoading(false);
        navigate("/resetpassword", { state: { email: email } });
      }
    }, 2000);
  };
  const Div = styled.div`
    height: 50%;
    width: 50%;
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  `;
  const Closebutton = styled.button`
    width: 3rem;
    height: 3rem;
    position: absolute;
    top: 3rem;
    right: 3rem;
  `;

  return (
    <Modal
      appElement={document.getElementById("root")}
      isOpen={openModal}
      onRequestClose={() => CloseModal()}
      preventScroll={false}
    >
      <Closebutton onClick={() => CloseModal()}>
        <XIcon fontSize={30} />
      </Closebutton>
      <Toaster />
      <Div className="">
        <h1 className="text-center">
          {/* {t("Enter_your_OTP")} */}
          Enter your OTP
        </h1>

        {/* -------------input fieilds--------------- */}
        <form
          action="post"
          style={{
            width: "100%",
            display: "flex",
            justifyItems: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div className="input input--secondary">
            <label htmlFor="loginMail">Email*</label>
            <input
              type="email"
              name="email"
              id="loginMail"
              value={email}
              disabled={true}
              placeholder="Enter your email"
            />
          </div>
          <div className="input input--secondary">
            <label htmlFor="loginMail">Otp*</label>
            <input
              type="text"
              name="otp"
              placeholder="Enter your otp"
              value={EnteredOtp}
              onChange={(e) => setEnteredOtp(e.target.value)}
            />
          </div>

          <div className="input__button">
            <button
              type="button"
              onClick={CheckOtp}
              className="button button--effect"
            >
              {loading ? "loading..." : "Check"}
            </button>
          </div>
        </form>
      </Div>
    </Modal>
  );
};

export default OtpVerify;
