import axios from "axios";

export const UNSPLASH_API = axios.create({
  baseURL:
    "https://api.unsplash.com/photos/?client_id=WvGGi9k2umEAFhpWIHMopPPXGQ6CxwSlMSihD1PAhLw",
});

export default UNSPLASH_API;
