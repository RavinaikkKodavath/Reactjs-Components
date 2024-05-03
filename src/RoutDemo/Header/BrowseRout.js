import React, { useState } from 'react'
import { BrowserRouter, Routes, Route,Link ,useNavigate} from 'react-router-dom';
import Header from './Header';
import Routers from './Routers';

export default function BrowseRout() {
  const [isLoggedIn ,setisLoggedIn] = useState(false)
  return (
    <BrowserRouter>
      <Header/>
      <Routers isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn}/>
    </BrowserRouter>
  )
}
