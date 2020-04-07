import React from "react";
import { Modal, Button, Alert, ListGroup } from "react-bootstrap";
import CartItem from "./cartItem";

const CartModal = ({ cart, setCart, modalShow, setModalShow }) => {
  const handleClose = () => setModalShow(false);
  let items = null;
  if (Object.keys(cart).length === 0) {
    items = (
      <Alert variant="danger">
        You have no items in your cart! Try adding and item from the store.
      </Alert>
    );
  } else {
    items = (
      <ListGroup>
        {Object.values(cart).map((cartItem) => {
          return (
            <CartItem
              data={cartItem.data}
              itemId={cartItem.data.id}
              title={cartItem.data.title}
              quantity={cartItem.cartQuantity}
              setCart={setCart}
              key={cartItem.data.id}
            />
          );
        })}
      </ListGroup>
    );
  }
  return (
    <Modal show={modalShow} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Shopping Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>{items}</Modal.Body>
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
