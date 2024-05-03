import React, { useState } from "react";

export default function Class_binding() {
  const [theme, setTheme] = useState("p-3 mb-2 bg-dark text-white");
  const [buttontheme, setButtontheme] = useState("btn btn-dark w-100");

  function handleThemeChange(e) {
    if (e.target.checked) {
      setTheme("p-3 mb-2 bg-info text-dark");
      setButtontheme("btn btn-danger w-100");
    } else {
      setTheme("");
      setButtontheme("btn btn-dark w-100");
    }
  }

  function handleNameChange(e) {
    if (e.target.value === '') {
        setTheme("p-3 mb-2 bg-danger text-white");
      } else {
        setTheme("p-3 mb-2 bg-success text-white");
      }

  }

  return (
    <div style={{backgroundColor:'red'}}>
        <div className="container" >
        <div style={{textAlign:'center' ,color:'yellow'}}>        <h1 >This is a Class Styling binding using classstyling </h1>
</div>
      <div className="d-flex justify-content-center align-items-center" style={{height:'500px'}}>
       
        <form className={theme}>
          <div className="mt-4 mb-4 form-switch">
            <input
              type="checkbox"
              onChange={handleThemeChange}
              className="form-check-input"
            />Dark Mode
          </div>
          <h2>
            <span className="bi bi-person-fill"></span>User Login
          </h2>
          <dl>
            <dt>User Name </dt>
            <dd>
              <input type="text" onChange={handleNameChange} className="form-control" />
            </dd>

            <dt>Password </dt>
            <dd>
              <input type="Password" className="form-control" />
            </dd>
          </dl>
          <button className={buttontheme}> Login</button>
        </form>
      </div>
    </div>
    </div>
    
  );
}
