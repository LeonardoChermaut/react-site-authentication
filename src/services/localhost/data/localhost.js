import axios from "axios";
import { headers } from "../token/index";
import { BASE_URL_API as URL } from "../utils/index";

export const localhost = axios.create({
  baseURL: URL,
  headers: headers,
});
