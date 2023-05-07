import React, {
  createContext,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from "react";
import {
  api,
  MESSAGES,
  API,
  headers,
  saveUserToStorage,
  loadUserFromStorage,
  clearUserFromStorage,
} from "../index";
import { throwErrorAlertRequest } from "../../../components/sweetalert/index";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(loadUserFromStorage);

  const loadUserDataFromServer = useCallback(async () => {
    try {
      const {
        path: { user_context: data },
      } = API;
      const { data: user } = await api.get(data, headers);
      setUser(user);
      return user;
    } catch (e) {
      throwErrorAlertRequest(e);
    }
  }, []);

  const signIn = useCallback(async (user) => {
    try {
      const {
        path: { user_login: signin },
      } = API;
      const { data: token } = await api.post(signin, user);
      saveUserToStorage(token, user);
      setUser(user);
    } catch (e) {
      const { error: { login: error } } = MESSAGES;
      throwErrorAlertRequest(e, error);
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
