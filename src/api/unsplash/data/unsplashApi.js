import axios from "axios";
import { BASE_URL as URL } from "../utils/index";

export const unsplashApi = axios.create({
  baseURL: URL,
});
