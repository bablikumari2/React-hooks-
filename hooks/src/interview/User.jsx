import React from 'react'
import { useState } from 'react'

export default function User() {

    const[data,setData] = useState([
        {id:1,name:"babli"},
        {id:2,name:"saurabh"}
    ])

    const handledelete= (id)=>{
const newdata = data.filter(data=>data.id!==id)
setData(newdata)
    }
  return (
    <div>User

        {
            data.map((data)=>(
                <h1>{data.id}{data.name}
                <button onClick={()=>handledelete(data.id)}>Delete</button>
                </h1>
            ))
        }
    </div>
  )
}
