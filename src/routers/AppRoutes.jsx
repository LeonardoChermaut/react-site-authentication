import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Login, Home, Register, Profile } from "../pages/index";
import { PrivateRoute } from "./PrivateRoute";

export const AppRoutes = () => {
  return (
    <Routes>
    <Route exact path="/login" element={<Login />} />
    <Route exact path="/register" element={<Register />} />
    <Route index path="*" element={<Navigate to="/login" replace />} />

    <Route path="/home" element={ <PrivateRoute><Home /></PrivateRoute> }/>
    <Route path="/profile" element={ <PrivateRoute><Profile /></PrivateRoute> }/>
  </Routes>
  );
};
