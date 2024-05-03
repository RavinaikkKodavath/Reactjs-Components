import axios from "axios";
import { data } from "jquery";
import React, { Component, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function ShoppingHome() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://fakestoreapi.com/products/categories",
    }).then((response) => {
      setCategory(response.data);
    });
  }, []);

  return (
    <div className="container-fluid">
        <h4>Select Category</h4>
          <ol>
            {category.map((category) => (
              <li key={category.id}>
                <Link to={`/products/${category}`}>{category.toUpperCase()}</Link>
              </li>
            ))}
          </ol>
      </div>
  );
}
