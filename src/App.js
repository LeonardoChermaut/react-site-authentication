import { Fragment, React } from "react";
import { Login } from "./pages/Login/Login";
import { Home } from "./pages/Home/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import { Register } from "./pages/Register/Register";
import { Profile } from "./pages/Profile/Profile";
import { MemorizedFooter } from "./component/Footer/Footer";
import { PrivateRoute } from "./router/PrivateRoute";

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
