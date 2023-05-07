import axios from "axios";
import { headers } from "../token/index";
import { API } from "../constant/index";

const { path: { base_url } } = API;

export const api = axios.create({
  baseURL: base_url,
  headers: headers,
});
