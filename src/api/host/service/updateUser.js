import { api, headers } from "../index";
import { MESSAGES, API } from "../constant/index";
import {
  alertRequest,
  throwErrorAlertRequest,
} from "../../../components/index";

export const updateUser = async (user) => {
  try {
    const { id } = user;
    const {
      path: { user_id: getUserById },
    } = API;
    const { status } = await api.put(getUserById(id), user, headers);
    const {
      success: { update: success },
    } = MESSAGES;

    if (status === 202) alertRequest(success);
  } catch (error) {
    const {
      error: { update },
    } = MESSAGES;
    throwErrorAlertRequest(error, update);
  }
};
