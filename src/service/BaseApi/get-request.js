import React from "react";
import BASE_API from "./Api";

const GetUserContex = () => {
  const [user, setUser] = React.useState([]);
  React.useEffect(() => {
    const TOKEN = localStorage.getItem("token");
    try {
      const getContex = async () => {
        await BASE_API.get(`/api/user/contex`, {
          headers: { Authorization: `Bearer ${TOKEN}` },
        }).then((object) => setUser(object.data));
      };
      getContex();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return user;
};

export default GetUserContex;
