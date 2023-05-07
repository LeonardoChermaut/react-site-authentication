import { api, API, MESSAGES } from "../index";
import {
  alertRequest,
  throwErrorAlertRequest,
} from "../../../components/sweetalert";

export const registerUser = async (user) => {
  try {
    const {
      path: { user_register: register },
    } = API;
    const { data: status } = await api.post(register, user);
    const {
      success: { register: success },
    } = MESSAGES;

    if (status === "ACCEPTED") alertRequest(success);
  } catch (e) {
    const {
      error: { register: error },
    } = MESSAGES;
    throwErrorAlertRequest(e, error);
  }
};
