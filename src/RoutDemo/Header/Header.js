import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/home">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/posts">
              Post
            </Link>
          </li>{" "}
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/user">
              User
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
