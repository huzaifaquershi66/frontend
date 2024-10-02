import React from "react";
import useAuth from "../hooks/useAuth";
import DemoTrading from "../Components/Trades/DemoTrading";
import RealTrading from "../Components/Trades/RealTrading"; // Assuming you have a RealTrading component
import { useNavigate } from "react-router-dom";
const TradingChartsScreen = () => {
  const { auth } = useAuth();
  const navigate = useNavigate();
  console.log("Curr acc", auth.currAccType);

  return (
    <div>
      {auth.currAccType === "demo" ? (
        auth && auth.user.demoAllowed ? (
          <DemoTrading />
        ) : (
          navigate("/")
        ) // Render demo trading component if in demo mode
      ) : (
        <RealTrading /> // Render real trading component if in real mode
      )}
    </div>
  );
};

export default TradingChartsScreen;
