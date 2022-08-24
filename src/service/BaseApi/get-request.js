import React from "react";
import BASE_API from "./Api";

export default function GetUserContex() {
  const [name, setName] = React.useState("");

  React.useEffect(() => {
    let TOKEN = localStorage.getItem("token");
    try {
      let getContex = async () => {
        await BASE_API.get(`/api/user/contex`, {
          headers: { Authorization: `Bearer ${TOKEN}` },
        }).then((object) => {
          setName(object.data.nome);
        });
      };
      getContex();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return { name };
}
