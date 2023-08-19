import React from 'react'
import { useParams } from 'react-router-dom'

const Profile = () => {

let {userId} = useParams()
  return (
    <div>
      <h2>Profile</h2>
      <p>The id of this user is {userId}</p>
    </div>
  )
}

export default Profile
