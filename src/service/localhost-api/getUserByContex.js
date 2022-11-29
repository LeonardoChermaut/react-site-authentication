import { useState, useEffect } from "react";
import {LOCALHOST_API} from "./Api";
import TOKEN from "./getToken";

const GetUserContext = async () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const api = await LOCALHOST_API.get(`/api/user/contex`, );
        const { data: user } = api;
        setUser(user);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return user;
};

export default GetUserContext;
