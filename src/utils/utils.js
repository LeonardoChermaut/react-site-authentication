export const TOAST_SCHEMA = {
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 1500,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
};

export const SWAL_FIRE_SCHEMA = ({ icon, title }) => {
  return {
    position: "center",
    icon: `${icon}`,
    title: `${title}`,
    showConfirmButton: true,
  };
};

export const FIRE_SCHEMA = {
  icon: "success",
  title: "Bem vindo!",
};
