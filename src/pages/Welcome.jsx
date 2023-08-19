import React from 'react'
// Outlet is component for render child route elements
import {Outlet, Link} from 'react-router-dom'
const Welcome = ({logout}) => {
  return (
    <div>
      <h3>welcome user</h3>
      <Link to="settings">Setting</Link>
      <Outlet/>
      <button onClick={logout}>logout</button>
    </div>
  )
}

export default Welcome
