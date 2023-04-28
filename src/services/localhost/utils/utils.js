import { AlertRequest } from "../../../components/sweetalert/AlertRequest";

export const PATH_USER = "/api/user";
export const PATH_USER_LOGIN = "/login";
export const ACCEPTED_STATUS_CODE = "ACCEPTED";
export const BASE_URL_API = "http://localhost:8080";
export const PATH_USER_CONTEXT = "/api/user/context";
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

export const SCHEMA_MESSAGES = {
  success: {
    update: {
      title: "Atualização com sucesso",
      icon: "success",
    },
    register: {
      title: "Cadastro com sucesso",
      icon: "success",
    },
  },
  error: {
    login: {
      title: "Login ou senha inválidas",
      icon: "error",
    },
    register: {
      title: "Erro ao efetuar o registro",
      icon: "error",
    },
    update: {
      title: "Erro ao efetuar a atualização",
      icon: "error",
    },
  },
};
