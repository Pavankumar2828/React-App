import React from 'react'
import { useState } from 'react'
import axios from 'axios'
const UserSignup = () => {
    let [name,setName]=useState("")
    let [email, setEmail]=useState("")
    let [passwd,setPasswd]=useState("")
    let [phone,setPhone]=useState("")

    let users={name,email,passwd,phone}
    function signup(e){
        e.preventDefault()
        axios.get("http://localhost:7373/users")
        .then((res)=>{
            let flag=false
            let data=res.data
            data.map((x)=>{
                if(x.email==email){
                    flag=true
                }
            })
            if(flag==false){
                axios.post("http://localhost:7373/users",users)
                .then(()=>{alert("User added successfully...")})
                .catch(()=>{alert("invalid data")})
            }
            else{
                alert("User already exists...")
            }
        })
        .catch((err)=>{
            alert("Problem occured while fetching data")
        })

        // fetch("http://localhost:7373/users",{
        //     method:"POST",
        //     headers:{"Content-Type":"application/json"},
        //     body:JSON.stringify(users)
        // })
        // .then((res)=>{
        //     console.log(res);
        //     alert(`Signup successful.Account for ${name} is created`)
        // })
        // .catch((err)=>{
        //     alert("Invalid data")
        // })
        
    }
    return (
        <div className='admin'>
            <h1>User Signup Form</h1>
            <form id='admin' onSubmit={signup}>
                <input type="text" onChange={(e)=>{setName(e.target.value)}} placeholder="User Name" />
                <br />
                <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder='Username or Email address' />
                <br />
                <input type="tel" onChange={(e)=>{setPhone(e.target.value)}} pattern='[0-9]{10}' placeholder='Phone Number'/>
                <input type="password" onChange={(e)=>{setPasswd(e.target.value)}} placeholder='Password' />
                <br />
                <button>Register</button>
            </form>
        </div>
  )
}

export default UserSignup