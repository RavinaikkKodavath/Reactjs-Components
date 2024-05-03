import React from "react";
import SpaHome from "./SpaHome";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SpaProducts from "./SpaProducts";
import SpaDetails from "./SpaDetails";

export default function SpaIndex() {
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
  <Route path="/" element={<SpaHome />} />
  <Route path="/home" element={<SpaHome />} />
  <Route path="products/:catName/*" element={<SpaProducts />}>
    <Route path="details" element={<SpaDetails />} />
  </Route>
  <Route path="*" element={<code>Page Not Found</code>} />
</Routes>
        </Router>
      </section>
    </div>
  );
}
