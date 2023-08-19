import React from 'react'
import {useLocation} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

const Home = ({login}) => {
  let location = useLocation()
  return (
    <div>
      This is the Home Page
      <br />
      {location.state}
      <button onClick={login}>Login</button>
      <br />
      <button onClick = {()=>{
          login()
          Navigate('/dashboard')
      }}>Login with useNavigate</button>
    </div>
  )
}

export default Home
