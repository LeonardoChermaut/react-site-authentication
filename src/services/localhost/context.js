import { createContext, useEffect, useState } from "react";
import { fetchLocalApi } from "./index";
import { AlertRequest } from "../../components/sweetalert/AlertRequest";
import { header } from "./token";

export const UserContext = createContext();

const loadUserFromStorage = () => {
  const storageUser = localStorage.getItem("user");
  if (storageUser) {
    return JSON.parse(storageUser);
  }
  return undefined;
};

const saveUserToStorage = (token, user) => {
  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(user));
};

const clearUserFromStorage = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

const loadUserDataFromServer = async (setUser) => {
  try {
    const { data: user } = await fetchLocalApi.get("/api/user/context", header);
    setUser(user);
    return user;
  } catch (error) {
    console.error("Error:", error.message);
    return undefined;
  }
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(loadUserFromStorage());

  const signIn = async (user) => {
    try {
      const { data: token } = await fetchLocalApi.post("/login", user);
      saveUserToStorage(token, user);
      setUser(user);
    } catch (error) {
      console.error("Error on sign in", error.message);
      AlertRequest({ title: "Ocorreu um erro", icon: "error" });
    }
  };

  const signOut = () => {
    setUser(null);
    clearUserFromStorage();
  };

  const isSignedIn = !!user;

  const value = {
    user,
    userDataContext: () => loadUserDataFromServer(setUser),
    signIn,
    signed: isSignedIn,
    signOut,
  };

  useEffect(() => {
    (async () => loadUserDataFromServer(setUser))();
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
