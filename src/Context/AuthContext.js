import { useState, createContext, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import axios from "../api/axios";
import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // const navigate = useNavigate();
  const [auth, setAuth] = useLocalStorage("auth", null);
  const [currentAccount, setCurrentAccount] = useState("demo");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get("/auth/login/success", {
          withCredentials: true,
        });
        
        // Check if the response contains user data
        if (response.data && response.data.success && response.data.user) {
          console.log(response.data.user);
          setAuth(response.data.user); // Update with user data
        } else {
          // Check local storage if the response does not contain user data
          const storedAuth = localStorage.getItem("auth");
          if (storedAuth) {
            setAuth(JSON.parse(storedAuth)); // Set auth from local storage if available
          } else {
            setAuth(null); // Set to null if local storage is also empty
          }
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
        setAuth(null); // Handle error by setting auth to null
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [setAuth]);

  const logout = async () => {
    try {
      const response = await axios.get("/auth/logout", {
        withCredentials: true,
      });
      console.log(response.data);
      if (response.data.success) {
        setAuth(null); // Clear auth state
        toast.success("Logged out successfully", { autoClose: 2000 });
        window.location.href = "http://localhost:3000/auth";
        // Redirect to login or another appropriate page
      } else {
        toast.error("Logout failed", { autoClose: 2000 });
      }
    } catch (error) {
      console.error("Logout failed:", error);
      toast.error("Logout failed", { autoClose: 2000 });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        auth: auth ?? null, // Handle undefined, setting it to null
        setAuth,
        currentAccount,
        setCurrentAccount,
        logout,
      }}
    >
      {!loading ? children : null}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
