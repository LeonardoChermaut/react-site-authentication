import { fetchLocalApi, token } from "./index";
import { AlertRequest } from "../../components/sweetalert/AlertRequest";

export const updateUser = async (user) => {
  try {
    const { data: status } = await fetchLocalApi.put(`/api/user/${user.id}`, user, {
      Authorization: `Bearer ${token}`,
    });
    if (status === 200 || 202) {
      AlertRequest({
        title: "Atualização com sucesso",
        icon: "success",
      });
    }
  } catch (e) {
    console.error(e);
    AlertRequest({
      title: "Erro ao efetuar a atualização",
      icon: "error",
    });
  }
};
