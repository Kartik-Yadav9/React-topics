import React, { lazy, Suspense } from 'react'
// import LazyChild from './LazyChild'

let LazyBeta= lazy(()=>import('./LazyChild'))

function LazyParent() {
  
  return (
    <>
        <h1>Lazy Loading</h1>


        <Suspense fallback= {<p>Loading...</p>}>
          <LazyBeta/>
        </Suspense>
    </>
  )
}

export default LazyParent






// -----------------------LazyLoad with the help of button--------------------------------


// import React, { lazy, Suspense, useState } from 'react'
// // import LazyChild from './LazyChild'

// let LazyBeta= lazy(()=>import('./LazyChild'))

// function LazyParent() {

//   let [load, setLoad]= useState(false)
//   return (
//     <>
//         <h1>Lazy Loading</h1>
//         <button onClick={()=>setLoad(!load)}>Load</button>


//         {
//           load ?
//           <Suspense fallback= {<p>Loading...</p>}>
//           <LazyBeta/>
//         </Suspense>:
//         ''
//         }
//     </>
//   )
// }

// export default LazyParent