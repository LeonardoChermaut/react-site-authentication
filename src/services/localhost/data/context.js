import React, { createContext, useEffect, useState } from "react";
import { localhost } from "./index";
import { headers } from "../token/index";
import { ERROR_LOGIN_MESSAGE } from "../utils/index";
import {
  PATH_USER_CONTEXT,
  PATH_USER_LOGIN,
  clearUserFromStorage,
  loadUserFromStorage,
  saveUserToStorage,
} from "../utils/utils";
import { AlertRequest } from "../../../components/sweetalert/AlertRequest";

export const UserContext = createContext();

const loadUserDataFromServer = async (setUser) => {
  try {
    const { data: user } = await localhost.get(PATH_USER_CONTEXT, headers);
    setUser(user);
    return user;
  } catch (error) {
    console.error(error.message);
    return undefined;
  }
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(loadUserFromStorage());

  const signIn = async (user) => {
    try {
      const { data: token } = await localhost.post(PATH_USER_LOGIN, user);
      saveUserToStorage(token, user);
      setUser(user);
    } catch (error) {
      console.error(error.message);
      AlertRequest({
        title: ERROR_LOGIN_MESSAGE.message,
        icon: ERROR_LOGIN_MESSAGE.icon,
      });
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
    (() => loadUserDataFromServer(setUser))();
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
