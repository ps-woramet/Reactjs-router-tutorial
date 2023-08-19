import React from 'react'
import {Link} from 'react-router-dom'

const Contact = () => {
  return (
    <div>
      <p>This is the Contact Page</p>
      <Link to = '/'>Back to Home Page</Link>
      <br />
      <Link to = '/' state = {"this is state data"}>Back to home page and send state</Link>
    </div>
  )
}

export default Contact
