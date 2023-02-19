import React from "react";
import { Route } from "react-router-dom";
import { Login } from "../pages/Login/Login";
import { Home } from "../pages/Home/Home";
import { Register } from "../pages/Register/Register";
import { Profile } from "../pages/Profile/Profile";
import { PrivateRoute } from "./PrivateRoute";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Route element={<Login />} exact path="/login" />
      <Route element={<Register />} exact path="/register" />
      <Route
        path="/home"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />
    </BrowserRouter>
  );
};
