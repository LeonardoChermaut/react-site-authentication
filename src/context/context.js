import { createContext, useEffect, useState } from "react";
import { LOCALHOST_API } from "../service/localhost-api/Api";
import { AlertRequest } from "../component/sweetalert/AlertRequest";

export const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  
  const addStorage = (token) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(token));
  };
  
  useEffect(() => {
    (async function () {
      const storageToken = localStorage.getItem("token");
      const storageUser = localStorage.getItem("user");
      storageToken && storageUser ? setUser(storageUser) : setUser(null);
    })();
  }, []);

  const signIn = async (user) => {
    try {
      const { data: token } = await LOCALHOST_API.post("/login", user);
      addStorage(token);

    } catch (error) {
      console.error(`error on sign in `, error);
      AlertRequest({ title: `Ocorreu um erro`, icon: "error" });
    }
  };

  const signOut = () => {
    setUser(null);
    localStorage.clear();
  };

  return (
    <UserContext.Provider
      value={{
        user,
        signed: !!user,
        signIn,
        signOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
