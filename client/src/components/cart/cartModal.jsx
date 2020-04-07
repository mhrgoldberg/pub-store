import React from "react";
import { Modal, Button, Alert, ListGroup } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import CartItem from "./cartItem";

const CartModal = ({
  cart,
  setCart,
  modalShow,
  setModalShow,
  setShowErrorToast,
}) => {
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
              cartQuantity={cartItem.cartQuantity}
              setCart={setCart}
              cart={cart}
              setShowErrorToast={setShowErrorToast}
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
        <LinkContainer to="/">
          <Button variant="secondary" onClick={handleClose}>
            Back to Shopping
          </Button>
        </LinkContainer>
        <LinkContainer to="/checkout/cart">
          <Button variant="primary" onClick={handleClose}>
            Checkout
          </Button>
        </LinkContainer>
      </Modal.Footer>
    </Modal>
  );
};

export default CartModal;
