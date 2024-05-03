import React from "react";
import { Navigate } from "react-router-dom";
export default function ProtectedRoute({ element, isLoggedIn }) {
    if (!isLoggedIn) {
    //   localStorage.setItem("isLoggedIn", isLoggedIn);
    //   console.log("Redirecting to /login",isLoggedIn);
      return <Navigate to="/login" />;
    }
  
    return element;
  }
  