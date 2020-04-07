import React from "react";
import ProductItem from "./productItem";
import { CardDeck } from "react-bootstrap";

const ProductIndex = ({
  products,
  cart,
  setCart,
  setShowToast,
  showToast,
  setShowErrorToast,
}) => {
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
              setShowToast={setShowToast}
              setShowErrorToast={setShowErrorToast}
              showToast={showToast}
            />
          );
        })}
      </CardDeck>
    </div>
  );
};

export default ProductIndex;
