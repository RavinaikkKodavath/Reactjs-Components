import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import SpaDetails from "./SpaDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function SpaProducts() {
  const [products, setProducts] = useState([]);
  const params = useParams();

  useEffect(() => {
    axios({
      method: "get",
      url: `https://fakestoreapi.com/products/category/${params.catName}`,
    }).then((response) => {
      // console.log(response.data)
      setProducts(response.data);
    });
  }, [params]);

  return (
    <div className="container-fluid">
      <h1>Products</h1>

      <div className="row">
        <div className="col">
          <ol>
            {products.map((product) => (
              <li key={product.id}>
    <Link to={`details/${product.id}`}>{product.title}</Link>
              </li>
            ))}
          </ol>
        </div>
        <div className="col">
          <Routes>
            <Route path="products/details/:ProdId" element={<SpaDetails />} />
          </Routes>
        </div>
      </div>

      <Link to="/home">Back to Category</Link>
    </div>
  );
}
