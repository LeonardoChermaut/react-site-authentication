import {LOCALHOST_API }from "./Api";
import message from "../../component/alert/AlertRequest";

export const RegisterUser = async (user) => {
  try {
    const response = await LOCALHOST_API.post("/api/user", user);
    let { data: status } = response;
      if(status === 200 || 202) {
        message({
          title: "Cadastro com sucesso",
          icon: "success",});
      };
    } catch(e) {
      console.error(e.data);
      message({
          title: "Erro ao efetuar o login",
          icon: "error"});
  }};