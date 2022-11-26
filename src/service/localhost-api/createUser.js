
import LOCALHOST_API from "./Api";
import message from "../../component/alert/AlertRequest";

const RegisterUser = async (user) => {
  try {
    const response = await LOCALHOST_API.post("/api/user", user);
    let { data: status } = response;
      if(status === 200 || 202) {
        message({
          title: "Cadastro com sucesso",
          icon: "success",});
      };
    } catch(e) {
      message({
          title: `${e.data}`,
          icon: "error"});
  }}

export default RegisterUser;
