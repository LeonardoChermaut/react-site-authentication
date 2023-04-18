import { localhost } from "./index";
import { alertRequest } from "../../../components/sweetalert/index";
import { headers } from "../token/index";
import {
  ACCEPTED_STATUS_CODE,
  ERROR_UPDATE_MESSAGE,
  PATH_USER_ID,
  SUCCESS_UPDATE_MESSAGE,
} from "../utils/index";

export const updateUser = async (user) => {
  try {
    const { status } = await localhost.put(
      PATH_USER_ID(user.id),
      user,
      headers
    );
    if (status === ACCEPTED_STATUS_CODE) {
      alertRequest({
        title: SUCCESS_UPDATE_MESSAGE.title,
        icon: SUCCESS_UPDATE_MESSAGE.icon,
      });
    }
  } catch (error) {
    console.error(error.message);
    alertRequest({
      title: ERROR_UPDATE_MESSAGE.title,
      icon: ERROR_UPDATE_MESSAGE.icon,
    });
    return undefined;
  }
};
