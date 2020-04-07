import React from "react";
import {
  Container,
  Row,
  Col,
  ListGroup,
  Alert,
  ProgressBar,
  Button,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const ConfirmCart = ({ cart }) => {
  let sum = 0;
  let items = null;
  if (Object.keys(cart).length === 0) {
    items = (
      <div className="main-container">
        <br />
        <Alert variant="danger">
          You have no items in your cart! Try adding and item from the store.
        </Alert>
        <LinkContainer to="/">
          <Button variant="primary" size="lg" block>
            Back to Shopping
          </Button>
        </LinkContainer>
      </div>
    );
  } else {
    items = (
      <Container className="final-cart">
        <br />
        <ProgressBar animated now={30} />
        <br />
        {Object.values(cart).map((cartItem) => {
          sum += parseFloat(cartItem.data.price) * cartItem.cartQuantity;
          return (
            <Row>
              <Col>{cartItem.data.title}</Col>
              <Col>Quantity: {cartItem.cartQuantity}</Col>
              <Col>${parseFloat(cartItem.data.price).toFixed(2)}</Col>
            </Row>
          );
        })}
        <br />
        <ListGroup.Item>
          {" "}
          Total Price: ${parseFloat(sum).toFixed(2)}{" "}
        </ListGroup.Item>
        <br />
        <Button variant="primary" size="lg" block>
          Confirm Cart and Enter Shipping Info
        </Button>
      </Container>
    );
  }
  return <div className="main-container">{items}</div>;
};

export default ConfirmCart;
