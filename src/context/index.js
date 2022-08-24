import React from "react";
import { createContext, useEffect, useState } from "react";
import AlertRequest from "../component/Alert/AlertRequest";
import API_URL from "../service/BaseApi/Api";

export const UserContext = createContext();
export function UserProvider({ children }) {
  const [token, setToken] = useState(null);

  useEffect(() => {
    async function storageData() {
      const jwtToken = localStorage.getItem("token");
      if (jwtToken) {
        setToken(jwtToken);
      }
    }
    storageData();
  }, []);

  async function signIn(data) {
    try {
      let res = await API_URL.post("/login", data);
      setToken(res.data);
      API_URL.defaults.headers.common["Authorization"] = `Bearer ${res.data}`;
      localStorage.setItem("token", res.data);
    } catch (error) {
      AlertRequest({
        title: "Usuário ou senha inválida",
        icon: "error",
      });
    }
  }

  function signOut() {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.clear();
  }

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
}

export default UserContext;
