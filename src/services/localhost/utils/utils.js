import { AlertRequest } from "../../../components/sweetalert/AlertRequest";

export const API = {
  path: {
    user: "/api/user",
    login: "/login",
    context: "/api/user/context",
    url: "http://localhost:8080",
  },
};
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

export const MESSAGES = {
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
