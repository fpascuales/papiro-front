import React from 'react'
import "./Routing.scss";
import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Login from '../Login/Login';
import Register from '../../pages/Register/Register';
const Routing = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
    </>
  )
}

export default Routing