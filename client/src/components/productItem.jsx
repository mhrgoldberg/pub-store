import React, { useState } from "react";
import { Container, Row } from 'react-bootstrap';

const ProductItem = (props) => {
  const [title] = useState(props.data.title);
  const [description] = useState(props.data.description);
  const [quantity, setQuantity] = useState(props.data.quantity);
  const [price] = useState(props.data.price);

  return (
    <Container>
      <Row>{title}</Row>
      <Row>{description}</Row>
      <Row>{quantity}</Row>
      <Row>{price}</Row>
    </Container>
  );
};

export default ProductItem;
