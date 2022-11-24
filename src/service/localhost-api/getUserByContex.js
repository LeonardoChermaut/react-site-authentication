import { useState, useEffect } from "react";
import LOCALHOST_API from "./Api";
import TOKEN from "./getToken";

const GetUserContext = () => {
  const [user, setUser] = useState([{}]);
  useEffect(() => {
    const getUser = async () => { 
      try {
        await LOCALHOST_API.get(`/api/user/contex`, {
        headers: { Authorization: `Bearer ${TOKEN}`}})
        .then(object => setUser(object.data));
      }catch (error) {
        alert(error)
        setUser(null);
    }}; getUser();
  }, []);

  return user;
};

export default GetUserContext;
