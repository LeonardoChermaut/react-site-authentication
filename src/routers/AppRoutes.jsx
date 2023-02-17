import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login, Home, Register } from "../pages/index";
import { UserPerfil } from "../pages/Perfil/Profile";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Home />} path="/home" />
      <Route element={<Login />} exact path="/" />
      <Route element={<Register />} exact path="/register" />
      <Route element={<UserPerfil />} exact path="/profile" />
    </Routes>
  );
};
