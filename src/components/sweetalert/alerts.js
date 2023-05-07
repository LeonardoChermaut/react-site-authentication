import Swal from "sweetalert2";
import { configuration } from "./config";

const objectDestrutured = (schema) => {
  const { title, icon } = schema;
  return { title: title, icon: icon };
};

export const alertRequest = (schema) => {
  return Swal.fire(configuration(objectDestrutured(schema)));
};

export const throwErrorAlertRequest = (error, schema) => {
  const { message } = error;
  console.error(message);
  if (schema) alertRequest(objectDestrutured(schema));

  return undefined;
};
