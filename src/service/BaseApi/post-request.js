import AlertRequest from "../../component/Alert/AlertRequest";
import api from "./Api";

export default async function RegisterUser(request) {
  try {
    await api.post("/api/user", request).then((res) => {
      if (res.status === 200 || 202) {
        AlertRequest({
          title: "Cadastro com sucesso",
          icon: "success",
        });
        localStorage.clear();
      }
    });
  } catch (e) {
    AlertRequest({
      title: `${e.response.data}`,
      icon: "error",
    });
  }
}
