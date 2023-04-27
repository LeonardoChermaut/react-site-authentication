import Swal from "sweetalert2";
import { SWAL_FIRE_SCHEMA } from "./utils";

export const AlertRequest = (schema) => {
  return Swal.fire(SWAL_FIRE_SCHEMA({ title: schema.title, icon: schema.icon }));
};
