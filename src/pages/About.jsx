import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {

  let navigate = useNavigate()

  const handleClick = () => {
    navigate('/', {state: 'from the about page'})
  }
 
  return (
    <div>
      This is the About Page
      <br />
      <button onClick = {handleClick}>redirect to homepage</button>
    </div>
  )
}

export default About
