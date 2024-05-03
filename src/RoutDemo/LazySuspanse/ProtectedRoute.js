// ProtectedRoute.js
import React from 'react';
import { Navigate, Route } from 'react-router-dom';

const ProtectedRoute = ({ isLoggedin, element, ...rest }) => {
  if (!isLoggedin) {
    // Redirect to the login page if the user is not logged in
    return <Navigate to="/login" />;
  }

  return <Route {...rest} render={() => element} />;
};

export default ProtectedRoute;