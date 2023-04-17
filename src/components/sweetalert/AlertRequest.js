import Swal from "sweetalert2";
import { SWAL_FIRE_SCHEMA } from "../../utils";

export const AlertRequest = ({ icon, title}) => {
  Swal.fire(SWAL_FIRE_SCHEMA(icon, title));
};
