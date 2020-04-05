import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import ProductItem from "./productItem";
import { CardDeck, Container } from "react-bootstrap";

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
    <div className="products-container">
       <CardDeck>
        {products.map((product) => {
          return <ProductItem data={product} key={product.id} />;
        })}
      </CardDeck>
    </div>
  );
};

export default ProductContainer;
