import React from "react";
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
  );
};

export default Home;
