import React from "react";
import { Toast } from "react-bootstrap";

const ToastAlert = ({ showToast, setShowToast, message, title }) => {
  return (
    <Toast
      onClose={() => setShowToast(false)}
      show={showToast}
      delay={3000}
      autohide
    >
      <Toast.Header>
        <strong className="mr-auto">{title}</strong>
      </Toast.Header>
      <Toast.Body>{message}</Toast.Body>
    </Toast>
  );
};

export default ToastAlert;
