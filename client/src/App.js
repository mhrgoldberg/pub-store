import React, { useState, useEffect } from "react";
import { Switch, HashRouter, Route } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEdit, faTrash, faCartPlus, faShoppingCart, faCashRegister } from '@fortawesome/free-solid-svg-icons'


import axios from "axios";

import NavBarComponent from "./components/navbar";
import Home from "./components/home/home";
import Checkout from "./components/checkout/checkout";
import CartModal from "./components/cart/cartModal";


import "./App.scss";

library.add(faEdit, faTrash, faCartPlus, faShoppingCart, faCashRegister)

function App() {
  const [cart, setCart] = useState({});
  const [products, setProducts] = useState([]);
  const [modalShow, setModalShow] = useState(false);

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
          cart={cart}
        />
        <Switch>
          <Route path="/checkout">
            <Checkout cart={cart} />
          </Route>
          <Route path="/clothing">
            <Home products={clothingProducts} cart={cart} setCart={setCart} />
          </Route>
          <Route path="/souvenir">
            <Home products={souvenirProducts} cart={cart} setCart={setCart} />
          </Route>
          <Route path="/events">
            <Home products={eventsProducts} cart={cart} setCart={setCart} />
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
