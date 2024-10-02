import React,{useEffect} from "react";
import hero from "./assets/8asdas52 1 (1).png";
import bgImage from "./assets/candlesticks-bg.png";
import fontBrand from "./assets/Group.png";
import { useNavigate } from "react-router-dom";
import FAQSection from "../Components/LandingPage/FAQSection";
import AboutUs from "../Components/LandingPage/AboutUs";
import { useLocation } from "react-router-dom";
const MainLandingPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const navigateLogin = () => {
    navigate("/auth/signup");
  };
  useEffect(() => {
    if (location.hash === "#faqs") {
      const element = document.getElementById("faqs");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <div>
      <div
        className="relative min-h-screen w-full bg-cover bg-center flex flex-col md:flex-row"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        {/* Left Side: MacBook Image */}
        <div className="flex items-center justify-center w-full md:w-1/2 p-4">
          <img
            src={hero}
            alt="MacBook"
            className="max-w-full h-auto object-contain"
          />
        </div>

        {/* Right Side: Text and Button */}
        <div className="flex items-center justify-center w-full p-4 md:p-8 md:w-1/2">
          <div className="flex flex-col items-center md:items-start w-full max-w-2xl text-center md:text-left">
            <img
              src={fontBrand}
              alt="Brand Logo"
              className="mb-4 mx-auto md:mx-0 w-32 h-auto" // Adjust size for smaller screens
            />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
              Simplify your trading, amplify your returns.
            </h1>
            <button
              onClick={navigateLogin}
              className="mt-6 px-4 py-3 md:px-6 md:py-4 bg-primary text-white text-sm sm:text-base md:text-lg rounded hover:bg-primaryblue-950 transition"
            >
              Register Now
            </button>
          </div>
        </div>
      </div>

      <div >
        <AboutUs />
      </div>
      <div id="faqs" >
        <FAQSection />
      </div>
    </div>
  );
};

export default MainLandingPage;
