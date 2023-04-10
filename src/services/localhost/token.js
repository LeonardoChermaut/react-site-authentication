export const token = localStorage.getItem("token");
export const BEARER_TOKEN = `Bearer ${token}`;
export const header = { headers: { Authorization: `${BEARER_TOKEN}` }};
