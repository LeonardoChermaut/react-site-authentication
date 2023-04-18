import { React, useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../services/localhost/data/index";

export const PrivateRoute = ({ children }) => {
  const { signed } = useContext(UserContext);

  if (!signed) return <Navigate to="/login" replace />;
  return children;
};
