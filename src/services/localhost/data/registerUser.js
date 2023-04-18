import { localhost } from "./index";
import { AlertRequest } from "../../../components/sweetalert/AlertRequest";
import {
  ACCEPTED_STATUS_CODE,
  SUCCESS_REGISTER_MESSAGE,
  ERROR_REGISTER_MESSAGE,
} from "../utils/index";

export const registerUser = async (user) => {
  let path = "/api/user";
  try {
    const { data: status } = await localhost.post(path, user);
    if (status === ACCEPTED_STATUS_CODE) {
      AlertRequest({
        title: SUCCESS_REGISTER_MESSAGE.title,
        icon: SUCCESS_REGISTER_MESSAGE.icon,
      });
    }
  } catch (e) {
    console.error(e.data);
    AlertRequest({
      title: ERROR_REGISTER_MESSAGE.title,
      icon: ERROR_REGISTER_MESSAGE.icon,
    });
  }
};
