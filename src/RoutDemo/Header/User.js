import React from 'react'
import { Link ,Outlet} from 'react-router-dom'

export default function User() {
  return (
    <div>
      <h1>this is user page</h1>
      <Link to="/user/external">
              external
            </Link><br></br>

            <Link to="/user/internal">
              Internal
            </Link>
            <Outlet />

    </div>
  )
}
