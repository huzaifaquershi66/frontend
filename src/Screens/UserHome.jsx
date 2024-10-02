import React from "react";
import HomeHero from "../Components/HomeHero";
import MarketsHome from "../Components/MarketsHome";
import useAuth from "../hooks/useAuth";
import MainLandingPage from "../LandingPage/MainLandingPage";
import DemoTrading from "../Components/Trades/DemoTrading";
import RealTrading from "../Components/Trades/RealTrading";

const UserHome = () => {
  const { auth } = useAuth(); // Assuming auth contains the entire object

  const Authenticated = () => (
    <div>{auth.currAccType === "demo" ? <DemoTrading /> : <RealTrading />}</div>
  );

  const NotAuthenticated = () => {
    return (
      <div>
        <MainLandingPage />
      </div>
    );
  };

  return (
    <div>{auth && auth.user ? <Authenticated /> : <NotAuthenticated />}</div>
  );
};

export default UserHome;
