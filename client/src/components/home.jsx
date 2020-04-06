import React, { Fragment } from "react";
import ProductIndex from "./productIndex";
import Banner from "./Banner";

const Home = ({ products, cart, setCart }) => {
  return (
    <Fragment>
      <div className="main-container">
        <Banner />
        <ProductIndex products={products} cart={cart} setCart={setCart} />
      </div>
    </Fragment>
  );
};

export default Home;
