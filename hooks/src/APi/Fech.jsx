import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function Fech() {

    const[user,setUser] = useState([])

    

     useEffect(
        ()=>{
           ( async()=>{
                const res = await fetch("https://jsonplaceholder.typicode.com/posts")
                setUser(await res.json())
            }
           )()
          
        },
        [])
     
  return (
    <div>Fech

    {
        user.map((item)=>(
            <hi>item.name</hi>
        ))
    }
    </div>
  )
}
// Remember we provided an empty array as second argument to the effect hook to avoid activating it on component 
// updates but only on mounting of the component. i.e, It fetches only on component mount.