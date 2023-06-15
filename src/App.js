import React from "react";
import { Routes, Route } from "react-router-dom";
import CardCollection from "./CardCollection";
import ProductDetails from "./ProductDetails";
// import Callnow from "./Callnow";
import Checkout from "./Checkout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<CardCollection />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      {/* <Route path="/call-now" element={<Callnow />} /> */}
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
};

export default App;
