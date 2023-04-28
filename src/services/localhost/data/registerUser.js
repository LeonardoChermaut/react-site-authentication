import { localhost } from "./index";
import { AlertRequest } from "../../../components/sweetalert/AlertRequest";
import {
  ACCEPTED_STATUS_CODE,
  PATH_USER,
  displayError,
  SCHEMA_MESSAGES,
} from "../utils/index";

export const registerUser = async (user) => {
  try {
    const { data: status } = await localhost.post(PATH_USER, user);
    if (status === ACCEPTED_STATUS_CODE) AlertRequest(SCHEMA_MESSAGES.success.register);
  } catch (error) {
    displayError(error, SCHEMA_MESSAGES.error.register);
  }
};
