import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function SpaHome() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://fakestoreapi.com/products/categories",
    }).then((response) => {
      console.log(response.data);
      setCategory(response.data);
    });
  }, []);
  return (
    <div className="container-fluid">
      <div>
        <Link to="home">Home</Link>
      </div>

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
