import Swal from "sweetalert2";
import { SWAL_FIRE_SCHEMA } from "./utils";

export const AlertRequest = ({ title, icon }) => {
  Swal.fire(SWAL_FIRE_SCHEMA({ title, icon }));
};
