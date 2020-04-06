import React from "react";
import { Toast } from "react-bootstrap";

const ToastAlert = ({ showToast, setShowToast }) => {
  return (
    <Toast
      onClose={() => setShowToast(false)}
      show={showToast}
      delay={3000}
      autohide
    >
      <Toast.Header>
        <strong className="mr-auto">Success</strong>
      </Toast.Header>
      <Toast.Body>Item has been added to your cart!</Toast.Body>
    </Toast>
  );
};

export default ToastAlert;
