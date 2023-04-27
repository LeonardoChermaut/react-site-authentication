import { AlertRequest } from "../../../components/sweetalert/AlertRequest";

export const ACCEPTED_STATUS_CODE = "ACCEPTED";

export const PATH_USER_LOGIN = "/login";
export const PATH_USER = "/api/user";
export const PATH_USER_CONTEXT = "/api/user/context";
export const BASE_URL_API = "http://localhost:8080";
export const PATH_USER_ID = (id) => `/api/user/${id}`;


export const displayError = (error, schema) => {
  console.error(error.message);
  if (schema) {
    AlertRequest({
      title: schema.title,
      icon: schema.icon,
    });
  }
  return undefined;
};

export const ERROR_LOGIN_MESSAGE = {
  title: "Login ou senha inválidas",
  icon: "error",
};

export const SUCCESS_REGISTER_MESSAGE = {
  title: "Cadastro com sucesso",
  icon: "success",
};

export const ERROR_REGISTER_MESSAGE = {
  title: "Erro ao efetuar o registro",
  icon: "error",
};

export const SUCCESS_UPDATE_MESSAGE = {
  title: "Atualização com sucesso",
  icon: "success",
};

export const ERROR_UPDATE_MESSAGE = {
  title: "Erro ao efetuar a atualização",
  icon: "error",
};
