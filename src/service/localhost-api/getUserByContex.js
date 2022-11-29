import { useState, useEffect } from "react";
import { LOCALHOST_API, TOKEN } from "./Api";

const GetUserContext = async () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data: user } = await LOCALHOST_API.get(`/api/user/contex`, {
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

export default GetUserContext;
