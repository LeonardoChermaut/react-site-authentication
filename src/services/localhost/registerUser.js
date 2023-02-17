import { fetchLocalApi } from "./index";
import { AlertRequest } from "../../components/sweetalert/AlertRequest";

export const registerUser = async (user) => {
  try {
    const { data: status } = await fetchLocalApi.post("/api/user", user);
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
