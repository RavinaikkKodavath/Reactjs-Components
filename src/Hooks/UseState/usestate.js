import React,{useState} from 'react'

export default function Hook() {
    // const [getter,setter] = useState('any value')

    const [username,setUsername] = useState('ravi')

    function handlChange(e){
      setUsername(e.target.value)
    }
  return (
    <div>
        <input type='text' className='form-control' onChange={handlChange}></input>
        <h2>welcome to state props </h2>
        <br></br>
      <h1>{username}</h1>
    </div>
  )
}
