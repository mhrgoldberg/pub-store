import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import ProductContainer from  './components/productContainer';
import NavBarComponent from './components/navbar'
import './App.scss'



function App() {
  return (
    <div className="App">
        <NavBarComponent />
        <div className="main-container">
          <ProductContainer />
        </div>
    </div>
  );
}

export default App;
