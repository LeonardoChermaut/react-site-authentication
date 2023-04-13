import { fetchLocalApi } from "./index";
import { AlertRequest } from "../../components/sweetalert/AlertRequest";
import { headers } from "./token";

export const updateUser = async (user) => {
  const route = `/api/user/${user.id}`
  try {
    const { status } = await fetchLocalApi.put(route, user, headers);
    if (status === 200) {
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
