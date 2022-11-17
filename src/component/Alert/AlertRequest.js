import Swal from "sweetalert2";

export const AlertRequest = ({ title, icon }) => {
  Swal.fire({
    position: "center",
    icon: `${icon}`,
    title: `${title}`,
    showConfirmButton: true,
  });
};
export default AlertRequest;
