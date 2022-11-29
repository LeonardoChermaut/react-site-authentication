import { React, useContext } from "react";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Register from "./pages/Register/Register";
import UserPerfil from "./pages/Perfil/Profile";
import PrivateRoutes from "./router/PrivateRoutes";
import { MemorizedFooter } from "./component/Footer/Footer";

export default function App() {
  // let navigate = useNavigate();

  return (
    <>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route index path="*" element={<Navigate to="/login" replace />} />
        <Route element={<PrivateRoutes />}>
          <Route element={<Home />} path="/home" />
          <Route element={<UserPerfil />} path="/profile" />
        </Route>
        {/* {isLogged?
          <>
            <Route exact path="/home" element={ navigate("/home")} />
            <Route exact path="/profile" element={<UserPerfil />} />
          </>: <Route exact path="/login" element={<Login />} />
            } */}
      </Routes>
      <MemorizedFooter />
    </>
  );
}
