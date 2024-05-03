// ProtectedRoute.js
import React from 'react';
import { Navigate, Route } from 'react-router-dom';

const ProtectedRoute = ({ isLoggedin, element, fallbackPath = '/login' }) => {
  // If the user is not logged in, redirect them to the specified fallback path
  if (!isLoggedin) {
    return <Navigate to={fallbackPath} />;
  }

  // If the user is logged in, render the Route with the provided element
  return <Route element={element} />;
};

export default ProtectedRoute;
