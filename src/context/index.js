import React from "react";
import { createContext, useEffect, useState } from "react";
import AlertRequest from "../component/alert/AlertRequest";
import createBrowserHistory from "../history/index" 
import TOKEN from "../service/localhost-api/getToken";
import LOCALHOST from "../service/localhost-api/Api";

export const UserContext = createContext();
const history = createBrowserHistory();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState("");

  useEffect(() => {(() => { TOKEN ? setToken(TOKEN) : setToken("")})()}, []);

  const signIn = async (user) => {
    const API = await LOCALHOST.post("/login", user);
    let { data: token } = API;
    console.log(token)
    try {
      setToken(token);
      API.headers['Authorization'] = `Bearer ${token}`;
      localStorage.setItem("token", token);
    } catch (e) {
      AlertRequest({
        title: `${e}`,
        icon: "error",
      });
    }
  };

  const signOut = () => {
    setToken("");
    localStorage.clear();
    LOCALHOST.defaults.headers.common["Authorization"] = undefined;
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