import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login(props) {
    const [Username ,setUsername] = useState('ravi')
    const [Password ,setPassword] = useState('ravi')
    const navigate = useNavigate()

    function handleusername(e){
        setUsername(e.target.value)
    }

 function handlePassword(e){
        setPassword(e.target.value)
    }

    function handleSubmit() {
        if (Username === 'ravi' && Password === 'ravi') {
            props.setisLoggedIn(true);
            navigate('/posts');
          // props.isLoggedIn= true
        } else {
        //   navigate('/login'); // Use an absolute path
        }
      }

  return (
    <div>
        <dl>
            <dt>Username</dt>
            <dd><input type='text' className='form-input' onChange={handleusername}></input></dd>
            <dt>Password</dt>
            <dd><input type='Password' className='form-input' onChange={handlePassword}></input></dd>
            <dd><button type='button' className='btn btn-primary' onClick={handleSubmit}>Submit</button></dd>
        </dl>
    </div>
  )
}
