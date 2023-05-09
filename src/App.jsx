import './App.css'
import Header from './components/Header/Header';
import { useEffect } from 'react';
import { getAllPosts } from './redux/posts/posts.actions';
import Routing from './components/Routing/Routing';
import { checkSession, getAllUsers } from './redux/users/users.actions';
function App() {
  useEffect(() => {
    checkSession();
    getAllUsers();
    getAllPosts();
}, [])
  return (
    <>
    <Header/>
    <Routing/>
    </>
  )
}

export default App
