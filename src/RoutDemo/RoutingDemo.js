import { data } from 'jquery';
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route,Link ,useNavigate} from 'react-router-dom';

export default class RoutingDemo extends Component {
  render() {
    // const navigate = useNavigate()
    var now = new Date();

    // const handleButtonClick = () => {
    //   // Navigate to a different route when a button is clicked.
    //   navigate('/');
    // };
  
    return (
      <div className='container-fluid'>
    {/* <button onClick={handleButtonClick}>Go to Other Route</button> */}

<Router>
<h3>Tutorial Home Page Requested on {now.toLocaleTimeString()}</h3>

      <ol>
 <Link to="html"><li>HTML</li></Link> 
 <Link to="css"><li>CSS</li></Link> 
 <Link to="js"><li>JS</li></Link> 
</ol>

<hr size="4" noshade />
<Routes>
        <Route path="/html" element={<HTMLComponent />} />
        <Route path="/css" element={<CSSComponent />} />
        <Route path="/js" element={<JSComponent />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />


        {/* Add more routes as needed */}
      </Routes>
    </Router>

</div>

)}}

const HTMLComponent = () => <div>HTML Component</div>;
const CSSComponent = () => <div>CSS Component</div>;
const JSComponent = () => <div>JS Component</div>;
const Home = () => <div>Welcome to Tutorial</div>;
const PageNotFound = () => <code>PageNotFound</code>;

