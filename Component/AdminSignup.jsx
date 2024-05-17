import React from 'react'
import { useState } from 'react'
import axios from 'axios'
const AdminSignup = () => {
    let [name, setName] = useState("")
    let [email, setEmail] = useState("")
    let [passwd, setPasswd] = useState("")
    let [phone, setPhone] = useState("")

    let admins = { name, email, passwd, phone }
    function signup(e) {
        e.preventDefault()
        axios.get("http://localhost:7373/admins")
            .then((res) => {
                let flag = false
                let data = res.data
                data.map((x) => {
                    if (x.email == email) {
                        flag = true
                    }
                })
                if (flag == false) {
                    axios.post("http://localhost:7373/admins", admins)
                        .then(() => { alert("Admin added successfully...") })
                        .catch(() => { alert("invalid data") })
                }
                else {
                    alert("Admin already exists...")
                }
            })
            .catch((err) => {
                alert("Problem occured while fetching data")
            })

        // fetch("http://localhost:7373/admins",{
        //     method:"POST",
        //     headers:{"Content-Type":"application/json"},
        //     body:JSON.stringify(admins)
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
            <h1>Admin Signup Form</h1>
            <form id='admin' onSubmit={signup}>
                <input type="text" onChange={(e) => { setName(e.target.value) }} placeholder="Admin's Name" />
                <br />
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder='Email address' />
                <br />
                <input type="tel" onChange={(e) => { setPhone(e.target.value) }} pattern='[0-9]{10}' placeholder='Phone Number' />
                <input type="password" onChange={(e) => { setPasswd(e.target.value) }} placeholder='Password' />
                <br />
                <button>Register</button>
            </form>
        </div>
    )
}

export default AdminSignup