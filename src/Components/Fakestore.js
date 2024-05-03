import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import $, { error } from "jquery";
import axios from "axios";

import "./Fakestore.css";
export default function Fakestore() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  function GetCartCount() {
    setCartCount(cartItems.length);
  }

  // using axios

  function LoadCategories() {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        response.data.unshift("all");
        setCategories(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        //memory cleaning
      });
  }

  // example using ajax by jquery
  // function LoadCategories() {
  //     $.ajax({
  //         method:'get',
  //         url:"https://fakestoreapi.com/products/categories",
  //         success:(response) =>{
  //             response.unshift('all')
  //             setCategories(response);
  //         },
  //         error:(response) => {
  //             console.log(response)
  //         }
  //     })
  //   }

  // example using java fetch method
  //   function LoadCategories() {
  //     fetch("https://fakestoreapi.com/products/categories")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         data.unshift("all");
  //         setCategories(data);
  //       });
  //   }

  function LoadProducts(url) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }

  function handleCategoryChange(event) {
    if (event.target.value == "all") {
      LoadProducts("https://fakestoreapi.com/products");
    } else {
      LoadProducts(
        `https://fakestoreapi.com/products/category/${event.target.value}`
      );
    }
  }

  function handleAddToCartClick(e) {
    fetch(`https://fakestoreapi.com/products/${e.target.id}`)
      .then((response) => response.json())
      .then((data) => {
        cartItems.push(data);
        Swal.fire({
          title: data.title,
          text: "Item is Added to your Cart",
          imageUrl: data.image,
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: "Custom image",
        });
        GetCartCount();
        console.log(cartItems);
      });
  }

  useEffect(() => {
    LoadCategories();
    LoadProducts("https://fakestoreapi.com/products");
  }, []);

  function handleHomeClick() {
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((data) => {
        data.unshift("all");
        setCategories(data);
      });
    console.log("Button clicked!");
  }

  return (
    <div className="container-fluid">
      <header className="d-flex justify-content-between p-2 bg-dark text-white">
        <div>
          <h2>Fakestore</h2>
        </div>
        <div>
          <button
            type="button"
            onClick={handleHomeClick()}
            className="btn text-white"
          >
            <span className="me-4">Home</span>
          </button>
          <span className="me-4">Electronics</span>
          <span className="me-4">Jewelery</span>
          <span className="me-4">Men's Fashion</span>
          <span className="me-4">Women's Fashion</span>
        </div>
        <div>
          <span className="bi bi-search me-3"></span>
          <span className="bi bi-heart me-3 "></span>
          <span className="bi bi-person me-3"></span>
          <button
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            className="btn btn-light position-relative"
          >
            <span className="bi bi-cart me-3"></span>
            <span className="badge rounded-circle bg-danger position-absolute">
              {cartCount}
            </span>
          </button>
        </div>
      </header>

      <section className="mt-4 row">
        <nav className="col-2">
          <div>
            <label className="form-label">Select Category</label>
            <div>
              <select className="form-select" onChange={handleCategoryChange}>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </nav>

        <main className="col-10 d-flex flex-wrap">
          {products.map((products) => (
            <div key={products.id} className="card m-2 p-2">
              <img
                src={products.image}
                height="300px"
                className="card-img-top"
              ></img>
              <div className="card-header">
                <p className="card-title">{products.title}</p>
              </div>
              <div className="card-body">
                <dl>
                  <dt>Price</dt>
                  <dd>{products.price}</dd>
                  <dt>Rating</dt>
                  <dd>
                    <span className="bi bi-star-fill text-success"></span>
                    {products.rating.rate}[{products.rating.count}]
                  </dd>
                </dl>
              </div>

              <div className="card-footer">
                <button
                  id={products.id}
                  onClick={handleAddToCartClick}
                  className="btn btn-danger w-100"
                >
                  <span className="bi bi-cart">Add to Cart</span>
                </button>
                <div className="modal" id="cart">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <h2>your Cart Items</h2>
                    </div>
                  </div>
                </div>

                <div
                  className="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                          Modal title
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <table className="table table-hover">
                          <thead>
                            <tr>
                              <th>Title</th>
                              <th>Preview</th>
                              <th>Price</th>
                            </tr>
                          </thead>
                          <tbody>
                            {cartItems.map((item) => (
                              <tr key={item.id}>
                                <td>{item.title}</td>
                                <td>
                                  <img width="50" src={item.image} />
                                </td>
                                <td>{item.price}</td>
                                <td>
                                  <button className="btn btn-danger">
                                    <span className="bi bi-trash-fill"></span>
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" className="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </main>
      </section>
    </div>
  );
}
