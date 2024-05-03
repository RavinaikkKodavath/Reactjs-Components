import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function SpaDetails() {
  const params = useParams();
  const [product, setProduct] = useState({
    id: 0,
    title: '',
    price: 0,
    category: '',
    description: '',
    rating: { rate: 0, count: 0 },
    image: '', // Update this if needed
  });

  useEffect(() => {
    axios({
      method: "get",
      url: `https://fakestoreapi.com/products/${params.prodId}`,
    }).then((response) => {
        setProduct(response.data);
    });
  }, [params]);



  return (
    <div className="container-fluid">
      <h1>Product Details </h1>
      <div className="card" style={{ width: "45rem" }}>
        <img src={product.image} className="card-img-top" alt="Product Preview" />
        <div className="card-body">
          <h5 className="card-title">{params.prodId}</h5>
          <p className="card-text">{product.description}</p>
        </div>
        <dl>
          <dt>Title</dt>
          <dd>{product.title}</dd>
          <dt>Preview</dt>
          <dd><img src={product.image} width='300' height='200' alt="Product Preview" /></dd>
          <dt>Price</dt>
          <dd>{product.price}</dd>
          <dt>Rating</dt>
          {/* <dd><span className='bi bi-star-fill text-success'></span>{product.rating.rate} [{product.rating.count}]</dd> */}
        </dl>
        <div className="card-body">
          <Link to={`/products/${product.category}`}>Back to {product.category}</Link>
        </div>
      </div>
    </div>
  );
}
