import React from "react";
import API_URL from "../service/BaseApi/Api";
import { createContext, useEffect, useState } from "react";
import AlertRequest from "../component/alert/AlertRequest";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
    }
  }, []);

  const signIn = async (user) => {
    const response = await API_URL.post("/login", user);
    try {
      setToken(response.data);
      API_URL.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data}`;
      localStorage.setItem("token", response.data);
    } catch (e) {
      AlertRequest({
        title: "Usuário ou senha inválida",
        icon: "error",
      });
    }
  };

  const signOut = () => {
    setToken("");
    localStorage.clear();
    API_URL.defaults.headers.common["Authorization"] = undefined;
    history.push("/login");
  };

  return (
    <UserContext.Provider
      value={{
        token,
        signIn,
        signed: !!token,
        signOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
