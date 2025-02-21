import React, { useEffect, useState } from 'react'

function Session() {

    const[handle, setHandle]= useState('')

    useEffect(()=>{
       const saved= sessionStorage.getItem('userage') 
       if(saved){
        setHandle(saved)
       }
    },[])

    let handleSubmit=(e)=>{
        let value= e.target.value          //sessionStorage.setItem() runs immediately, before state updates.
        setHandle(value)
        sessionStorage.setItem('userage', value)
    }

  
    

  return (
    <>
    <label>Name</label>
    <input type='text' value={handle} onChange={handleSubmit}/>
    </>
  )
}

export default Session