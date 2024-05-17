import React from 'react'
import Navbar from './Navbar'
import '../Styles/AdminHome.css'
import { Route, Routes } from 'react-router-dom'
import AdminView from './AdminView'
import AdminAddProducts from './AdminAddProducts'
import ErrorPage from './ErrorPage'
import AdminHomeContent from './AdminHomeContent'
import ViewProduct from './ViewProduct'
import EditProduct from './EditProduct'

const AdminHome = () => {
  return (
    <div className="adminhome">
      <Navbar />
      <Routes>
        <Route path='/' element={<AdminHomeContent/>}/>
        <Route path='/view' element={<AdminView />} />
        {/* <Route path='/view/:username' element={<ViewProduct/>} /> */}
        <Route path='/edit/:fid' element={<EditProduct/>}/>
        <Route path='/addproducts' element={<AdminAddProducts/>}/>
        <Route path='/*' element={<ErrorPage/>}/>
      </Routes>
    </div>
  )
}

export default AdminHome