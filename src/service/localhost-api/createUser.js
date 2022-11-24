
import LOCALHOST_API from "./Api";
import AlertRequest from "../../component/alert/AlertRequest";

const RegisterUser = async (user) => {
  const response = await LOCALHOST_API.post("/api/user", user);
  const data = await response;
  try {
      if(data.status === 200 || 202) {
        AlertRequest({
          title: "Cadastro com sucesso",
          icon: "success",});
      };
    } catch(e) {
      
        AlertRequest({
          title: `${e.response.data}`,
          icon: "error"});
  }}

export default RegisterUser;
