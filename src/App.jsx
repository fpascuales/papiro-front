import './App.css'
import Header from './components/Header/Header';
import { useEffect } from 'react';
import { getAllPosts } from './redux/posts/posts.actions';
import Routing from './components/Routing/Routing';
function App() {
  useEffect(() => {
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
