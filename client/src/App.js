import React, { useState, useEffect } from "react";
import { Switch, HashRouter, Route } from "react-router-dom";

import axios from "axios";

import NavBarComponent from "./components/navbar";
import Home from "./components/home";
import Cart from "./components/cart";
import Checkout from "./components/checkout";

import "./App.scss";

function App() {
  const [cart, setCart] = useState([]);
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
    <div className="App">
      <HashRouter>
        <NavBarComponent />
        <Switch>
          <Route path="/cart">
            <Cart cart={cart} setCart={setCart} />
          </Route>
          <Route path="/checkout">
            <Checkout cart={cart} />
          </Route>
          <Route path="/">
            <Home products={products} cart={cart} setCart={setCart} />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
