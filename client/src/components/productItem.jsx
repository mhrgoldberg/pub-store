
import React, { useState, useEffect } from 'react';

const ProductItem = props => {
	const [title, setTitle] = useState(props.data.title);
	const [description, setDescription] = useState(props.data.description);
	const [quantity, setQuantity] = useState(props.data.quantity);
	const [price, setPrice] = useState(props.data.price);

	return(
		<div>
			{title}
			{description}
			{quantity}
			{price}
		</div>
	)
}

export default ProductItem;