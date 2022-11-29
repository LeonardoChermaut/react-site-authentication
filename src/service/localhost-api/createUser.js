import { LOCALHOST_API } from "./Api";
import { AlertRequest } from "../../component/Alert/AlertRequest";

export const RegisterUser = async (user) => {
  try {
    const response = await LOCALHOST_API.post("/api/user", user);
    let { data: status } = response;
    if (status === 200 || 202) {
      AlertRequest({
        title: "Cadastro com sucesso",
        icon: "success",
      });
    }
  } catch (e) {
    console.error(e.data);
    AlertRequest({
      title: "Erro ao efetuar o login",
      icon: "error",
    });
  }
};
