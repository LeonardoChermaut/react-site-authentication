export const ACCEPTED_STATUS_CODE = 200;

export const PATH_USER_LOGIN = "/login";
export const PATH_USER = "/api/user";
export const PATH_USER_CONTEXT = "/api/user/context";
export const BASE_URL_API = "http://localhost:8080";
export const PATH_USER_ID = (id) => `/api/user/${id}`;

export const loadUserFromStorage = () => {
  const storageUser = localStorage.getItem("user");
  if (storageUser) {
    return JSON.parse(storageUser);
  }
  return undefined;
};

export const saveUserToStorage = (token, user) => {
  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(user));
};

export const clearUserFromStorage = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

export const ERROR_LOGIN_MESSAGE = {
  message: "Login ou senha inválidas",
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
