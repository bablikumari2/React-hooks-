import React from 'react'
import { useState } from 'react'

export default function Counter() {
    const[count,setCount] = useState(0)

    const dec = ()=>{
        if(count>0){
            setCount(count-1)
        }
        else{
            setCount(0)
        }
    }

  return (
    <div>Counter
<h1>{count}</h1>
<button onClick={()=> setCount(count+1)}>Add</button>
<button onClick={()=>setCount(0)}>Restart</button>
{
    count>0 ? (<button onClick={()=>setCount(count-1)}>Decrease</button>):
    (<></>)
}
<button onClick={dec}>-</button>

    </div>
  )
}
