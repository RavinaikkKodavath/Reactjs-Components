import React, { useContext, useState } from 'react';

const UserDetailContext = React.createContext(null);

export function VideoCompo() {
  const context = useContext(UserDetailContext);

  return (
    <div className='bg-primary text-dark p-3'>
      <h2>Video Component - {context.username.username}</h2>
    </div>
  );
}

export function Home() {
  const context = useContext(UserDetailContext);

  return (
    <div className='bg-warning text-dark p-3'>
      <h2>Home Component - {context.username.username}</h2>
      <VideoCompo />
    </div>
  );
}

export default function UserContext() {
  const [username, setUsername] = useState({ username: 'ravi' });

function handlChange(e){
setUsername({username:e.target.value})
}


  return (
    <div className='container-fluid bg-dark p-4 m-5 text-white'>
        <input className='form-control' onChange={handlChange} type='text' />Enter your name 
        <br></br>
      <UserDetailContext.Provider value={{ username:username  }}>
        <h2>Parent Component</h2>
        <Home />
      </UserDetailContext.Provider>
    </div>
  );
}
