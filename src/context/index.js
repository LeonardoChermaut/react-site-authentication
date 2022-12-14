import React from "react";
import { createContext, useEffect, useState } from "react";
import createBrowserHistory from "../history/index";
import { LOCALHOST_API} from "../service/localhost-api/Api";
import { AlertRequest } from "../component/Alert/AlertRequest";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  let history = createBrowserHistory();
  const [token, setToken] = useState("");

  const TOKEN = localStorage.getItem("token");
;
  const addStorage = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  useEffect(() => {
    (() => {
      TOKEN ? setToken(TOKEN) : setToken("");
    })();
  }, []);

  const signIn = async (user) => {
    try {
      const api = await LOCALHOST_API.post("/login", user);
      const { data: token } = await api;
      addStorage(token);
    } catch (e) {
      AlertRequest({ title: `${e}`, icon: "error" });
    }
  };

  const signOut = () => {
    setToken("");
    localStorage.clear();
    localStorage.removeItem("token");
    if (!localStorage.getItem("token")) {
      history.push("/login");
      window.location.reload();
    }
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
};

export default UserContext;
