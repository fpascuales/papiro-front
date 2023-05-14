import React, { useEffect, useState } from 'react'
import "./InputSearch.scss";
import { Clear, Search } from '@mui/icons-material';
import { clearSearchPosts, searchPostsByUser } from '../../redux/posts/posts.actions';
import { useSelector } from 'react-redux';
import { Tooltip } from '@mui/material';
import { useLocation } from 'react-router-dom';
const InputSearch = () => {
  const { posts } = useSelector((state) => state.posts);
  const { users } = useSelector((state) => state.users);
  const [searchQuery, setSearchQuery] = useState('');
  const [typingTimeout, setTypingTimeOut] = useState(null);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  useEffect(() => {
    return () => {
      clearTimeout(typingTimeout);
    };
  }, [typingTimeout]);
  const handleInputChange = (e) => {
    const { value } = e.target;
    setSearchQuery(value);
    if(typingTimeout) {
      clearTimeout(typingTimeout);
    }
    const timeout = setTimeout(() => {
        searchPostsByUser(posts, users, value);
      if(value.length === 0){
        handleClear();
      }
      setSearchQuery('');
    }, 3000);
    setTypingTimeOut(timeout);
  }
  const handleSearch = () => {
    searchPostsByUser(posts, users, searchQuery);
    handleClear();  
  }
  const handleClear = () => {
    setSearchQuery('');
    clearSearchPosts();
  }
  return (
    <div className={`b-search ${isHomePage ? '' : 'visually-hidden'}`}>
      <input
        className='b-input-search'
        placeholder='Buscar usuario'
        value={searchQuery}
        onChange={handleInputChange}
      />
      <div>
        <Tooltip title="Buscar" placement='bottom'>
          <Search className='b-icon-search' onClick={handleSearch}/>
        </Tooltip>
        <Tooltip title="Borrar" placement='bottom'>
          <Clear className='b-icon-search' onClick={handleClear}/>
        </Tooltip>
      </div>
    </div>
  )
}

export default InputSearch