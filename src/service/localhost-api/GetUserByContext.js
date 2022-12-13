import { useState, useEffect } from "react";
import { LOCALHOST_API, TOKEN } from "./Api";

export const GetUserByContext = async () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data: user } = await LOCALHOST_API.get(`/api/user/context`, {
          Authorization: `Bearer ${TOKEN}`,
        });
        setUser(user);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return user;
};
