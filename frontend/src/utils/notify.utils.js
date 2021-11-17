import { toast } from "react-toastify";

const notifySuccess = (message) => {
  toast.success(message, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 3000,
  });
};

const notifyError = (message) => {
  toast.error(message, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 3000,
  });
};

export { notifySuccess, notifyError };
