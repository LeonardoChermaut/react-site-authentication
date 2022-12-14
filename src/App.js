import { React, useContext } from "react";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Register } from "./pages/Register/Register";
import { Profile } from "./pages/Profile/Profile";
import { MemorizedFooter } from "./component/Footer/Footer";
import Context from "../src/context/index";

export default function App() {
  const { signed } = useContext(Context);

  return (
    <>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route index path="*" element={<Navigate to="/login" replace />} />
        {signed ? (
          <>
            <Route element={<Home />} exact path="/home" />
            <Route element={<Profile />} exact path="/profile" />
          </>
        ) : (
          <Route exact path="*" element={<Login />} />
        )}
      </Routes>
      <MemorizedFooter />
    </>
  );
}
