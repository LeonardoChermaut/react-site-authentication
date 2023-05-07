import axios from "axios";
import { BASE_URL as baseURL } from "../utils/index";

export const unsplashApi = axios.create({
  baseURL: baseURL,
});
