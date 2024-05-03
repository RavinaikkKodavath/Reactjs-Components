import React, { useState } from "react";

export default function State_functional() {
      //two way biding data
  const [Name, setName] = useState();
  
  const [username] = useState("ravi");
  const [categories] = useState(["electronics", "footware", "fashion"]);
  const [items] = useState([
    { Name: "electronics", Price: 45000 },
    { Name: "Nike", Price: 45222 },
  ]);




  function handleInput(event) {
    setName(event.target.value)
  }

  return (
    <div className="container">
      <h2>State in functional component </h2>
      <p>Hello !! {username}</p>
      <h2>categories</h2>
      <ol>
        {categories.map((item) => (
          <li key={item.id}>{item}</li>
        ))}
      </ol>
      <table className="table table-hover">
        <thead>
          <tr>
            <td>Name</td>
            <td>Price</td>
          </tr>
        </thead>
        <tbody>
          {items.map((products) => (
            <tr key={products.Name}>
              <td>{products.Name}</td>
              <td>{products.Price}</td>
            </tr>
          ))}
        </tbody>
      </table>

<h1>this is two way binding</h1>
<input type="text"  onChange={handleInput} />
<p>{Name}</p>
    </div>
  );
}
