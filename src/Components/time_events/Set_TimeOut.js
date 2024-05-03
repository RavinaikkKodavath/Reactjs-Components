import React ,{useState} from 'react'
import { useEffect } from 'react';

export default function Set_TimeOut() {
    const [msg,setMsg] = useState('');

    function msg1(){
        setMsg('hello')
    }
    function msg2(){
        setMsg('How are you!')
    }

    function msg3(){
        setMsg('Welcome to reactjs class ')
    }


useEffect(() =>
{setTimeout(msg1,3000);
    setTimeout(msg2,5000);
    setTimeout(msg3,8000);

   },[]);

  return (
    <div className='container-fluid'>
      <h1 style={{color:'red' ,textAlign:'center'}}>{msg}</h1>
    </div>
  )
}
