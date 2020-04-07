import React, {useState} from "react";
import { InputGroup, FormControl, ListGroup, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const CartItem = ({ itemId, title, data, quantity, setCart }) => {
	const [edit, setEdit] = useState(false);
  const qtyEdit = (
    <InputGroup>
      <InputGroup.Prepend>
        <InputGroup.Text id="btnGroupAddon">Qty</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        value={quantity}
        onChange={(e) => {
					e.persist()
          setCart((prevState) => {
            return Object.assign({}, prevState, {
              [itemId]: {
								data,
                cartQuantity: parseInt(e.target.value)
              },
            });
          });
        }}
        type="number"
        aria-label="product-quantity"
        aria-describedby="btnGroupAddon"
      />
    </InputGroup>
  );

  return (
    <ListGroup.Item className="cart-li">
      <span className="cart-control">{title} { qtyEdit }</span>
      <span>
				<Button variant="danger" onClick={() => {
          setCart((prevState) => {
						let newState = Object.assign({}, prevState);
						delete newState[itemId];
						return newState;
          });
        }} >
       <FontAwesomeIcon icon="trash"  />
				</Button>
      </span>
    </ListGroup.Item>
  );
};

export default CartItem;
