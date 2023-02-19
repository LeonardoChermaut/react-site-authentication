import axios from "axios";

export const TOKEN = localStorage.getItem("token");

export const LOCALHOST = axios.create({
  baseURL: "http://localhost:8080",
});
LOCALHOST.defaults.headers.common["Authorization"] = `Bearer ${TOKEN}`;
