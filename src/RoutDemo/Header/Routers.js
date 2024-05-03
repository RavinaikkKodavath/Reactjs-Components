import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import User from "./User";
import Post from "./Post";
import Contact from "./Contact";
import ProtectedRoute from "./ProtectedRoute";
import Login from "./Login";
import External from "./External";
import Internal from "./Internal";

export default function Routers(props) {
  // this is improve the speed of application
  const Post = React.lazy(() => import("./Post")); //this is envok only when you call the Post component
  const ProtectedRoute = React.lazy(() => import("./ProtectedRoute")); //this is envok only when you call the Post component

  return (
    <Routes>
      {/* <Route path="post" element={<Post/>}></Route> */}

      {/* basic routing of pages */}
      <Route path="/" element={<Home />}></Route>
      <Route path="home" element={<Home />}></Route>
      <Route path="contact" element={<Contact />}></Route>
      {/* ends here  */}

      {/* here this is protected routes  */}
      <Route
        path="/posts"
        element={
        <React.Suspense fallback={<di>loading....</di>}>
        <ProtectedRoute element={<React.Suspense fallback={<di>loading....</di>}> <Post /></React.Suspense> }  isLoggedIn={props.isLoggedIn}/></React.Suspense>}>
        </Route>
      {/* this ends here  */}


{/* this is conditional routing with ternary operator */}
      <Route path="login" element={props.isLoggedIn ? (<Navigate to="/posts" />) : (<Login setisLoggedIn={props.setisLoggedIn} />)}></Route>
{/* ends here  */}



{/* this is nested routing  */}
      <Route path="user" element={<User />}>
        <Route path="external" element={<External />}></Route>
        <Route path="internal" element={<Internal />}> </Route>
      </Route>
{/* ends here  */}



{/* this is routing for page not found mandatory for every aoplications */}
      <Route path="*" element={<code>Page not Found </code>}></Route>
{/* ends here  */}




    </Routes>
  );
}

// Suspense and lazy are React features that are often used together to improve the performance and user experience of web applications.
// Suspense:
// Suspense is a React component that lets your components "wait" for something before rendering. It's particularly useful for handling asynchronous operations, such as data fetching or code-splitting.

// It allows you to "suspend" the rendering of a component until a certain condition is met, like data being loaded or a code-split module being loaded.

// It's commonly used with the React.lazy function for code-splitting, and with the fetch API for data fetching.
