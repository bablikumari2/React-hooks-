import React from 'react'
import { createContext ,useContext } from 'react'

const userContext = createContext()

function Contexts() {
   
  return (
    <div>prop-diling
<userContext.Provider value={{user:'babli'}}>
        <Main/>
        </userContext.Provider>
    </div>

  )
}

export default Contexts

function Main(){
    return(
        <>
        <Content/>
        </>
    )
}


function Content(){
    return(
        <>
        <Message/>
        </>
    )
}
function Message(){
    const {user} = useContext(userContext)
    return(
        <>
        <p>welcome {user}</p>
        </>
    )
}