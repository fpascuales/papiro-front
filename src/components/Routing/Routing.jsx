import React from 'react'
import "./Routing.scss";
import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Login from '../Login/Login';
const Routing = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>    
    </Routes>
    </>
  )
}

export default Routing