import React from "react";
import { FcApproval, FcDisapprove } from "react-icons/fc";
import { FaAngleDown } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { FaPencil } from "react-icons/fa6";
import ProfileUpdate from "./Profile/ProfileUpdate";
import { AiFillDelete } from "react-icons/ai";
// import PasswordUpdate from "./Profile/PasswordUpdate";
import PassUpdate from "./Profile/PassUpdate";
import DeleteAccount from "./Profile/DeleteAccount";
const HomeHero = ({
  isProfile,
  showUpdate,
  showPasswordUpdate,
  showDeleteAccount,
  updateProfile,
  updatePassword,
  deleteAccount,
}) => {
  const { auth } = useAuth();
  const userData = auth.user;
  const verified = userData.verified;
  const name = userData.name || "No Username";

  const GetLetters = (name) => {
    return name
      .split(" ")
      .slice(0, 2) // Get the first 2 words
      .map((word) => word.charAt(0))
      .join("");
  };

  const formatTimeStamp = (timestamp) => {
    const date = new Date(timestamp);
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZoneName: "short",
    };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return (
    <>
      <div>
        <div className="py-10 shadow rounded-md bg-primaryblue-50 px-5 mt-8">
          <div className="flex flex-col md:flex-row md:items-start items-center justify-between">
            <div className="pb-4 flex items-center gap-4">
              {userData.avatar ? (
                <img
                  src={userData.avatar}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full"
                />
              ) : (
                <div className="w-24 h-24 bg-primaryblue-200 rounded-full flex items-center justify-center text-white text-2xl font-semibold">
                  {GetLetters(name)}
                </div>
              )}
              <h3 className="text-2xl font-semibold">{userData.email}</h3>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16">
            <div className="flex flex-col flex-grow">
              <span className="text-sm text-gray-400">
                Identity Verification
              </span>
              <span
                className={`text-base font-bold ${
                  verified ? "text-primary" : "text-red-600"
                }`}
              >
                {verified ? (
                  <div className="flex items-center gap-1">
                    <span>Verified</span>
                    <FcApproval />
                  </div>
                ) : (
                  <div className="flex items-center gap-1">
                    <span>Not Verified</span>
                    <FcDisapprove className="text-xl" />
                  </div>
                )}
              </span>
            </div>
            <div className="flex flex-col flex-grow">
              <span className="text-sm text-gray-400">Time Zone</span>
              <span className="text-base font-semibold text-primary">
                {timezone}
              </span>
            </div>
            <div className="flex flex-col flex-grow">
              <span className="text-sm text-gray-400">Last Login</span>
              <span className="text-base font-semibold text-primary">
                {userData.lastLogin ? formatTimeStamp(userData.lastLogin) : ""}
              </span>
            </div>

            {isProfile ? (
              <>
                <div className="flex flex-col gap- flex-grow">
                  <span className="text-sm text-gray-400">Update Profle</span>
                  <button
                    className="text-primary text-base font-semibold flex gap-3 items-center"
                    onClick={updateProfile}
                  >
                    Update <FaPencil />
                  </button>
                </div>
                <div className="flex flex-col gap- flex-grow">
                  <span className="text-sm text-gray-400">Update Password</span>
                  <button
                    className="text-primary text-base font-semibold flex gap-3 items-center"
                    onClick={updatePassword}
                  >
                    Password <FaPencil />
                  </button>
                </div>
                <div className="flex flex-col gap- flex-grow">
                  <span className="text-sm text-red-400">Delete</span>
                  <button
                    className="text-red-600 text-base font-semibold flex gap-3 items-center"
                    onClick={deleteAccount}
                  >
                    Delete <FaPencil />
                  </button>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
      {showUpdate && isProfile && <ProfileUpdate onClose={updateProfile} />}
      {showPasswordUpdate && isProfile && (
        <PassUpdate onClose={updatePassword} />
      )}
      {showDeleteAccount && isProfile && (
        <DeleteAccount onClose={deleteAccount} />
      )}
    </>
  );
};

export default HomeHero;
