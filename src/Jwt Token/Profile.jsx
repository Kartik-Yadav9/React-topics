import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Profile() {

    const token= localStorage.getItem('tokenn')
    let [see, setSee]= useState('')

    let header= {
        headers:{
            // Authorization: Bearer {token}    //does not work {} inside object
            Authorization: `Bearer ${token}`
        }
    }


    

    useEffect(()=>{
        handleS()
    },[token])

    let handleS=()=>{
        axios.get('https://api.escuelajs.co/api/v1/auth/profile', header)
        .then(res=>setSee(res.data))
        .catch(err=>console.log(err))
    }

    let handleD=()=>{
        localStorage.removeItem('tokenn')
        setSee('')
    }


  return (
    <>
        <div style={{marginTop: "50px"}}>
            <label>show data </label>
            {/* <button onClick={handleS}>click me</button> */}
            <button onClick={handleD}>Delete</button>
        </div>

        <div>
            email: {see.email}
            name: {see.name}
            role: {see.role}
            <img src= {see.avatar}/>
        </div>
    </>
  )
}

export default Profile