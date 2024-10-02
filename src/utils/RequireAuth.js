import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = () => {
  const { auth } = useAuth();
  const location = useLocation();

  // If auth is null or undefined, show a loading spinner (or return null) until it's loaded
  if (auth === undefined) {
    return <span>
        Loading...
    </span>; // Or return a loading spinner
  }

  return auth?.user ? (
    <Outlet />
  ) : (
    <Navigate to="/auth" state={{ from: location.pathname }} />
  );
};

export default RequireAuth;
