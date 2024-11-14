import React from 'react'
import { useParams } from 'react-router-dom'


function User() {
    const {userid}=useParams()
  return (
    <div className='bg-gray-600 text-white text-3xl p-3 m-auto grid place-items-center '>User: {userid}</div>
  )
}

export default User