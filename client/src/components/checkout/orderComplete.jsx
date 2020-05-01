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
			})
      .catch((error) => console.log(error));
	}, []);
	const orderId;
	const address;
	const products;
	if (data.order) {
		orderId = data.order.id;
		address = data.order.address;
		products = data.products;
	}
  return <div>
		<span>{orderId}</span>
		<span>{data.order ? data.order.address: null}</span>
		<ul>
			{products.map( product => {
			<li>product</li>
			})}

		</ul>
	</div>;
};

export default withRouter(OrderComplete);
