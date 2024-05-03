import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function Contact() {
    const navigate = useNavigate()

     function handleClick (){
        navigate('/')
    }
  return (
    <div>
      <h2>this is contact page </h2>
      here we are using the useNavigate hook to go back or navigate the page <br></br>
      <button onClick={handleClick}>Go Back</button>
    </div>
  )
}
