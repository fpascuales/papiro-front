import React from 'react'
import "./Header.scss";
import NavBar from '../NavBar/NavBar';
import { useNavigate } from 'react-router-dom';
import InputSearch from '../InputSearch/InputSearch';
import { clearSearchPosts } from '../../redux/posts/posts.actions';
const Header = () => {
  const navigate = useNavigate();
  const handleClear = () => {
    navigate("/");
    clearSearchPosts();
  };
  return (
    <div className='b-header'>
      <div className='b-header b-header__logo'>
        <img className='logo' src='assets/images/papiro-logo-light.png' onClick={handleClear}/>
      </div>
      <InputSearch/>
      <div className='b-header b-header__section'>
        <NavBar/>
      </div>
    </div>
  )
}

export default Header