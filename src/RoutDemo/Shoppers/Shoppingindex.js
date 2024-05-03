import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ShoppingHome from "./Shoppindhome";
import ShoppingProducts from "./ShoppingProducts";
import ShopperDetails from "./ShopperDetails";

export default function Shoppingindex() {
  return (
    <div className="container-fluid">
      <header className="d-flex justify-content-between p-2 bg-dark text-white">
        <div>
          <h2>Shoppers Stop</h2>
        </div>
        <div>
          <span className="me-4">Home</span>
          <span className="me-4">Electronics</span>
          <span className="me-4">Jewelery</span>
          <span className="me-4">Men's Fashion</span>
          <span className="me-4">Women's Fashion</span>
        </div>
        <div>
          <span className="bi bi-search me-3"></span>
          <span className="bi bi-heart me-3 "></span>
          <span className="bi bi-person me-3"></span>
        </div>
      </header>

      <section className="mt-4 overflow-auto  row">
        <Router>
          <Routes>
            <Route path="/" element={<ShoppingHome />} />
            <Route path="products/:catName" element={<ShoppingProducts />} />
            <Route path="/home" element={<ShoppingHome />} />
            <Route path="/details/:prodId" element={<ShopperDetails />} />

            <Route path="*" element={<code>Page Not Found</code>} />
          </Routes>
        </Router>
      </section>
    </div>
  );
}
