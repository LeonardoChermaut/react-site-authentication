import React, { createContext, useEffect, useState } from "react";
import { localhost } from "./index";
import { headers } from "../token/index";
import {
  PATH_USER_CONTEXT,
  PATH_USER_LOGIN,
  clearUserFromStorage,
  displayError,
  loadUserFromStorage,
  saveUserToStorage,
  ERROR_LOGIN_MESSAGE,
} from "../utils/utils";

export const UserContext = createContext();

const loadUserDataFromServer = async (setUser) => {
  try {
    const { data: user } = await localhost.get(PATH_USER_CONTEXT, headers);
    setUser(user);
    return user;
  } catch (error) {
    displayError(error);
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
      displayError(error, ERROR_LOGIN_MESSAGE);
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
