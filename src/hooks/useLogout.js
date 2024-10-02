import useAuth from "./useAuth";

const useLogout = () => {
  const { setAuth } = useAuth();

  const logout = () => {
    // Clear authentication data from local storage
    localStorage.removeItem("auth");
    // Update context state
    setAuth(null);
  };

  return logout;
};

export default useLogout;
