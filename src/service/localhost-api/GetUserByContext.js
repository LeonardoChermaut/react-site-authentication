import { useState, useEffect } from "react";
import { LOCALHOST_API } from "./Api";

export const GetUserByContext = async () => {
  const [user, setUser] = useState([]);
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    (async () => {
      try {
        const {data: user} = await LOCALHOST_API.get(`/api/user/context`, {
          Authorization: `Bearer ${token}`,
        });
     
        setUser(user);
      } catch (error) {
        console.error('erro get user by context ', error);
      }
    })();
  }, []);

  return user;
};
