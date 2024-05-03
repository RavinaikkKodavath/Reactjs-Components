import React from 'react'
import Login from '../../Customised-components/Login'

export default function Login_type() {
  return (
    <div className='container-fluid'>
      <Login theme='bg-warning' title='Admin Portal' login_id='your email' login_type="Admin" button_text='Admin Login' />
      <hr/>
      <Login theme='bg-danger' title='Customer Portal' login_id='your email' login_type="Customer" button_text='Customer Login' />

    </div>
  )
}
