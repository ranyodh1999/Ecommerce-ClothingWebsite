import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./Context/AuthContext";

const PrivateRoute = ({ element, redirectTo = "/login" }) => {
  const { user } = useAuth();

  // Debugging log
  console.log("PrivateRoute - User:", user);

  // Check if user is logged in
  return user ? element : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
