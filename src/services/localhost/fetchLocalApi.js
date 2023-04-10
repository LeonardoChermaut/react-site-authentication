import axios from "axios";
import { header } from "./token";

export const fetchLocalApi = axios.create({
  baseURL: "http://localhost:8080",
  headers: header
});
