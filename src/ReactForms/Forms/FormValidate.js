import React, { useState } from "react";

export default function FormValidate() {
  const [formdata, setFormData] = useState({
    name: "",
    age: "",
    city: "",
    mobile: "",
  });

  const [error, setError] = useState({
    name: "",
    age: "",
    city: "",
    mobile: "",
  });

  function validateForm() {
    let isValid = true;
    const newError = { ...error };

    // Validate name
    if (formdata.name === "") {
      newError.name = "Please enter your name";
      isValid = false;
    } else {
      newError.name = "";
    }

    // Validate age
    if (formdata.age === "") {
      newError.age = "Please enter your age";
      isValid = false;
    } else {
      newError.age = "";
    }

    // Validate city
    if (formdata.city === "") {
      newError.city = "Please select a city";
      isValid = false;
    } else {
      newError.city = "";
    }

    // Validate mobile
    if (formdata.mobile === "") {
      newError.mobile = "Please enter your mobile number";
      isValid = false;
    } else {
      newError.mobile = "";
    }

    setError(newError);
    return isValid;
  }

  function handleName(e) {
    setFormData({ ...formdata, name: e.target.value });
    setError({ ...error, name: "" }); // Clear the error on typing
  }

  function handleAge(e) {
    setFormData({ ...formdata, age: e.target.value });
    setError({ ...error, age: "" }); // Clear the error on typing
  }

  function handleCity(e) {
    setFormData({ ...formdata, city: e.target.value });
    setError({ ...error, city: "" }); // Clear the error on typing
  }

  function handleMobile(e) {
    setFormData({ ...formdata, mobile: e.target.value });
    setError({ ...error, mobile: "" }); // Clear the error on typing
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Validate the form
    const isValid = validateForm();

    if (isValid) {
      // If the form is valid, submit the form
      alert("Form submitted successfully!");
    }
  }

  return (
    <div className="container-fluid w-50">
      <form onSubmit={handleSubmit}>
        <h2>React Form handling</h2>
        <dl>
          <dt>Name</dt>
          <dd>
            <input type="text" onChange={handleName} className="form-control" />
          </dd>
          <dd className="text-danger">{error.name}</dd>

          <dt>Age</dt>
          <dd>
            <input
              type="number"
              onChange={handleAge}
              className="form-control"
            />
          </dd>
          <dd className="text-danger">{error.age}</dd>

          <dt>City</dt>
          <dd>
            <select className="form-select" onChange={handleCity}>
              <option value="-1">Select City</option>
              <option value="hyderabad">Hyderabad</option>
              <option value="delhi">Delhi</option>
            </select>
          </dd>
          <dd className="text-danger">{error.city}</dd>

          <dt>Mobile</dt>
          <dd>
            <input
              type="number"
              onChange={handleMobile}
              className="form-control"
            />
          </dd>
          <dd className="text-danger">{error.mobile}</dd>
        </dl>
        <button className="btn btn-primary w-24">Submit</button>
      </form>
    </div>
  );
}
