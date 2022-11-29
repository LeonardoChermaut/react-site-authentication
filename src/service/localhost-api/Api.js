import axios from "axios";

export const TOKEN = localStorage.getItem("token");

export const LOCALHOST_API = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
});
