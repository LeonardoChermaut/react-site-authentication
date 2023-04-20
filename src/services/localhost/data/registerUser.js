import { localhost } from "./index";
import { AlertRequest } from "../../../components/sweetalert/AlertRequest";
import {
  ACCEPTED_STATUS_CODE,
  SUCCESS_REGISTER_MESSAGE,
  ERROR_REGISTER_MESSAGE,
  PATH_USER,
  displayError,
} from "../utils/index";

export const registerUser = async (user) => {
  try {
    const { data: status } = await localhost.post(PATH_USER, user);
    if (status === ACCEPTED_STATUS_CODE) AlertRequest(SUCCESS_REGISTER_MESSAGE);
  } catch (error) {
    displayError(error, ERROR_REGISTER_MESSAGE);
  }
};