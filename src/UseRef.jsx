


import React, { useRef } from 'react'

export default function UseRef() {

    let name= useRef()
    console.log(name);

    let clicked= ()=>{
       console.log( name.current.value);
    }



  return (   
    <>    
        <input type='text' ref={name}  placeholder='name'/>
        <button onClick={clicked} >Click</button>
    </>
  )
}

