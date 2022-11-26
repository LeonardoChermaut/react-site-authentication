import { useState, useEffect } from "react";
import LOCALHOST_API from "./Api";
import TOKEN from "./getToken";

const GetUserContext = () => {
  const [user, setUser] = useState([]);
  
  useEffect(() => {(async () => { 
    const AUTH_TOKEN = {headers: { 'Authorization': `Bearer ${TOKEN}`}}
    try {
        const API = await LOCALHOST_API.get(`/api/user/contex`, AUTH_TOKEN);
        let { data: user } =  API;
        setUser(user);
      }catch (error) {
        alert(error);
        setUser(null);
    }})();
  }, []);

  return user;
};

export default GetUserContext;
