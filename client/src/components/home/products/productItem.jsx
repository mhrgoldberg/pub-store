import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Card,
  ButtonToolbar,
  InputGroup,
  FormControl,
} from "react-bootstrap";

const ProductItem = ({
  setCart,
  cart,
  data,
  setShowToast,
  setShowErrorToast,
}) => {
  let cartQuantity 
  if (cart[data.id]) cartQuantity = cart[data.id].cartQuantity;
  const [title] = useState(data.title);
  const [description] = useState(data.description);
  const [stockQuantity, setStockQuantity] = useState(
    cartQuantity || data.quantity
  );
  const [itemQuantity, setItemQuantity] = useState(1);
  const [price] = useState(data.price);

  const addToCart = () => {
    if (itemQuantity <= stockQuantity) {
      setStockQuantity(stockQuantity - itemQuantity);
      data["quantity"] = stockQuantity;
      setCart((prevState) => {
        return Object.assign({}, prevState, {
          [data.id]: {
            data,
            cartQuantity:
              (cart[data.id] ? cart[data.id].cartQuantity : 0) + itemQuantity,
          },
        });
      });
      setShowToast(true);
    } else {
      setShowErrorToast(true);
    }
  };

  return (
    <Card style={{ minWidth: "20rem", maxWidth: "28rem" }}>
      <Card.Img variant="top" src={data.image} />
      <Card.Body>
        <Card.Title>
          {title} | ${parseFloat(price).toFixed(2)}
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
              value={itemQuantity}
              onChange={(e) => {
                setItemQuantity(parseFloat(e.currentTarget.value));
              }}
              type="number"
              aria-label="product-quantity"
              aria-describedby="btnGroupAddon"
            />
          </InputGroup>
          <Button onClick={addToCart} variant="success">
            <FontAwesomeIcon icon="cart-plus" />
          </Button>
        </ButtonToolbar>
      </Card.Footer>
    </Card>
  );
};

export default ProductItem;
