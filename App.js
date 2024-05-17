import './App.css';
import AdminLogin from './Component/AdminLogin';
import LandingPage from './Component/LandingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserLogin from './Component/UserLogin';
import AdminSignup from './Component/AdminSignup';
import UserSignup from './Component/UserSignup';
import AdminHome from './Component/AdminHome';
import UserHome from './Component/UserHome';
import ErrorPage from './Component/ErrorPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/*' element={<ErrorPage/>}/>
      <Route path='/admin' element={<AdminLogin/>}/>
      <Route path='/admin/signup' element={<AdminSignup/>}/>
      <Route path='/admin/home/*' element={<AdminHome/>}/>
      <Route path='/user' element={<UserLogin/>}/>
      <Route path='/user/signup' element={<UserSignup/>}/>
      <Route path='/user/home' element={<UserHome/>}/>
    
    </Routes>
    </BrowserRouter>
  )
}
export default App;
