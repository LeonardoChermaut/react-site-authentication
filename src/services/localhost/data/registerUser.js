import { localhost } from "./index";
import { AlertRequest } from "../../../components/sweetalert/AlertRequest";
import { API, displayError, MESSAGES } from "../utils/index";

export const registerUser = async (user) => {
  try {
    const { data: status } = await localhost.post(API.path.user, user);
    if (status === "ACCEPTED") AlertRequest(MESSAGES.success.register);
  } catch (error) {
    displayError(error, MESSAGES.error.register);
  }
};
