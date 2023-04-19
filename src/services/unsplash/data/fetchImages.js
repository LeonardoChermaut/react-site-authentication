import { unsplashApi } from "./index";

export const fetchImages = async () => {
  try {
    const { data: images } = await unsplashApi.get();
    return { images };
  } catch (error) {
    console.error(error.message);
  }
};
