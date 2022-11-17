import React from "react";
import API_URL from "../service/BaseApi/Api";
import { createContext, useEffect, useState } from "react";
import AlertRequest from "../component/Alert/AlertRequest";

export const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const userToken = async () => localStorage.getItem("token");
    if (userToken) {
      setToken(userToken);
    }
  }, []);

  const signIn = (data) => {
    const response = API_URL.post("/login", data);
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

  const signOut = () => localStorage.clear();

  return (
    <UserContext.Provider
      value={{
        token,
        signed: !!token,
        signIn,
        signOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
