import React from 'react'
import { useEffect, useState } from 'react'
// import '../Styles/LandingPage.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const UserLogin = () => {
  let [uname,setUname]=useState("")
  let [passwd,setPasswd]=useState("")
  let [data,setData]=useState([])
  let navigate=useNavigate()
  useEffect(()=>{
    axios.get("http://localhost:7373/users")
    .then((res)=>{
      setData(res.data)
    })
  },[])
  async function login(e){
    // e.preventDefault()
    // let res=await fetch("http://localhost:7373/admins")
    // let data=await res.json()
    // let auth=false
    // for(let nm of data){
    //   if((nm.name===uname || nm.email===uname) && nm.passwd===passwd){
    //     alert("Admin Login Success")
    //     auth=true
    //   }
    // }
    
    e.preventDefault()
    let auth=false
    data.map((x)=>{
      if(uname==x.email && passwd==x.passwd){
        alert("Login Success...")
        navigate("/user/home")
        auth=true
      }
    })
    if(auth==false){
      alert("Invalid email or password")
    }
  }
  return (
    <div className='admin'>
      <h1>Log in to User Account</h1>
      <form id='admin' onSubmit={login}>
        <input type="email" onChange={(e)=>{setUname(e.target.value)}} placeholder='Email address' />
        <br />
        <input type="password" onChange={(e)=>{setPasswd(e.target.value)}} placeholder='Password' />
        <br />
        <button>Login</button>
        <p>To create a new account <Link to={'signup'}>Click Here</Link></p>
      </form>
    </div>
  )
}

export default UserLogin