import { createContext, useEffect, useState } from "react";
import { fetchLocalApi, token } from "./index";
import { AlertRequest } from "../../components/sweetalert/AlertRequest";

export const UserContext = createContext();

const loadUserFromStorage = () => {
  const storageUser = localStorage.getItem("user");
  if (storageUser) {
    return JSON.parse(storageUser);
  }
  return null;
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
    const { data } = await fetchLocalApi.get("/api/user/context", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setUser(data);
    return data;
  } catch (error) {
    console.error("Failed to fetch user by context", error);
    return null;
  }
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(loadUserFromStorage());

  useEffect(() => {
    loadUserDataFromServer(setUser);
  }, []);

  const signIn = async (userData) => {
    try {
      const { data: token } = await fetchLocalApi.post("/login", userData);
      saveUserToStorage(token, userData);
      setUser(userData);
    } catch (error) {
      console.error("Error on sign in", error);
      AlertRequest({ title: "Ocorreu um erro", icon: "error" });
    }
  };

  const signOut = () => {
    setUser(null);
    clearUserFromStorage();
  };

  const isSignedIn = !!user;

  return (
    <UserContext.Provider
      value={{
        user,
        userDataContext: () => loadUserDataFromServer(setUser),
        signIn,
        signed: isSignedIn,
        signOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
