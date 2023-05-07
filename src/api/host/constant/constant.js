export const API = {
  path: {
    user_login: "/login",
    user_register: "/api/user",
    user_context: "/api/user/context",
    base_url: "http://localhost:8080",
    user_data: (id) => `/api/user/${id}`,
  },
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
