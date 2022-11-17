import { useState, useEffect } from "react";
import BASE_API from "./Api";

const GetUserContex = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const TOKEN = localStorage.getItem("token");
    const getContex = async () => {
      await BASE_API.get(`/api/user/contex`, {
        headers: { Authorization: `Bearer ${TOKEN}` },
      }).then((object) => setUser(object.data));
    };
    getContex();
  }, []);

  return user;
};

export default GetUserContex;
