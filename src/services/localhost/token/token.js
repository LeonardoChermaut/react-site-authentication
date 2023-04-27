export const token = localStorage.getItem("token");
export const BEARER_TOKEN = `Bearer ${token}`;
export const headers = { headers: { Authorization: BEARER_TOKEN } };

export const loadUserFromStorage = () => {
  const storageUser = localStorage.getItem("user");
  return storageUser ? JSON.parse(storageUser) : undefined;
};

export const saveUserToStorage = (token, user) => {
  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(user));
};

export const clearUserFromStorage = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};
