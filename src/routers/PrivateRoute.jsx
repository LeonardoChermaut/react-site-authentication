import { React, useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../api/host/index";

export const PrivateRoute = ({ children }) => {
  const { signed: isSigned } = useContext(UserContext);

  if (!isSigned) return <Navigate to="/login" replace />;
  return children;
};
