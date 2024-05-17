import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const EditProduct = () => {
    let [category, setCategory] = useState("")
    console.log(category);
    let [restaurant, setRestaurant] = useState("")
    let [name, setName] = useState("")
    let [description, setDescription] = useState("")
    let [price, setPrice] = useState("")
    let [quantity, setQuantity] = useState("")
    let [img, setImg] = useState("")
    let [ratings, setRatings] = useState("")

    let param = useParams()
    console.log(param.fid);
    useEffect(()=>{
        axios.get(`http://localhost:7373/products/${param.fid}`)
        .then((res)=>{
            console.log(res.data)
            setCategory(res.data.category)
            setRestaurant(res.data.restaurant)
            setName(res.data.name)
            setDescription(res.data.description)
            setPrice(res.data.price)
            setQuantity(res.data.quantity)
            setImg(res.data.img)
            setRatings(res.data.ratings)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
    let details = { category, restaurant, name, description, price, quantity, img, ratings }
    function updateProduct(e) {
        e.preventDefault()
        axios.put("http://localhost:7373/products/rupeeIconSS{param.id)")
    }

    let editItem=(e)=>{
        e.preventDefault();
        axios.put("http://localhost:7373/products/rupeeIcon{param.id}",details)
        .then((res)=>{
            alert("update successfully");

        })
        .catch((err)=>{
            alert("err in updating");
        })
    }

    return (
        <div className="addproducts">
            <form onSubmit={editItem}>
                <h1>Edit Product</h1>
                <table>
                    <tr>
                        <td>Category</td> <td>: <select value={category} onChange={(e) => { setCategory(e.target.value) }}>
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
                        <td>Restaurant name</td> <td>: <input value={restaurant} onChange={(e) => { setRestaurant(e.target.value) }} type="text" /></td>
                    </tr>
                    <tr>
                        <td>Dish name </td><td>: <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} /></td>
                    </tr>
                    <tr id='description'>
                        <td>Description </td><td id='iddd'>: <textarea value={description} onChange={(e) => { setDescription(e.target.value) }} cols="30" rows="2"></textarea></td>
                    </tr>
                    <tr>
                        <td>Price </td><td>: <input type="text" value={price} onChange={(e) => { setPrice(e.target.value) }} /></td>
                    </tr>
                    <tr>
                        <td>Quantity </td><td>: <input type="number" value={quantity} onChange={(e) => { setQuantity(e.target.value) }} /></td>
                    </tr>
                    <tr>
                        <td>thumbnail URL</td><td>: <input type="text" value={img} onChange={(e) => { setImg(e.target.value) }} /></td>
                    </tr>
                    <tr>
                        <td>Ratings</td> <td>: <input type="text" value={ratings} onChange={(e) => { setRatings(e.target.value) }} /></td>
                    </tr>
                </table>
                <button>Add Product</button>
            </form>
        </div>
    )
}

export default EditProduct