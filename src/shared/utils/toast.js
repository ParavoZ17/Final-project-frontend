import { toast } from "react-toastify";

export const toastSuccess = (message) =>
  toast.success(message || "Успішно");

export const toastError = (message) =>
  toast.error(message || "Сталася помилка");

export const toastInfo = (message) =>
  toast.info(message);
