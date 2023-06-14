import React from "react";
import { Routes, Route } from "react-router-dom";
import CardCollection from "./CardCollection";
import ProductDetails from "./ProductDetails";
import Callnow from "./Callnow";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<CardCollection />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/call-now" element={<Callnow/>} />
    </Routes>
  );
};

export default App;
