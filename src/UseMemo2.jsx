import React, { useState } from 'react'

function UseMemo2() {

    let[count, setCount]= useState(0)

        

            function expensive(){

                console.log("calculating----");
                
        
                let i= 0
                for( i=0; i<= 100000; i++){
                    i = i+ 1
                }
        
                return i
            }

           
    

    
    

  return (
    <>
         <p>Sum: {expensive()}</p>
        <p>Count:  {count}</p>
        <button onClick={()=>setCount(count++)}>Increase</button>
    </>
    
  )
}

export default UseMemo2