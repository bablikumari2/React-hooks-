import React from 'react'
import { useState } from 'react'

function Propdiling() {
    const[user,SetUser] =useState({name:"babli"})
  return (
    <div>prop-diling

        <Main user={user}/>
    </div>

  )
}

export default Propdiling

function Main({user}){
    return(
        <>
        <Content user={user}/>
        </>
    )
}


function Content({user}){
    return(
        <>
        <Message user={user}/>
        </>
    )
}
function Message({user}){
    return(
        <>
        <p>welcome{user.name}</p>
        </>
    )
}