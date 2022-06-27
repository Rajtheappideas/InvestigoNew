import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";
import axios from "axios";
import React, { useState } from "react";
import Helmet from "react-helmet";
import { toast, Toaster } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Resetpassword = () => {
  const [showpassword, setShowpassword] = useState(false);
  const [showConfirmpassword, setConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const { email } = useLocation().state;

  const navigate = useNavigate();

  const forgotPassword = () => {
    if (newPassword === "" || confirmNewPassword === "") {
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
      email,
      password: newPassword,
    };
    axios
      .post("https://investigo-tai.herokuapp.com/reset_pass", data)
      .then((res) => {
        if (res?.data?.status === "success") {
          toast.success("Password updated", {
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
          navigate("/signin");
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
        <title>Reset Password</title>
      </Helmet>
      <Toaster />

      {/* -----------react toasatify toast container--------------- */}

      <div className="md:h-[500px] h-full md:w-[500px] w-full p-5 space-y-5 absolute top-[10%] left-1/2 -translate-x-1/2 flex flex-col items-center justify-center  rounded-tl-[130px] rounded-br-[130px] rounded-tr-none rounded-bl-none sm:shadow-2xl bg-white">
        <h1 className="font-bold text-4xl text-center tracking-wide">
          {/* {t("Reset Password")} */}
          Reset Password
        </h1>

        {/* -------------input fieilds--------------- */}
        <form action="post" className="w-full">
          <div className="space-y-2 w-full">
            <div>
              <input
                type="email"
                name="email"
                value={email}
                disabled={true}
                className={`border px-6 w-full h-[56px] rounded-tl-[30px] rounded-br-[30px] rounded-tr-none rounded-bl-none outline-none`}
              />
            </div>
            {/* new password */}
            <div className="flex items-center relative ">
              <input
                type={showpassword ? "text" : "password"}
                name="password"
                placeholder="Enter your new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className={`border px-6 w-full h-[56px] rounded-tl-[30px] rounded-br-[30px] rounded-tr-none rounded-bl-none outline-none`}
              />
              <button
                type="button"
                onClick={() => setShowpassword(!showpassword)}
                className="absolute right-4 top-3"
              >
                {showpassword ? (
                  <EyeIcon className="h-6" />
                ) : (
                  <EyeOffIcon className="h-6" />
                )}
              </button>
            </div>

            {/* confirm new password */}
            {/* new password */}
            <div className="flex items-center relative ">
              <input
                type={showConfirmpassword ? "text" : "password"}
                name="password"
                placeholder="Enter your new password"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
                className={`border px-6 w-full h-[56px] rounded-tl-[30px] rounded-br-[30px] rounded-tr-none rounded-bl-none outline-none`}
              />
              <button
                type="button"
                onClick={() => setConfirmPassword(!showConfirmpassword)}
                className="absolute right-4 top-3"
              >
                {showConfirmpassword ? (
                  <EyeIcon className="h-6" />
                ) : (
                  <EyeOffIcon className="h-6" />
                )}
              </button>
            </div>
            <div>
              <button
                type="button"
                className={`border active:scale-95 transition transform duration-100 ease-in-out text-lg font-semibold text-white text-center px-6 w-full h-[56px] bg-gradient-to-l from-Purple to-VividBlue rounded-tl-[30px] rounded-br-[30px] rounded-tr-none rounded-bl-none outline-none`}
                onClick={() => forgotPassword()}
              >
                {loading ? "Loading..." : "Submit"}
              </button>
            </div>
            <div>
              <Link to="/signin">
                <button
                  type="button"
                  className={`border active:scale-95 transition transform duration-100 ease-in-out text-lg font-semibold text-white text-center px-6 w-full h-[56px] bg-gradient-to-l from-Purple to-VividBlue rounded-tl-[30px] rounded-br-[30px] rounded-tr-none rounded-bl-none outline-none`}
                >
                  {/* {t("Back to Login")} */}
                  Back to Login
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Resetpassword;
