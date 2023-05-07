import axios from "axios";
import { headers } from "../token/index";
import { API } from "../constant/index";

const { path: { base_url: baseURL } } = API;

export const api = axios.create({
  baseURL: baseURL,
  headers: headers,
});
