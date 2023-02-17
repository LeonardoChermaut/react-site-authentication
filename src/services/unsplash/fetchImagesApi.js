import axios from "axios";

const tokenUnsplash = "WvGGi9k2umEAFhpWIHMopPPXGQ6CxwSlMSihD1PAhLw";

export const fetchImagesApi = axios.create({
  baseURL: `https://api.unsplash.com/photos/?client_id=${tokenUnsplash}`,
});
