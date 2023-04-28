import { localhost } from "./index";
import { AlertRequest } from "../../../components/sweetalert/index";
import { headers } from "../token/index";
import { PATH_USER_ID, SCHEMA_MESSAGES, displayError } from "../utils/index";

export const updateUser = async (user) => {
  try {
    const { status } = await localhost.put(
      PATH_USER_ID(user.id),
      user,
      headers
    );
    if (status === 202) AlertRequest(SCHEMA_MESSAGES.success.update);
  } catch (error) {
    displayError(error, SCHEMA_MESSAGES.error.update);
  }
};
