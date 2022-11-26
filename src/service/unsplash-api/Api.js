import axios from "axios";
import TOKEN from "./token";

const getUnsplashApi = axios.create({baseURL:`https://api.unsplash.com/photos/?client_id=${TOKEN}`});

export default getUnsplashApi;

