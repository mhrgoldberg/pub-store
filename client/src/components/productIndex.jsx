import React from "react";
import ProductItem from "./productItem";
import { CardDeck } from "react-bootstrap";

const ProductIndex = ({ products, cart, setCart }) => {
  return (
    <div className="products-container">
      <CardDeck>
        {products.map((product) => {
          return (
            <ProductItem
              data={product}
              cart={cart}
              setCart={setCart}
              key={product.id}
            />
          );
        })}
      </CardDeck>
    </div>
  );
};

export default ProductIndex;
