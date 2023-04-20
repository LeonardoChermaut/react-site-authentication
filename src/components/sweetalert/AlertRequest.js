import Swal from "sweetalert2";
import { SWAL_FIRE_SCHEMA } from "./utils";

export const AlertRequest = (template) => {
  Swal.fire(SWAL_FIRE_SCHEMA({ title: template.title, icon: template.icon }));
};
