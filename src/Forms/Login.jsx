import React, { useState } from "react";
import useInput from "../hooks/useInput";
import { toast } from "react-toastify";
import axios, { BASE_URL } from "../api/axios";
import { LuLoader2 } from "react-icons/lu";
import useAuth from "../hooks/useAuth";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";
const Login = () => {
  const [email, emailAtribs, resetEmail] = useInput("");
  const [password, passwordAtribs, resetPassword] = useInput("");
  const [loading, setLoading] = useState(false);
  const { setAuth } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  // const path = location.state?.from?.path || "/";
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    setLoading(true);

    try {
      const user = {
        email,
        password,
      };
      const response = await axios.post("/auth", JSON.stringify(user), {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true, // This should be part of the same configuration object
      });
      console.log(response);

      // console.log(response.data);
      const updatedAuth = {
        ...response.data,
        currAccType: "demo",
      };
      console.log("update auth", updatedAuth);
      setAuth(updatedAuth);
      localStorage.setItem("auth", JSON.stringify(updatedAuth));
      toast.success("Login Successful", {
        autoClose: 2000,
      });

      navigate("/demo-trading");
    } catch (error) {
      console.log(error);
      toast.error("Login Failed", {
        autoClose: 2000,
      });
    } finally {
      setLoading(false);
    }
    resetEmail();
    resetPassword();
  };
  return (
    <div className="">
      <h3 className="font-bold text-3xl py-1">Welcome</h3>
      <span className="font-medium text-base">Create Account to Continue</span>
      <form action="" onSubmit={handleSubmit}>
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
              placeholder="Enter a valid email "
            />
          </div>
          <div className="mt-2">
            <label htmlFor="email" className="font-semibold text-base">
              Password
            </label>
            <input
              type="password"
              id="password"
              {...passwordAtribs}
              className="w-full mt-1  p-2 rounded bg-bgOne"
              placeholder="Enter a valid email"
            />
          </div>
          <div className="mt-2">
            <span className="text-sm ">
              Dont have an account{" "}
              <Link to="signup" className="text-primary font-semibold">
                Register
              </Link>
            </span>
          </div>
          <div className="mt-8 flex flex-col gap-5">
            <button className="w-full p-2 rounded justify-center bg-primary text-white font-medium text-xl">
              {loading ? (
                <span className="flex items-center justify-center gap-1">
                  Logging in
                  <LuLoader2 className="animate-spin font-semibold" />
                </span>
              ) : (
                "Login"
              )}
            </button>
            <div className="cursor-pointer">
              <a
                href={`${BASE_URL}/auth/google`}
                className="flex items-center justify-center bg-white border border-gray-300 rounded-lg py-2 px-4 hover:bg-gray-100 transition duration-200"
              >
                <FaGoogle className="text-red-500 mr-2" size={20} />
                <span className="text-gray-800 font-bold">
                  Sign in with Google
                </span>
              </a>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
