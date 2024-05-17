import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../Styles/AdminView.css'
import { Link, useNavigate } from 'react-router-dom'
import StarIcon from '@mui/icons-material/Star';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const AdminView = () => {
  let [data, setData] = useState([])
  let [force, setForce] = useState(true)
  let [starters, setStarters] = useState([])
  let [veg, setVeg] = useState([])
  let [nonveg, setNonveg] = useState([])
  let [chinese, setChinese] = useState([])
  let [beverages, setBeverages] = useState([])
  let [dessert, setDessert] = useState([])

  useEffect(() => {
    axios.get("http://localhost:7373/products")
      .then((res) => {
        setData(res.data)
        setStarters(data.filter((x) => {
          return x.category == "Starters"
        }))
        setVeg(data.filter((x) => {
          return x.category == "Veg Food"
        }))
        setNonveg(data.filter((x) => {
          return x.category == "Non-veg Food"
        }))
        setBeverages(data.filter((x) => {
          return x.category == "Beverages"
        }))
        setDessert(data.filter((x) => {
          return x.category == "Dessert"
        }))
        setChinese(data.filter((x) => {
          return x.category == "Chinese Food"
        }))
      })
      .catch((err) => {
        alert("Error Occurred" + err)
        console.log(err);
      })
  }, [force])

  useEffect(() => {
    setTimeout(() => {
      setForce(!force)
    }, 100)
  }, [])
  let navigate = useNavigate()
  function edit(id){
    navigate(`/admin/home/edit/${id}`)
  }
  function remove(id, name) {
    axios.delete(`http://localhost:7373/products/${id}`)
    alert(name + " Removed Successfully")
    setForce(!force)
  }
  console.log(force)
  // console.log(data)
  return (
    <div className="adminview">
      <h1 id='sidebars'>Starters</h1>
      <div className="foods">
        {starters.map((x) => {
          return (
            <div className="card">
              <img src={x.img} alt="" />
              <div className="card-details">
                <div className="restaurant">
                  <h2>{x.restaurant}</h2>
                  <h3>{x.ratings} <StarIcon id="star" /></h3>
                </div>
                <h2>{x.name}</h2>
                <h3 id='price'><CurrencyRupeeIcon id='rupeeIcon' />{x.price}</h3>
              </div>
              <div className="ops">
                <button onClick={()=>{edit(x.id)}}>Edit</button>
                <button onClick={() => { remove(x.id, x.name) }}>Delete</button>
              </div>
            </div>
          )
        })}
      </div>
      <h1 id='sidebars'>Veg Foods</h1>
      <div className="foods">
        {veg.map((x) => {
          return (
            <div className="card">
              <img src={x.img} alt="" />
              <div className="card-details">
                <div className="restaurant">
                  <h2>{x.restaurant}</h2>
                  <h3>{x.ratings} <StarIcon id="star" /></h3>
                </div>
                <h2>{x.name}</h2>
                <h3><CurrencyRupeeIcon id='rupeeIcon' />{x.price}</h3>
              </div>
              <div className="ops">
                <button onClick={()=>{edit(x.id)}}>Edit</button>
                <button onClick={() => { remove(x.id, x.name) }}>Delete</button>
              </div>
            </div>
          )
        })}
      </div>
      <h1 id='sidebars'>Non-Veg Foods</h1>
      <div className="foods">
        {nonveg.map((x) => {
          return (
            <div className="card">
              <img src={x.img} alt="" />
              <div className="card-details">
                <div className="restaurant">
                  <h2>{x.restaurant}</h2>
                  <h3>{x.ratings} <StarIcon id="star" /></h3>
                </div>
                <h2>{x.name}</h2>
                <h3><CurrencyRupeeIcon id='rupeeIcon' />{x.price}</h3>
              </div>
              <div className="ops">
                <button onClick={()=>{edit(x.id)}}>Edit</button>
                <button onClick={() => { remove(x.id, x.name) }}>Delete</button>
              </div>
            </div>
          )
        })}
      </div>
      <h1 id='sidebars'>Chinese Foods</h1>
      <div className="foods">
        {chinese.map((x) => {
          return (
            <div className="card">
              <img src={x.img} alt="" />
              <div className="card-details">
                <div className="restaurant">
                  <h2>{x.restaurant}</h2>
                  <h3>{x.ratings} <StarIcon id="star" /></h3>
                </div>
                <h2>{x.name}</h2>
                <h3><CurrencyRupeeIcon id='rupeeIcon' />{x.price}</h3>
              </div>
              <div className="ops">
                <button onClick={()=>{edit(x.id)}}>Edit</button>
                <button onClick={() => { remove(x.id, x.name) }}>Delete</button>
              </div>
            </div>
          )
        })}
      </div>
      <h1 id='sidebars'>Beverages</h1>
      <div className="foods">
        {beverages.map((x) => {
          return (
            <div className="card">
              <img src={x.img} alt="" />
              <div className="card-details">
                <div className="restaurant">
                  <h2>{x.restaurant}</h2>
                  <h3>{x.ratings} <StarIcon id="star" /></h3>
                </div>
                <h2>{x.name}</h2>
                <h3><CurrencyRupeeIcon id='rupeeIcon' />{x.price}</h3>
              </div>
              <div className="ops">
                <button onClick={()=>{edit(x.id)}}>Edit</button>
                <button onClick={() => { remove(x.id, x.name) }}>Delete</button>
              </div>
            </div>
          )
        })}
      </div>
      <h1 id='sidebars'>Dessert</h1>
      <div className="foods">
        {dessert.map((x) => {
          return (
            <div className="card">
              <img src={x.img} alt="" />
              <div className="card-details">
                <div className="restaurant">
                  <h2>{x.restaurant}</h2>
                  <h3>{x.ratings} <StarIcon id="star" /></h3>
                </div>
                <h2>{x.name}</h2>
                <h3><CurrencyRupeeIcon id='rupeeIcon' />{x.price}</h3>
              </div>
              <div className="ops">
                <button onClick={()=>{edit(x.id)}}>Edit</button>
                <button onClick={() => { remove(x.id, x.name) }}>Delete</button>
              </div>
            </div>
          )
        })}
      </div>
      {/* <button onClick={a}>load</button> */}
    </div>
  )
}

export default AdminView