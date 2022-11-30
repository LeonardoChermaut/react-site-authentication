import { LOCALHOST_API, TOKEN } from "./Api";
import { AlertRequest } from "../../component/Alert/AlertRequest";

export const UpdateUser = async (user) => {
  try {
    const response = await LOCALHOST_API.put(`/api/user/${user.id}`, user, {
      Authorization: `Bearer ${TOKEN}`,
    });
    const { data: status } = response;
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
