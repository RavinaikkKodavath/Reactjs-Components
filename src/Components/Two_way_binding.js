import React, { useState } from "react";

export default function Two_way_binding() {
  const [Product, setProduct] = useState({
    Name: "",
    price: 0,
    city: "",
    stock: false,
  });

  function handleName(event) {
    setProduct({
      Name: event.target.value,
      price: Product.price,
      city: Product.city,
      stock: Product.stock,
    });
  }

  function handlePrice(event) {
    setProduct({
      price: event.target.value,
      Name: Product.Name,
      city: Product.city,
      stock: Product.stock,
    });
  }

  function handleCity(event) {
    setProduct({
      city: event.target.value,
      Name: Product.Name,
      price: Product.price,
      stock: Product.stock,
    });
  }

  function handleStock(event) {
    setProduct({
      stock: event.target.checked,
      Name: Product.Name,
      price: Product.price,
      city: Product.city,
    });
  }

  return (
    <div className="container">
        <br></br>
        <h1 style={{color:'red'}}>Two way binding data</h1>
        <br></br>

      <div className="row">
        <nav className="col-3">
          <h1>Register Products</h1>
          <dl>
            <dt>Name</dt>
            <dd>
              <input   onChange={handleName}   className="form-control" type="text" />
            </dd>

            <dt>Price</dt>
            <dd>
              <input   onChange={handlePrice}  className="form-control" type="number" />
            </dd><dt>City</dt>
            <dd>
              <select onChange={handleCity} className="form-select">
                <option>hyderabad</option>
                <option>delhi</option>

              </select>
            </dd><dt>Stock</dt>
            <dd className="form-switch">
              <input   onChange={handleStock}  className="form-check-input" type="checkbox"/>Available
            </dd>
          </dl>
        </nav>
        <main className="col-9">
            <h1>Product Registered </h1>
            <dl>
                <dt>Name</dt>
                <dd>{Product.Name}</dd>

                <dt>price</dt>
                <dd>{Product.price}</dd>

                <dt>city</dt>
                <dd>{Product.city}</dd>

                <dt>Stock</dt>
                <dd>{(Product.stock== true ?'available':'out of stock')}</dd>
            </dl>
        </main>
      </div>
    </div>
  );
}
