import { LOCALHOST_API, TOKEN } from "./Api";
import { AlertRequest } from "../../component/sweetalert/AlertRequest";

export const UpdateUser = async (user) => {
  try {
    const { data: status } = await LOCALHOST_API.put(`/api/user/${user.id}`, user, {
      Authorization: `Bearer ${TOKEN}`,
    });
    if (status === 200 || 202) {
      AlertRequest({
        title: "Atualização com sucesso",
        icon: "success",
      });
    }
  } catch (e) {
    console.error(e.data);
    AlertRequest({
      title: "Erro ao efetuar a atualização",
      icon: "error",
    });
  }
};
