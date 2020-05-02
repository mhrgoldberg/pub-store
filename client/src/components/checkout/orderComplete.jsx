import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  ListGroup,
  Alert,
  ProgressBar,
  Button,
} from "react-bootstrap";
import axios from "axios";

const OrderComplete = ({ match }) => {
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get(`/api/orders/${match.params.orderId}`)
      .then((payload) => {
        setData(payload.data);
        console.log(payload.data);
      })
      .catch((error) => console.log(error));
  }, []);
	let orderId = "";
	let address = "";
	let city = "";
	let state = "";
	let zip = "";
  let products = [];

  if (data.order) {
    orderId = data.order.id;
    address = data.order.address;
    city = `${data.order.city},`;
    state = data.order.state;
    zip = data.order.zip;
    products = data.products;
  }
  return (
    <div className="main-container">
      <Container className="final-cart">
        <br />
        <ProgressBar animated now={100} />
        <br />
        <Row>{orderId}</Row>
				<br />
        <Row>{address}</Row>
        <Row>{city} {state} {zip}</Row>
				<Row>Your order of: </Row>
        <ListGroup>
          {products.map((product) => (
            <ListGroup.Item>{product.title}</ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
    </div>
  );
};

export default withRouter(OrderComplete);
