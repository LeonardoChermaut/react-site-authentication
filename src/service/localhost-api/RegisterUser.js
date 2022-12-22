import { LOCALHOST_API } from "./Api";
import { AlertRequest } from "../../component/sweetalert/AlertRequest";

export const RegisterUser = async (user) => {
  try {
    const { data: status } = await LOCALHOST_API.post("/api/user", user);
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
