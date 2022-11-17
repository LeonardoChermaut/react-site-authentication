import api from "./Api";
import AlertRequest from "../../component/Alert/AlertRequest";

const RegisterUser = async (request) => {
  try {
    await api.post("/api/user", request).then((response) => {
      if (response.status === 200 || 202) {
        AlertRequest({
          title: "Cadastro com sucesso",
          icon: "success",
        });
      }
    });
  } catch (e) {
    AlertRequest({
      title: `${e.response.data}`,
      icon: "error",
    });
  }
};

export default RegisterUser;
