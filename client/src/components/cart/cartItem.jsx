import React, { useState } from "react";
import {
  InputGroup,
  FormControl,
  ListGroup,
  Button,
  ButtonGroup,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartItem = ({ data, cartQuantity, setCart, cart, setShowErrorToast }) => {
  const [stockQuantity, setStockQuantity] = useState(data.quantity);
  const [localCartQuantity, setLocalCartQuantity] = useState(cartQuantity);
  const [editQty, setEditQty] = useState(false);
  let qtyComponent;
  let error;
  const updateCartItem = () => {
    if (Number(localCartQuantity) - data.quantity <= stockQuantity) {
      setStockQuantity(stockQuantity - localCartQuantity);
      setCart((prevState) => {
        return Object.assign({}, prevState, {
          [data.id]: {
            data,
            cartQuantity: parseFloat(localCartQuantity),
          },
        });
      });
    } else {
      setShowErrorToast(true)
      setLocalCartQuantity(cart[data.id].cartQuantity);
      
    }
  };


  if (editQty) {
    qtyComponent = (
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text id="btnGroupAddon">Qty</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          value={localCartQuantity}
          onChange={(e) => {
            e.persist();
            setLocalCartQuantity(e.target.value);
          }}
          type="number"
          aria-label="product-cartQuantity"
          aria-describedby="btnGroupAddon"
        />
      </InputGroup>
    );
  } else {
    qtyComponent = <span>Quantity: {localCartQuantity}</span>;
  }

  
  return (
    <ListGroup.Item className="cart-li">
      <span className="cart-control">{data.title}</span>
      <span className="cart-control">
        {qtyComponent}
        {error}
      </span>
      <span>
        <ButtonGroup>
        <Button
          variant={!editQty ? "warning" : "success"}
          onClick={() => {
            if (editQty) {
              updateCartItem();
              setEditQty(!editQty);
            } else {
              setEditQty(!editQty);
            }
          }}
        >
          <FontAwesomeIcon icon="edit" style={{ color: "white" }} />
        </Button>
        <Button
          variant="danger"
          onClick={() => {
            setStockQuantity(stockQuantity + cartQuantity)
            setCart((prevState) => {
              let newState = Object.assign({}, prevState);
              delete newState[data.id];
              return newState;
            });
          }}
        >
          <FontAwesomeIcon icon="trash" />
        </Button>
        </ButtonGroup>
      </span>
    </ListGroup.Item>
  );
};

export default CartItem;
