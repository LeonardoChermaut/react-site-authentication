import { localhost } from "./index";
import { AlertRequest } from "../../../components/sweetalert/index";
import { headers } from "../token/index";
import { PATH_USER_ID, MESSAGES, displayError } from "../utils/index";

export const updateUser = async (user) => {
  try {
    const { status } = await localhost.put(
      PATH_USER_ID(user.id),
      user,
      headers
    );
    if (status === 202) AlertRequest(MESSAGES.success.update);
  } catch (error) {
    displayError(error, MESSAGES.error.update);
  }
};
