import React from "react";
import { createContext, useEffect, useState } from "react";
import alert from "../component/alert/AlertRequest";
import createBrowserHistory from "../history/index";
import isToken from "../service/localhost-api/getToken";
import {LOCALHOST_API} from "../service/localhost-api/Api";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const history = createBrowserHistory();
  const [token, setToken] = useState("");

  const intercepetToken = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  useEffect(() => {
    (() => {
      isToken ? setToken(isToken) : setToken("");
    })();
  }, []);

  const signIn = async (user) => {
    const API = await LOCALHOST_API.post("/login", user);
    const { data: token } = API;
    try {
      intercepetToken(token);
      API.headers["Authorization"] = `Bearer ${token}`;
    } catch (e) {
      alert({ title: `${e}`, icon: "error" });
    }
  };

  const signOut = () => {
    setToken("");
    localStorage.removeItem("token", token);
    history.push("/login");
  };

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
