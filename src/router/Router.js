import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import UserPerfil from "../pages/Perfil/Profile";
import PrivateRoutes from "./PrivateRoutes";

export const AppRoutes = () => (
  <Routes>
    <Route element={<PrivateRoutes />} />
    <Route element={<Home />} path="/home" />
    <Route element={<Login />} exact path="/login" />
    <Route element={<Register />} exact path="/register" />
    <Route element={<UserPerfil />} exact path="/profile" />
  </Routes>
);
