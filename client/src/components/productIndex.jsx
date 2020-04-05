import React from 'react';
import ProductItem from "./productItem";
import { CardDeck } from "react-bootstrap";

const ProductIndex = ({products}) => {
  return (
    <div className="products-container">
       <CardDeck>
        {products.map((product) => {
          return <ProductItem data={product} key={product.id} />;
        })}
      </CardDeck>
    </div>
  );
};

export default ProductIndex;
