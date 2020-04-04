import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import ProductContainer from  './components/productContainer';
import './App.scss'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProductContainer />
      </header>
    </div>
  );
}

export default App;
