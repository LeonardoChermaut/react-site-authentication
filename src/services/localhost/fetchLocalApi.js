import axios from "axios";
import { token } from "./index";

export const fetchLocalApi = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
