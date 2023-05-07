import { useEffect } from "react";
import "./Home.scss";
import { useSelector } from 'react-redux';
import { getAllPosts } from "../../redux/posts/posts.actions";
import Post from "../../components/Post/Post";
const Home = () => {
    useEffect(() => {
        getAllPosts();
    }, [])
    const { posts } = useSelector((state) => state.posts);
    return (
    <div>
        {posts.map((post) => {
            return(
                <div key={post._id}>
                    <Post post={post}/>
                </div>
            )
        })}
    </div>
  )
}

export default Home