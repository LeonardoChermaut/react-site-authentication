import { fetchLocalApi } from "./index";
import { AlertRequest } from "../../components/sweetalert/AlertRequest";
import { header } from "./token";

export const updateUser = async (user) => {
  try {
    await fetchLocalApi.put(`/api/user/${user.id}`, user, header);
    AlertRequest({
      title: "Atualização com sucesso",
      icon: "success",
    });
  } catch (error) {
    console.error(error.message);
    AlertRequest({
      title: "Erro ao efetuar a atualização",
      icon: "error",
    });
      return undefined;
  }
};
