import React, { useState, useEffect } from "react";
import {
  InputGroup,
  FormControl,
  ListGroup,
  Button,
  ButtonGroup,
  Row,
  Col,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartItem = ({ data, cartQuantity, setCart, cart, setShowErrorToast }) => {
  const [stockQuantity, setStockQuantity] = useState(data.quantity);
  const [localCartQuantity, setLocalCartQuantity] = useState(cartQuantity);
  const [editQty, setEditQty] = useState(false);
  let qtyComponent;

  useEffect(() => {
    updateCartItem();
  }, [localCartQuantity]);

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
      setShowErrorToast(true);
      setLocalCartQuantity(cart[data.id].cartQuantity);
    }
  };

  const keyPressed = (e) => {
    if (e.keyCode === 13) {
      e.persist();
      setLocalCartQuantity(e.target.value);
      setEditQty(!editQty);
    }
  };

  if (editQty) {
    qtyComponent = (
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text id="btnGroupAddon"> Qty</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          value={localCartQuantity}
          onKeyDown={keyPressed}
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
    qtyComponent = <Col>Qty: {localCartQuantity}</Col>;
  }

  return (
    <ListGroup.Item className="cart-li">
      <Row style={{ width: "100%" }}>
        <Col className="cart-control">{data.title}</Col>
        <Col className="cart-control">{qtyComponent}</Col>
        <Col lg="2" className="cart-control">
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
                setStockQuantity(stockQuantity + cartQuantity);
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
        </Col>
      </Row>
    </ListGroup.Item>
  );
};

export default CartItem;
