// import React, { useMemo, useState } from 'react'

// function UseMemo() {

//     let[increase, setIncrease]= useState(0)

//     let hook= useMemo(()=>{                   //using this it will load only once
//         for(let i=0; i<=5; i++){
//             console.log(i);
//         }

//         return null
//     }, [])

//   return (
//     <>
//         <h3>Counter: {increase} </h3>
//         <button onClick={()=>setIncrease(increase+1)}>Increment</button>
        
//         {hook}      
        
//     </>
//   )
// }

// export default UseMemo

//benfits in time and space, avoid unneseccary rendering of many components




















import React, { useMemo, useState } from 'react'


function UseMemo() {

  //function to multiply add, it is re-renderinng while using subs also because whole components re-renders
  //to stop we use usememo

 

  let[add, setAdd]= useState(0)
  let[subs, letSubs]= useState(100)

  let multiply= useMemo(()=>{
    console.log(`multiplied: ${add}`);  
    return add *2
  },[add])

  return (
    
    <>
    <div style={{textAlign: 'center'}}>

      <p>multiply add: {multiply}</p>

      <span>{add} </span>
      <button onClick={()=>setAdd(add+1)}>adds</button><br/>

      <span>{subs} </span>
      <button onClick={()=>letSubs(subs-1)}>subs</button>

    </div>


    </>
  )
}

export default UseMemo