import React from 'react'
import { Modal, Button } from 'react-bootstrap'

const CartModal = ({cart, setCart, modalShow, setModalShow}) => {

  const handleClose = () => setModalShow(false);

  return (
      <Modal show={modalShow} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>{Object.values(cart).map(cartItem => {
					return <div>{cartItem.data.title}</div>
				})}</Modal.Body>
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
}

export default CartModal;