import React, { useState } from 'react'
import '../Styles/addproducts.css'
import axios from 'axios'
const AdminAddProducts = () => {
  let [category, setCategory]=useState("")
  console.log(category);
  let [restaurant, setRestaurant]=useState("")
  let [name, setName]=useState("")
  let [description, setDescription]=useState("")
  let [price, setPrice]=useState("")
  let [quantity, setQuantity]=useState("")
  let [img, setImg]=useState("")
  let [ratings, setRatings]=useState("")

  let details = {category, restaurant, name,description, price, quantity, img, ratings}
  function saveProduct(e){
    e.preventDefault()
    axios.post("http://localhost:7373/products",details)
    .then(()=>{
      alert("Product added successfully")
    })
    .catch(()=>{
      alert("Error occurred while adding product")
    })
  }
  return (
    <div className="addproducts">
      <form onSubmit={saveProduct}>
      <h1>Add Product</h1>
      <table>
        <tr>
          <td>Category</td> <td>: <select value={category} onChange={(e)=>{setCategory(e.target.value)}}>
            <option>Select Category</option>
            <option>Starters</option>
            <option>Veg Food</option>
            <option>Non-veg Food</option>
            <option>Chinese Food</option>
            <option>Beverages</option>
            <option>Dessert</option>
          </select>
          </td>
        </tr>
        <tr>
          <td>Restaurant name</td> <td>: <input value={restaurant} onChange={(e)=>{setRestaurant(e.target.value)}} type="text" /></td>
        </tr>
        <tr>
          <td>Dish name </td><td>: <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} /></td>
        </tr>
        <tr id='description'>
          <td>Description </td><td id='iddd'>: <textarea value={description} onChange={(e)=>{setDescription(e.target.value)}} cols="30" rows="2"></textarea></td>
        </tr>
        <tr>
          <td>Price </td><td>: <input type="text" value={price} onChange={(e)=>{setPrice(e.target.value)}} /></td>
        </tr>
        <tr>
          <td>Quantity </td><td>: <input type="number" value={quantity} onChange={(e)=>{setQuantity(e.target.value)}} /></td>
        </tr>
        <tr>
          <td>thumbnail URL</td><td>: <input type="text" value={img} onChange={(e)=>{setImg(e.target.value)}} /></td>
        </tr>
        <tr>
          <td>Ratings</td> <td>: <input type="text" value={ratings} onChange={(e)=>{setRatings(e.target.value)}} /></td>
        </tr>
        </table>
        <button>Add Product</button>
      </form>
    </div>
  )
}

export default AdminAddProducts