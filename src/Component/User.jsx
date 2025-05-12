import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const User = () => {
    const params = useParams();
    const { name} = params

    const location = useLocation();
    console.log(location);
    
   return (
    <h1>User {name} Page</h1>
  )
}

export default User