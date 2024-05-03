import React, { useState } from "react";

export default function Form() {
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

  function handledName(e) {
    e.preventDefault(); //this is because reactjs have some operation event default to stop those default event operation it is mandotary to use this
    if (e.target.value == "") {
      setError({
        name: "please enter your name",
      });
    } else {
    
      setFormData({
        name: e.target.value,
        age: formdata.age,
        city: formdata.city,
        mobile: formdata.mobile,
      });
    }
  }

  function handledAge(e) {
    e.preventDefault(); //this is because reactjs have some operation event default to stop those default event operation it is mandotary to use this
    if (e.target.value == "") {
      setError({
        age: "please enter age",
      });
    } else {
      setFormData({
        name: formdata.name,
        age: e.target.value,
        city: formdata.city,
        mobile: formdata.mobile,
      });
    }
  }
  function handledCity(e) {
    e.preventDefault(); //this is because reactjs have some operation event default to stop those default event operation it is mandotary to use this
    if (e.target.value == "") {
      setError({
        city: "please select city",
      });
    } else {
      setFormData({
        name: formdata.name,
        age: formdata.age,
        city: e.target.value,
        mobile: formdata.mobile,
      });
    }
  }
  function handledMobile(e) {
    e.preventDefault(); //this is because reactjs have some operation event default to stop those default event operation it is mandotary to use this
    if (e.target.value == "") {
      setError({
        mobile: "please enter a mobile number",
      });
    } else {
      setFormData({
        name: formdata.name,
        age: formdata.age,
        city: formdata.city,
        mobile: e.target.value,
      });
    }
  }

  function handledSubmit(e) {
    e.preventDefault();
    // Check if there are any missing fields
    if (error.name=='' || error.age == '' || error.city == '' || error.mobile == '') {
      // If no missing fields, submit the form
      alert("Form submitted successfully!");
    } else {
      // If there are missing fields, display a message to the user
      alert('Please fill out the following fields');
    }
  }
  


  // function handledSubmit(e) {
  //   e.preventDefault();

  //   // Check if there are any validation errors
  //   if (
  //     error.name === "" &&
  //     error.age === "" &&
  //     error.city === "" &&
  //     error.mobile === ""
  //   ) {
  //     // If no errors, submit the form
  //     alert("Form submitted successfully!");
  //   } else {
  //     // If there are errors, display a message or take appropriate action
  //     alert("Please fill out the form correctly.");
  //   }
  // }

  return (
    <div className="container-fluid w-50">
      <form onSubmit={handledSubmit}>
        <h2>React Form handling</h2>
        <dl>
          <dt>Name</dt>
          <dd>
            <input
              type="text"
              onChange={handledName}
              className="form-control"
            />
          </dd>
          <dd className="text-danger">{error.name}</dd>

          <dt>Age</dt>
          <dd>
            <input
              type="number"
              onChange={handledAge}
              className="form-control"
            />
          </dd>
          <dd className="text-danger">{error.age}</dd>

          <dt>City</dt>
          <dd>
            <select className="form-select" onChange={handledCity}>
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
              onChange={handledMobile}
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
