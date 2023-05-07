import React from 'react'
import "./Header.scss";
const Header = () => {
  return (
    <div className='b-header'>
      <div className='b-header b-header__section'>
        <img className='logo' src='assets/images/papiro-logo-light.png'/>
        {/* METER COMPONENTE DE FORM PARA INPUT BÚSQUEDA */}
        <input placeholder='Buscar post'></input>
      </div>
      <div className='b-header b-header__section'>
        <p>Usuarios</p>
        <p>Crear Post</p>
        <p>Login / Logout</p>
      </div>
    </div>
  )
}

export default Header