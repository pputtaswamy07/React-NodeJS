import { useState } from "react";

type NotificationType = "success" | "error";

interface Notification {
  open: boolean;
  message: string;
  type: NotificationType;
}

export const useNotification = () => {
  const [notification, setNotification] = useState<Notification>({
    open: false,
    message: "",
    type: "success",
  });

  const showNotification = (message: string, type: NotificationType) =>
    setNotification({ open: true, message, type });

  const showSuccess = (message: string) => showNotification(message, "success");

  const showError = (message: string) => showNotification(message, "error");

  const closeNotification = () =>
    setNotification((prev) => ({ ...prev, open: false }));

  return {
    notification,
    showSuccess,
    showError,
    closeNotification,
  };
};
