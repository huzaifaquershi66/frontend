import React, { useState } from "react";
import HomeHero from "../Components/HomeHero";
import TradingHistory from "./TradingHistory";
import { useNavigate } from "react-router-dom";
const ProfileScreen = () => {
  // const navigate = useNavigate();
  const [showProfileUpdate, setShowProfileUpdate] = useState(false);
  const [showPasswordUpdate, setShowPasswordUpdate] = useState(false);
  const [DeleteAccount, setDeleteAccount] = useState(false);

  const toggleProfileUpdate = () => {
    setShowProfileUpdate(!showProfileUpdate);
  };
  const togglePasswordUpdate = () => {
    setShowPasswordUpdate(!showPasswordUpdate);
  };
  const toggleDeleteAccount = () => {
    setDeleteAccount(!DeleteAccount);
  };

  return (
    <div>
      <div className="border-b">
        <HomeHero
          showUpdate={showProfileUpdate}
          showPasswordUpdate={showPasswordUpdate}
          showDeleteAccount={DeleteAccount}
          updatePassword={togglePasswordUpdate}
          updateProfile={toggleProfileUpdate}
          deleteAccount={toggleDeleteAccount}
          isProfile={true}
        />
      </div>
      <div className="">
        <TradingHistory />
      </div>
    </div>
  );
};

export default ProfileScreen;
