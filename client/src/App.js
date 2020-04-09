import React, { useState, useEffect } from "react";
import { Switch, HashRouter, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEdit,
  faTrash,
  faCartPlus,
  faShoppingCart,
  faCashRegister,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

import ToastAlert from "./components/toastAlert";
import NavBarComponent from "./components/navbar";
import Home from "./components/home/home";
import ConfirmCart from "./components/checkout/confirmCart";
import CheckoutForm from "./components/checkout/checkoutForm"
import CartModal from "./components/cart/cartModal";

import "./App.scss";

library.add(faEdit, faTrash, faCartPlus, faShoppingCart, faCashRegister);

function App() {
  const [cart, setCart] = useState({});
  const [products, setProducts] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);

  useEffect(() => {
    axios
      .get("/api/products.json")
      .then((payload) => {
        setProducts(payload.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const clothingProducts = products.filter(
    (product) => product.category === "Clothing"
  );
  const souvenirProducts = products.filter(
    (product) => product.category === "Souvenir"
  );
  const eventsProducts = products.filter(
    (product) => product.category === "Events"
  );

  return (
    <div className="App">
      <HashRouter>
        <NavBarComponent setModalShow={setModalShow} />
        <CartModal
          setModalShow={setModalShow}
          setCart={setCart}
          modalShow={modalShow}
          setShowErrorToast={setShowErrorToast}
          cart={cart}
        />
        <div
          style={{
            position: "fixed",
            top: 56,
            right: 0,
            zIndex: 50000,
          }}
        >
          <ToastAlert
            setShowToast={setShowToast}
            showToast={showToast}
            title="Success"
            message="Item has been added to your cart!"
          />
        </div>
        <div
          style={{
            position: "fixed",
            top: 56,
            right: 0,
            zIndex: 50000,
          }}
        >
          <ToastAlert
            setShowToast={setShowErrorToast}
            showToast={showErrorToast}
            title="Out of Stock"
            message="Sorry, please try another Item."
          />
        </div>
        <Switch>
          <Route path="/checkout/cart">
            <ConfirmCart cart={cart} setCart={setCart} />
          </Route>
          <Route path="/checkout/form">
            <CheckoutForm />
          </Route>
          <Route path="/clothing">
            <Home
              products={clothingProducts}
              cart={cart}
              setCart={setCart}
              showToast={showToast}
              showErrorToast={showErrorToast}
              setShowToast={setShowToast}
              setShowErrorToast={setShowErrorToast}
            />
          </Route>
          <Route path="/souvenir">
            <Home
              products={souvenirProducts}
              cart={cart}
              setCart={setCart}
              showToast={showToast}
              showErrorToast={showErrorToast}
              setShowToast={setShowToast}
              setShowErrorToast={setShowErrorToast}
            />
          </Route>
          <Route path="/events">
            <Home
              products={eventsProducts}
              cart={cart}
              setCart={setCart}
              showToast={showToast}
              showErrorToast={showErrorToast}
              setShowToast={setShowToast}
              setShowErrorToast={setShowErrorToast}
            />
          </Route>
          <Route path="/">
            <Home
              products={products}
              cart={cart}
              setCart={setCart}
              showToast={showToast}
              showErrorToast={showErrorToast}
              setShowToast={setShowToast}
              setShowErrorToast={setShowErrorToast}
            />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
