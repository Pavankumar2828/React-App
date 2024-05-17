import React from 'react'
import { Link } from 'react-router-dom'
// import '../Styles/LandingPage.css'
const LandingPage = () => {
  return (
    <div className='LandingPage'>
        <h1>LandingPage</h1>
        <div className="sub_lp">
          <Link to="/admin">
            <img id='img1' src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png" alt="" />
            <h1 id='l1'>Admin</h1>
          </Link>
          <Link to="/user">
            <img id='img2' src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="" />
            <h1 id="l2">User</h1>
          </Link>
        </div>
    </div>
  )
}

export default LandingPage