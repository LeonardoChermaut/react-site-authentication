import axios from "axios";

export const TOKEN_UNSPLASH = "WvGGi9k2umEAFhpWIHMopPPXGQ6CxwSlMSihD1PAhLw";

export const unsplashApi = axios.create({
  baseURL: `https://api.unsplash.com/photos/?client_id=${TOKEN_UNSPLASH}`,
});
