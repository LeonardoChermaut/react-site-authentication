import AlertRequest from "../../component/Alert/AlertRequest";
import api from "./Api";

export default async function RegisterUser(body) {
  try {
    await api.post("/api/user", body).then((res) => {
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
