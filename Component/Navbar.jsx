import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Navbar.css'
const Navbar = () => {
  return (
    <div className="navbar">
        <div className="logo">
            <Link to="/admin/home">
                <h1>Food<span>Cart</span></h1>
            </Link>
        </div>
        <div className="pages">
            <Link to="view">View </Link>
            <Link to="addproducts">Add products</Link>
        </div>
    </div>
  )
}

export default Navbar