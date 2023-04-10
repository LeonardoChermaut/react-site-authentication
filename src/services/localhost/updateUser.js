import { fetchLocalApi } from "./index";
import { AlertRequest } from "../../components/sweetalert/AlertRequest";
import { header } from "./token";

export const updateUser = async (user) => {
  try {
    const { status } = await fetchLocalApi.put(`/api/user/${user.id}`, user, header);
    if (status === 200 || 202) {
      AlertRequest({
        title: "Atualização com sucesso",
        icon: "success",
      });
    }
  } catch (error) {
    console.error(error.message);
    AlertRequest({
      title: "Erro ao efetuar a atualização",
      icon: "error",
    });
    return undefined;
  }
};
