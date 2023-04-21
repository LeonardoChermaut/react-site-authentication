import React, {
  createContext,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from "react";
import {
  PATH_USER_CONTEXT,
  PATH_USER_LOGIN,
  clearUserFromStorage,
  displayError,
  loadUserFromStorage,
  saveUserToStorage,
  ERROR_LOGIN_MESSAGE,
} from "../utils/utils";
import { localhost } from "./index";
import { headers } from "../token/index";

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

  const signIn = useCallback(async (user) => {
    try {
      const { data: token } = await localhost.post(PATH_USER_LOGIN, user);
      saveUserToStorage(token, user);
      setUser(user);
    } catch (error) {
      displayError(error, ERROR_LOGIN_MESSAGE);
    }
  }, []);

  const signOut = useCallback(() => {
    setUser(null);
    clearUserFromStorage();
  }, []);

  const isSignedIn = !!user;

  const userDataContext = useCallback(async () => {
    const user = await loadUserDataFromServer(setUser);
    setUser(user);
  }, []);

  const value = useMemo(() => ({
      user,
      userDataContext,
      signIn,
      signed: isSignedIn,
      signOut,
    }),
    [user, userDataContext, signIn, isSignedIn, signOut]
  );

  useEffect(() => {
    loadUserDataFromServer(setUser);
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
