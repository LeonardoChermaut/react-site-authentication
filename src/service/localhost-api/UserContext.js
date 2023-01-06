import { useState, useEffect } from "react";
import { LOCALHOST } from "./Api";

export const UserContext = async () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data: user } = await LOCALHOST.get(`/api/user/context`);
        setUser(user);
      } catch (error) {
        console.error("erro get user by context ", error);
      }
    })();
  }, []);
  return user;
};
