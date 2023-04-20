import { localhost } from "./index";
import { AlertRequest } from "../../../components/sweetalert/AlertRequest";
import { headers } from "../token/index";
import {
  ACCEPTED_STATUS_CODE,
  ERROR_UPDATE_MESSAGE,
  PATH_USER_ID,
  SUCCESS_UPDATE_MESSAGE,
  displayError,
} from "../utils/index";

export const updateUser = async (user) => {
  try {
    const { status } = await localhost.put(
      PATH_USER_ID(user.id),
      user,
      headers
    );
    if (status === ACCEPTED_STATUS_CODE) AlertRequest(SUCCESS_UPDATE_MESSAGE);
  } catch (error) {
    displayError(error, ERROR_UPDATE_MESSAGE);
  }
};
