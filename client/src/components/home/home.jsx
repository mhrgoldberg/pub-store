import React, { Fragment, useState } from "react";
import ProductIndex from "./products/productIndex";
import Banner from "./Banner";
import ToastAlert from "../toastAlert";

const Home = ({ products, cart, setCart}) => {
  const [showToast, setShowToast] = useState(false);
  return (
    <Fragment>
      <div
        className="main-container"   
      >
        <div
          style={{
            position: "fixed",
            top: 56,
            right: 0,
            zIndex: 50000,
          }}
        >
          <ToastAlert setShowToast={setShowToast} showToast={showToast} />
        </div>
        <Banner />
        <ProductIndex
          products={products}
          cart={cart}
          setCart={setCart}
          setShowToast={setShowToast}
          showToast={showToast}
        />
      </div>
    </Fragment>
  );
};

export default Home;
