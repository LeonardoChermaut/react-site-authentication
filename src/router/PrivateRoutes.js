import context from "../context";
import { useContext } from "react";
import { Outlet, Navigate, Routes } from "react-router-dom";

const PrivateRoutes = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default PrivateRoutes;
