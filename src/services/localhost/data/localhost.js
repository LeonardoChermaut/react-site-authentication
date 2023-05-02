import axios from "axios";
import { headers } from "../token/index";
import { API } from "../utils/index";

export const localhost = axios.create({
  baseURL: API.path.url,
  headers: headers,
});
