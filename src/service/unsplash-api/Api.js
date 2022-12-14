import axios from "axios";
import {TOKEN_UNSPLASH} from "./Token";

export const unsplashApi = axios.create({baseURL:`https://api.unsplash.com/photos/?client_id=${TOKEN_UNSPLASH}`});



