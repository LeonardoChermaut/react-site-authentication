import React, {
  createContext,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from "react";
import {
  displayError,
  PATH_USER_LOGIN,
  PATH_USER_CONTEXT,
  ERROR_LOGIN_MESSAGE,
} from "../utils/utils";
import { localhost } from "./index";
import {
  headers,
  saveUserToStorage,
  loadUserFromStorage,
  clearUserFromStorage,
} from "../token/index";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(loadUserFromStorage);

  const loadUserDataFromServer = useCallback(async () => {
    try {
      const { data: user } = await localhost.get(PATH_USER_CONTEXT, headers);
      setUser(user);
      return user;
    } catch (error) {
      displayError(error);
    }
  }, []);

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

  const isSignedIn = useMemo(() => !!user, [user]);

  const value = useMemo(
    () => ({
      user,
      userDataContext: loadUserDataFromServer,
      signIn,
      signed: isSignedIn,
      signOut,
    }),
    [user, loadUserDataFromServer, signIn, isSignedIn, signOut]
  );

  useEffect(() => {
    loadUserDataFromServer();
  }, [loadUserDataFromServer]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
