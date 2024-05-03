// // AuthComponent.js
// import React, { useState } from 'react';
// import Cookies from 'js-cookie';

// const AuthComponent = () => {
//   // State to manage the session token and user authentication status
//   const [sessionToken, setSessionToken] = useState(Cookies.get('sessionToken') || '');
//   const [isLoggedIn, setIsLoggedIn] = useState(!!sessionToken);

//   // Function to simulate a login action
//   const login = () => {
//     // Simulate a successful login by generating a new session token
//     const newToken = generateRandomToken();
//     setSessionToken(newToken);

//     // Set the token in a cookie with a 1-hour expiration
//     Cookies.set('sessionToken', newToken, { expires: 1 / 1440 });
//     // Update the authentication status
//     setIsLoggedIn(true);
//   };

//   // Function to simulate a logout action
//   const logout = () => {
//     // Clear the session token from both the component state and the cookie
//     setSessionToken('');
//     Cookies.remove('sessionToken');

//     // Update the authentication status
//     setIsLoggedIn(false);
//   };

//   // Helper function to generate a random token (replace with your own logic)
//   const generateRandomToken = () => {
//     return Math.random().toString(36).substring(7);
//   };

//   return (
//     <div>
//       {isLoggedIn ? (
//         <div>
//           <p>Logged In! Session Token: {sessionToken}</p>
//           <button onClick={logout}>Logout</button>
//         </div>
//       ) : (
//         <div>
//           <p>Not Logged In</p>
//           <button onClick={login}>Login</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AuthComponent;
// AuthComponent.js
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';

const AuthComponent = () => {
  // State to manage the session token, user authentication status, and user data
  const [sessionToken, setSessionToken] = useState(Cookies.get('sessionToken') || '');
  const [isLoggedIn, setIsLoggedIn] = useState(!!sessionToken);
  const [userData, setUserData] = useState(null);


  // Helper function to generate a random token (replace with your own logic)
  const generateRandomToken = () => {
    return Math.random().toString(36).substring(7);
  };


  // Function to simulate a login action
  const login = async () => {
    try {
      // Simulate a successful login by fetching user data from the jsonplaceholder API
      const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
      const user = response.data;

      // Set the session token in a cookie with a 1-minute expiration
      const newToken = generateRandomToken();
      setSessionToken(newToken);
      Cookies.set('sessionToken', newToken, { expires: 1 / 1440 }); // 1 minute in days

      // Update the authentication status and user data
      setIsLoggedIn(true);
      setUserData(user);
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  // Function to simulate a logout action
  const logout = () => {
    // Clear the session token, user data, and cookie
    setSessionToken('');
    setIsLoggedIn(false);
    setUserData(null);
    Cookies.remove('sessionToken');
  };



  // Effect to fetch user data when logged in
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (isLoggedIn) {
          const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
          const user = response.data;
          setUserData(user);
        }
      } catch (error) {
        console.error('Fetch user data error:', error);
      }
    };

    fetchUserData();
  }, [isLoggedIn]);

  // Effect to handle session timeout and auto-logout
  useEffect(() => {
    let timeoutId;

    const handleSessionTimeout = () => {
      // Set the timeout to auto-logout after 5 minutes (300,000 milliseconds)
      timeoutId = setTimeout(() => {
        logout();
      }, 3000); // 5 minutes in milliseconds

      return () => clearTimeout(timeoutId);
    };

    if (isLoggedIn) {
      // If logged in, set up the session timeout
      return handleSessionTimeout();
    }
  }, [isLoggedIn, logout]);

  
  return (
    <div>
      {isLoggedIn ? (
        <div>
          <p>Logged In! Session Token: {sessionToken}</p>
          <p>User Data: {userData ? `${userData.name} (${userData.email})` : 'Loading...'}</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>Not Logged In</p>
          <button onClick={login}>Login</button>
        </div>
      )}
    </div>
  );
};

export default AuthComponent;
