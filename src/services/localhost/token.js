export const token = localStorage.getItem("token");
export const BEARER_TOKEN = `Bearer ${token}`;
export const headers = { headers: { Authorization: `${BEARER_TOKEN}` }};
