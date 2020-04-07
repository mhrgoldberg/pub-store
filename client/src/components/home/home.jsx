import React, { Fragment, useState } from "react";
import ProductIndex from "./products/productIndex";
import Banner from "./Banner";


const Home = ({
  products,
  cart,
  setCart,
  setShowToast,
  showToast,
  setShowErrorToast,
  showErrorToast,
}) => {
  return (
    <Fragment>
      <div className="main-container">
        
        <Banner />
        <ProductIndex
          products={products}
          cart={cart}
          setCart={setCart}
          setShowToast={setShowToast}
          showToast={showToast}
          setShowErrorToast={setShowErrorToast}
        />
      </div>
    </Fragment>
  );
};

export default Home;
