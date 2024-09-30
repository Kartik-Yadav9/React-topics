import React, { useEffect, useState } from 'react'

function Functional() {

    

    let[ counter, setCounter]= useState(0)    //in class, setState is used

    let increment=()=>{
        counter++;
        setCounter(counter)
    }

    
    //useEffect

    useEffect(()=>{
        console.log('rendered full everytime when chnge'); //component did mount, without dependencies
    })


    useEffect(()=>{
        console.log('component did update');  //  component did update, with dependencies during change
    },[counter])

  return (
    <>
    
    <p>Counter: {counter} </p>
    <button onClick={increment}>increment</button>

    </>
  )
}

export default Functional