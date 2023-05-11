import "./Home.scss";
import { useSelector } from 'react-redux';
import Post from "../../components/Post/Post";
const Home = () => {
    const { posts } = useSelector((state) => state.posts);
    return (
    <div className="b-home">
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