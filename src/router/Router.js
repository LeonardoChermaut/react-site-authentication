import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import UserPerfil from "../pages/Perfil/UserPerfil";
import PrivateRoutes from "./PrivateRoutes";

const Routes = () => (
  <BrowserRouter>
    <Route element={<PrivateRoutes />} />
    <Route element={<Home />} path="/home" />
    <Route element={<Login />} exact path="/login" />
    <Route element={<Register />} exact path="/register" />
    <Route element={<UserPerfil />} exact path="/register" />
  </BrowserRouter>
);

export default Routes;
