import React, { useEffect, useState } from "react";
import { FaUser, FaSearch, FaSignOutAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import useAuth from "../hooks/useAuth";
import avatar from "./gorilla.png";
import Buttonss from "./Customersupport";
const SideBar = () => {
  const { auth, logout } = useAuth();
  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate("/auth");
  };
  useEffect(() => {
    console.log(auth);
  }, [auth]);

  return (
    <div className="w-72 bg-bgOne p-6 z-10 fixed left-0 top-14 h-screen">
      <>
        {auth && auth.user.id ? (
          <>
            <div className="flex flex-col items-start mb-6">
              <img
                src={auth.user.avatar || avatar}
                alt="User Avatar"
                className="w-24 h-24 mb-4"
              />
              <h3 className="text-xl font-semibold text-teal-900">
                {auth.user.name || "No Username"}
              </h3>
              <p className="text-gray-600">{auth.user.email}</p>
            </div>

            <ul className="space-y-4">
              <Link to="/profile" className="flex items-center space-x-2">
                <span className="text-2xl">
                  <FaUser />
                </span>
                <span className="text-lg font-medium">My profile</span>
              </Link>
              <hr className="border-gray-400" />

              {/* Conditionally render Trade History if realTradeAllowed is true */}
              {auth.currAccType === "real" ? (
                <>
                  <li className="flex items-center space-x-2">
                    <span className="text-2xl">
                      <FaSearch />
                    </span>
                    <Link to="/history" className="text-lg font-medium">
                      Trade History
                    </Link>
                  </li>
                  <hr className="border-gray-400" />
                </>
              ) : null}

              <li
                className="flex items-center space-x-2 cursor-pointer"
                onClick={logout}
              >
                <span className="text-2xl">
                  <FaSignOutAlt />
                </span>
                <span className="text-lg font-medium">Log Out</span>
              </li>
              <hr className="border-gray-400" />
              <li className="flex flex-col gap-3">
                <Link to="/" className="text-lg font-medium">
                  Home
                </Link>

                <Link to="/chat" className="text-lg font-medium">
                  synthobot
                </Link>
                <Link to="/customer-support" className="text-lg font-medium">
                  Community Engagement
                </Link>
                <Link to="/customer" className="text-lg font-medium">
                 Customer Support
                </Link>
                <Link to="/about" className="text-lg font-medium">
                About
              </Link>
              <Link to="/#faqs" className="text-lg font-medium">
                FAQs
              </Link>
              </li>
            </ul>
          </>
        ) : (
          <div className="flex flex-col items-start mb-6">
            <li className="flex flex-col gap-3">
              <Link to="/" className="text-lg font-medium">
                Home
              </Link>
              <Link to="/about" className="text-lg font-medium">
                About
              </Link>
              <Link to="/#faqs" className="text-lg font-medium">
                FAQs
              </Link>
              <Link to="/chat" className="text-lg font-medium">
                Customer support
              </Link>
              <Link to="/customer-support" className="text-lg font-medium">
                Support
              </Link>
            </li>

            <button
              className="px-4 py-2 bg-primary text-white font-medium rounded mt-4"
              onClick={navigateLogin}
            >
              Log in
            </button>
          </div>
        )}
      </>
    </div>
  );
};

export default SideBar;
