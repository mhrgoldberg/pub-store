import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

const OrderComplete = ({ match }) => {
	const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get(`/api/orders/${match.params.orderId}`)
      .then((payload) => {
				setData(payload.data)
				console.log(payload.data)
			})
      .catch((error) => console.log(error));
	}, []);
	let orderId, address, city, state, zip;
	let products = [];
	
	if (data.order) {
		orderId = data.order.id;
		address = data.order.address;
		city = data.order.city;
		state = data.order.state;
		zip = data.order.zip;
		products = data.products;
	}
  return <div>
		<span>{orderId}</span>
		<span>{address}</span>
		<span>{city}</span>
		<ul>
			{products.map( product => (
			<li>{product.title}</li>
			))}

		</ul>
	</div>;
};

export default withRouter(OrderComplete);
