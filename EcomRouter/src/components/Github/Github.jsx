import React, { useEffect,useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data=useLoaderData()
    // const [data, setData] = useState([])
   /*  useEffect(()=>{
        fetch('https://api.github.com/users/smi804')
        .then(response=>response.json())
        .then(data=>{
            console.log(data);
            setData(data)
        })
    },[]) */
   
  return (
    < >
    <div className='w-full    '>
    <div className='text-center m-4 bg-gray-600 p-4 text-white text-3xl '>Github followers: {data.followers}
    <img className=' grid place-items-center '  src={data.avatar_url} alt="github" />
    <div  > sami {data.created_at}</div>
    </div>
    
    
    </div>
        
        </>
  )
}

export default Github

export const githubinfoLoader=async()=>{
    const response=await fetch('https://api.github.com/users/smi804')
    return response.json()
}