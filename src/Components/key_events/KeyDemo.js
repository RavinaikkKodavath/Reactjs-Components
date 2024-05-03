import React from 'react'
import { useState } from 'react'

export default function KeyDemo() {
    const [username,setUsername] = useState('')
    const [tip,setTip] = useState('')

    function ChangeCase(){
        setUsername(username.toUpperCase());
        if (username ===''){
            setTip('User name is required ');
        }else{
            setTip('');

        }
        
    }
function handleOnchange(e){
    setUsername(e.target.value)
}

function ShowTip(){
    setTip('name is in block letters only ')
}

  return (
    <div className='container-fluid'>
        <h3>Register User</h3>
        <dl>
            <dt>User Name</dt>
            <dd>
            <input type='text' onFocus={ShowTip} onBlur={ChangeCase} value={username} placeholder='Name in block letter' onChange={handleOnchange} />  
            </dd>
            <dd>{tip}</dd>
        </dl>
      
    </div>
  )
}
