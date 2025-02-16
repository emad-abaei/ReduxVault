import { toast } from "react-toastify";
import ToastMessage from "../components/ToastMessage";

interface NotifyType {
  type: "success" | "error";
  title: string;
  message: string;
}

export function notify({ type, title, message }: NotifyType) {
  toast(ToastMessage, {
    data: {
      type,
      title,
      message
    },
    autoClose: 5000,
    closeButton: true
  });
}

export function formatCurrency(value: number) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD"
  }).format(value);
}
