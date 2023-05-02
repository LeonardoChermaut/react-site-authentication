import React, {
  createContext,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from "react";
import {
  displayError,
  MESSAGES,
  API,
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
      const { data: user } = await localhost.get(API.path.context, headers);
      setUser(user);
      return user;
    } catch (error) {
      displayError(error);
    }
  }, []);

  const signIn = useCallback(async (user) => {
    try {
      const { data: token } = await localhost.post(API.path.login, user);
      saveUserToStorage(token, user);
      setUser(user);
    } catch (error) {
      displayError(error, MESSAGES.error.login);
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
