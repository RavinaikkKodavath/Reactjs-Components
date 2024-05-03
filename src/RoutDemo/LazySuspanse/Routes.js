// App.js
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
// Lazy-load the Post component
const LazyPost = lazy(() => import('./Post'));

const AppRoute = () => {
  const isLoggedin = /* logic to determine if the user is logged in */ true;

  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <h1>Home</h1>
              </Suspense>
            }
          />
          <ProtectedRoute
            path="/posts"
            isLoggedin={isLoggedin}
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <LazyPost />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRoute;
