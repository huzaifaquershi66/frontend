import React, { useState, useRef } from "react";
import useInput from "../hooks/useInput";
import { toast } from "react-toastify";
import axios from "../api/axios";
import { Link, useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import useAuth from "../hooks/useAuth";

const VerifyOTP = () => {
  const [email, emailAtribs, resetEmail] = useInput("");
  const [otp, setOtp] = useState("");
  const [inputOtp, inputOtpAtribs, resetInputOtp] = useInput(""); // For user input OTP
  const [isOtpSent, setIsOtpSent] = useState(false);
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const form = useRef();

  const generateOtp = () => {
    const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setOtp(newOtp);
    return newOtp;
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    const generatedOtp = generateOtp();

    // Log the email to ensure it's the one you expect
    console.log("Preparing to send OTP to:", email);

    // Set loading state to true
    setLoading(true);

    // First, save the OTP to the server
    try {
      const response = await axios.post(
        "/users/save-otp",
        JSON.stringify({ email, otp: generatedOtp, userId: auth.user.id }), // Use the user-entered email here
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data);

      // If OTP is saved successfully, then send the email
      const templateParams = {
        user_email: email,
        message: generatedOtp,
        from_name: "Syntho Next",
        to_name: auth.user.name || "User",
      };

      const emailResponse = await emailjs.send(
        "service_vhq02r9",
        "template_aob5t88",
        templateParams,
        "pjzs6nn86Dbi-DcX6"
      );

      console.log("EmailJS SUCCESS!", emailResponse.status, emailResponse.text);
      setIsOtpSent(true);
      toast.success("OTP sent and saved successfully", {
        autoClose: 2000,
      });
    } catch (error) {
      // Handle errors from saving OTP or sending email
      setIsOtpSent(false);
      if (error.response) {
        console.error("Error during OTP verification:", error);
        toast.error(error.response.data.message || "Failed to save OTP", {
          autoClose: 2000,
        });
      } else {
        console.log("EmailJS FAILED...", error);
        toast.error("Failed to send OTP", {
          autoClose: 2000,
        });
      }
    } finally {
      // Set loading state back to false
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "/users/verify",
        JSON.stringify({ email: auth.user.email, otp: inputOtp }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data);
      const updateAuth = () => {
        setAuth((prevAuth) => ({
          ...prevAuth,
          user: { ...prevAuth.user, isVerified: true, realTradeAllowed: true },
        }));
      };
      setAuth(updateAuth);
      localStorage.setItem("auth", JSON.stringify(updateAuth));

      toast.success("OTP verified successfully", {
        autoClose: 2000,
      });
      navigate("/");
    } catch (error) {
      console.error("Error during OTP verification:", error);
      toast.error(error.response.data.message, {
        autoClose: 1000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xs mx-auto mt-10">
      <h3 className="font-bold text-3xl py-1">Verify Your Email</h3>
      <span className="font-medium text-base">
        Enter your email to receive OTP
      </span>
      <form>
        <div>
          <div className="mt-4">
            <label htmlFor="email" className="font-semibold text-base">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...emailAtribs}
              className="w-full mt-1 p-2 rounded bg-bgOne"
              placeholder="Enter a valid email"
            />
          </div>
          {isOtpSent && (
            <div className="mt-4">
              <label htmlFor="otp" className="font-semibold text-base">
                OTP
              </label>
              <input
                type="text"
                id="otp"
                {...inputOtpAtribs}
                className="w-full mt-1 p-2 rounded bg-bgOne"
                placeholder="Enter the OTP"
                disabled={!isOtpSent}
              />
            </div>
          )}
          <div className="mt-2">
            <span className="text-sm">
              Already have an account?{" "}
              <Link to="login" className="text-primary font-semibold">
                Login
              </Link>
            </span>
          </div>
          <div className="mt-8">
            {isOtpSent ? (
              <button
                type="submit"
                className="w-full p-2 rounded bg-primary text-white font-semibold text-base"
                onClick={handleVerifyOtp}
              >
                {loading ? "Verifying ..." : "Verify OTP"}
              </button>
            ) : (
              <button
                type="submit"
                onClick={sendEmail}
                className="w-full p-2 rounded bg-primary text-white font-semibold text-base"
              >
                {loading ? "Sending ..." : "Send OTP"}
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default VerifyOTP;
