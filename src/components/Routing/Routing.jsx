import React from 'react'
import "./Routing.scss";
import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Login from '../Login/Login';
import Register from '../../pages/Register/Register';
import Account from '../../pages/Account/Account';
const Routing = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/account" element={<Account/>}/>
    </Routes>
    </>
  )
}

export default Routing