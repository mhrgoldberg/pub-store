import React from "react";
import ProductIndex from "./productIndex";

const Home = ({ products, cart, setCart }) => {
  return (
    <div className="main-container">
      <ProductIndex products={products} cart={cart} setCart={setCart} />
    </div>
  );
};

export default Home;
