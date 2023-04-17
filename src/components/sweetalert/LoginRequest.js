import Swal from "sweetalert2";
import { FIRE_SCHEMA, TOAST_SCHEMA } from "../../index";

export const LoginAlert = () => {
  const Toast = Swal.mixin(TOAST_SCHEMA);
  Toast.fire(FIRE_SCHEMA);
};
