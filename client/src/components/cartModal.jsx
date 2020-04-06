import React from "react";
import { Modal, Button, Alert } from "react-bootstrap";

const CartModal = ({ cart, setCart, modalShow, setModalShow }) => {
  const handleClose = () => setModalShow(false);
  let items = null;
  if(Object.keys(cart).length === 0) {
    items = <Alert variant="danger" >You have no items in your cart! Try adding and item from the store.</Alert>
  } else {
    items = <ul>{Object.values(cart).map((cartItem) => {
      return <li>{cartItem.data.title}</li>;
    })}</ul>
  }
  return (
    <Modal show={modalShow} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Shopping Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {items}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Save Changes
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Checkout
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CartModal;
