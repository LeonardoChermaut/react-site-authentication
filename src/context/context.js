import { createContext, useEffect, useState } from "react";
import { LOCALHOST } from "../service/localhost-api/Api";
import { LOCALHOST_API } from "../service/localhost-api/Api";
import { AlertRequest } from "../component/sweetalert/AlertRequest";

export const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadingStoreData = async () => {
      const storageUser = localStorage.getItem("user");
      const storageToken = localStorage.getItem("token");
      if (storageUser && storageToken) {
        setUser(storageUser);
      }
    };
    loadingStoreData();
  }, []);

  const addStorage = (token) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(token));
  };

  const signIn = async (user) => {
    try {
      const { data: token } = await LOCALHOST.post("/login", user);
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
        signIn,
        signed: !!user,
        signOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
