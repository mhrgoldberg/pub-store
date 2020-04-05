import React, { useState } from "react";
import { Button, Card, Badge, Row, Container } from "react-bootstrap";

const ProductItem = (props) => {
  const [title] = useState(props.data.title);
  const [description] = useState(props.data.description);
  const [quantity, setQuantity] = useState(props.data.quantity);
  const [price] = useState(props.data.price);

  return (
    <Card style={{ minWidth: "20rem", width: "20rem"}}>
      <Card.Img variant="top" src={"/images/hoodie_beer.jpg"} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
          {price}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="card-footer">
          <Button variant="outline-info">More Details</Button>
          <Badge variant="secondary">${price}</Badge>
        </Card.Footer>
    </Card>
  );
};

export default ProductItem;
