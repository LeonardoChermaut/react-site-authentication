import React from "react";
import { createContext, useEffect, useState } from "react";
import AlertRequest from "../component/Alert/AlertRequest";
import API_URL from "../service/BaseApi/Api";

export const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storageData = async () => {
      const jwtToken = localStorage.getItem("token");
      if (jwtToken) {
        setToken(jwtToken);
      }
    };
    storageData();
  }, []);

  const signIn = async (data) => {
    const res = await API_URL.post("/login", data);
    try {
      setToken(res.data);
      API_URL.defaults.headers.common["Authorization"] = `Bearer ${res.data}`;
      localStorage.setItem("token", res.data);
    } catch (error) {
      AlertRequest({
        title: "Usuário ou senha inválida",
        icon: "error",
      });
    }
  };

  const signOut = () => setToken(null);
  localStorage.removeItem("token");
  localStorage.clear();

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
