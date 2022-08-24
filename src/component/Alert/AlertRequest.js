import Swal from "sweetalert2";

export default function AlertRequest({ title, icon }) {
  Swal.fire({
    position: "center",
    icon: `${icon}`,
    title: `${title}`,
    showConfirmButton: true,
  });
}
