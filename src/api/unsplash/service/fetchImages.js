import { throwErrorAlertRequest } from "../../../components/sweetalert/alerts";
import { unsplashApi } from "../data/unsplashApi";

export const fetchImages = async () => {
  try {
    const { data: images } = await unsplashApi.get();
    return { images };
  } catch (error) {
    throwErrorAlertRequest(error);
  }
};
