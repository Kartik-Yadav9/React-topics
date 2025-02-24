import axios from 'axios'
import React, { useState } from 'react'
import Profile from './Profile'

function Jwt() {

    let [datas, setDatas]= useState({
        email: '',
        password: ''
    })

    let handleInput=(e)=>{
        setDatas((prevState)=>({...prevState,[e.target.id]: e.target.value}))
    }

    let handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('https://api.escuelajs.co/api/v1/auth/login', datas)
        .then(res=>{
            localStorage.setItem('tokenn', res.data.access_token)
            console.log(res)})
        .catch(err=>console.log(err))

        
    }
    
  return (
    <>
        <div>
            <form onSubmit={handleSubmit}>
                <label>Email=</label>
                <input  onChange={handleInput} id='email' type='email'/>
                <label>password=</label>
                <input onChange={handleInput} id='password' type='text'/>

                <button type='submit'>Click</button>

            </form>
        </div>
        <div>
            <Profile/>
        </div>
    </>
  )
}

export default Jwt