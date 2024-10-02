import React from "react";
import { Routes, Route } from "react-router-dom";
// import AuthScreen from "./Screens/AuthScreen";
import Login from "./Forms/Login";
import Signup from "./Forms/Signup";
import AuthLayout from "./Layout/AuthLayout";
import GlobalLayout from "./Layout/GlobalLayout";
import UserHome from "./Screens/UserHome";
import TradingChartsScreen from "./Screens/TradingChartsScreen";
import MarketsScreen from "./Screens/MarketsScreen";
import RequireAuth from "./utils/RequireAuth";
import TradingHistory from "./Screens/TradingHistory";
import VerifyOTP from "./Forms/VerifyOTP";
import ProfileScreen from "./Screens/ProfileScreen";
import ChatBot from "./Screens/ChatBot";
import DemoTrading from "./Components/Trades/DemoTrading";
import RealTrading from "./Components/Trades/RealTrading";
import AboutScreen from "./Screens/AboutScreen";
import ChatBox from "./Components/ChatBox";
import CustomerSupportPage from "./Screens/CustomerSupportPage";
import Buttonss from "./Components/Customersupport";
// import Chat from "./Components/Chat";
const App = () => {
  // useEffect(() => {
  //   const savedUser = localStorage.getItem("auth");
  //   if (savedUser) {
  //     setUser(JSON.parse(savedUser));
  //   } else {
  //     // Optionally, check with the server if the session is still valid
  //     axios.get("/api/check-auth", { withCredentials: true }).then((response) => {
  //       setUser(response.data);
  //     });
  //   }
  //   setLoading(false);
  // }, []);

  return (
    <Routes>
    {/* Authentication Routes */}
    <Route path="/auth" element={<AuthLayout />}>
      <Route index element={<Login />} />
      <Route path="signup" element={<Signup />} />
    </Route>

    {/* Static Routes */}
    <Route path="/privacy-policy" element={<h1>Privacy Policy</h1>} />
    <Route path="/terms" element={<h1>Terms of Service</h1>} />
    <Route path="/" element={<GlobalLayout />}>
      <Route index element={<UserHome />} />
      <Route path="about" element={<AboutScreen />} />
      <Route path="customer-support" element={<CustomerSupportPage />} />
      <Route path="customer" element={<Buttonss/>}/>
      <Route path="chat" element={<ChatBot />} />
      <Route path="demo-trading" element={<DemoTrading />} />

      {/* Protected Routes */}
      <Route element={<RequireAuth />}>
        <Route path="profile" element={<ProfileScreen />} />
        <Route path="verify" element={<VerifyOTP />} />
        <Route path="real-trading" element={<RealTrading />} />
        <Route path="history" element={<TradingHistory />} />
      </Route>
    </Route>

    {/* 404 Not Found */}
    <Route path="*" element={<h1>404 - Not Found</h1>} />
  </Routes>
  );
};

export default App;
