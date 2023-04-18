const token = localStorage.getItem("token");
const BEARER_TOKEN = `Bearer ${token}`;
const headers = { headers: { Authorization: `${BEARER_TOKEN}` } };

export { token, headers };
