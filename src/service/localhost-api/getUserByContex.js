import { useState, useEffect } from "react";
import LOCALHOST_API from "./Api";
import TOKEN from "./getToken";

const GetUserContext = async () => {
  const [user, setUser] = useState([]);

  useEffect(() => {(async () => { 
    const headers = {
      headers: { 'Authorization': `Bearer ${TOKEN}`}
    }
    try {
        const API = await LOCALHOST_API.get(`/api/user/contex`, headers);
        const{ data: user } =  API;
        setUser(user);
      }catch (e) {
        console.error(e);
    }})();
  }, []);
  
  return user;
};

export default GetUserContext;
