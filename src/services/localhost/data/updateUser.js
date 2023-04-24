import { localhost } from "./index";
import { AlertRequest } from "../../../components/sweetalert/AlertRequest";
import { headers } from "../token/index";
import {
  ERROR_UPDATE_MESSAGE,
  PATH_USER_ID,
  SUCCESS_UPDATE_MESSAGE,
  displayError,
} from "../utils/index";

export const updateUser = async (user) => {
  try {
    const { status } = await localhost.put(PATH_USER_ID(user.id), user, headers);
    if (status === 202) AlertRequest(SUCCESS_UPDATE_MESSAGE);
  } catch (error) {
    displayError(error, ERROR_UPDATE_MESSAGE);
  }
};
