import axios from "axios";
import { headers } from "./token";

const URL = `http://localhost:8080`;
export const fetchLocalApi = axios.create({
  baseURL: URL,
  headers: headers
});
