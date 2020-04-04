import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductItem from "./productItem";

const ProductContainer = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("/api/products.json")
      .then((payload) => {
        setProducts(payload.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {products.map((product) => {
        return <ProductItem data={product} />;
      })}
    </div>
  );
};

export default ProductContainer;
