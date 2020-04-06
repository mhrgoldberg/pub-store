import React, { useState } from "react";
import {
  Button,
  Card,
  ButtonToolbar,
  InputGroup,
  FormControl,
} from "react-bootstrap";

const ProductItem = ({ setCart, cart, data }) => {
  const [title] = useState(data.title);
  const [description] = useState(data.description);
  const [stockQuantity, setStockQuantity] = useState(data.quantity);
  const [cartQuantity, setCartQuantity] = useState(1);
  const [price] = useState(data.price);

  const addToCart = () => {
    if (cartQuantity < stockQuantity) {
      setStockQuantity(stockQuantity - cartQuantity);
      setCart({
        [data.id]: {
          data,
          cartQuantity:
            (cart[data.id] ? cart[data.id].cartQuantity : 0) + cartQuantity
        },
      });
    }
  };

  return (
    <Card style={{ minWidth: "20rem", width: "20rem" }}>
      <Card.Img variant="top" src={data.image} />
      <Card.Body>
        <Card.Title>
          {title} | ${price}
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
            Add to Cart
          </Button>
        </ButtonToolbar>
      </Card.Footer>
    </Card>
  );
};

export default ProductItem;
