import React, { useState } from "react";
import {
  Button,
  Card,
  ButtonToolbar,
  InputGroup,
  FormControl,
} from "react-bootstrap";

const ProductItem = ({ setCart, cart, data, showToast, setShowToast }) => {
  const [title] = useState(data.title);
  const [description] = useState(data.description);
  const [stockQuantity, setStockQuantity] = useState(data.quantity);
  const [cartQuantity, setCartQuantity] = useState(1);
  const [price] = useState(data.price);

  const addToCart = () => {
    if (cartQuantity < stockQuantity) {
      setStockQuantity(stockQuantity - cartQuantity);
      setCart((prevState) => {
        return Object.assign({}, prevState, {
          [data.id]: {
            data,
            cartQuantity:
              (cart[data.id] ? cart[data.id].cartQuantity : 0) + cartQuantity,
          },
        });
      });
      setShowToast(true);
      console.log(cart);
    }
  };

  return (
    <Card style={{ minWidth: "20rem", maxWidth: "28rem" }}>
      <Card.Img variant="top" src={data.image} />
      <Card.Body>
        <Card.Title>
          {title} | ${parseInt(price).toFixed(2)}
        </Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Card.Footer className="card-footer">
        <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="btnGroupAddon">Qty</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              value={cartQuantity}
              onChange={(e) => {
                setCartQuantity(parseInt(e.target.value));
              }}
              type="number"
              aria-label="product-quantity"
              aria-describedby="btnGroupAddon"
            />
          </InputGroup>
          <Button onClick={addToCart} variant="outline-danger">
            Add to Cart{" "}
            <svg
              className="bi bi-bag"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M14 5H2v9a1 1 0 001 1h10a1 1 0 001-1V5zM1 4v10a2 2 0 002 2h10a2 2 0 002-2V4H1z"
                clipRule="evenodd"
              />
              <path d="M8 1.5A2.5 2.5 0 005.5 4h-1a3.5 3.5 0 117 0h-1A2.5 2.5 0 008 1.5z" />
            </svg>
          </Button>
        </ButtonToolbar>
      </Card.Footer>
    </Card>
  );
};

export default ProductItem;
