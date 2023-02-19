import { Fragment, React } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Register, Profile, Home, Login } from "./pages/index";
import { MemorizedFooter } from "./components/imports/index";
import { PrivateRoute } from "./routers/PrivateRoute";

export const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route index path="*" element={<Navigate to="/login" replace />} />
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
      </Routes>
      <MemorizedFooter />
    </Fragment>
  );
};
