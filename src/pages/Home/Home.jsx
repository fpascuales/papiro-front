import "./Home.scss";
import { useSelector } from 'react-redux';
import Post from "../../components/Post/Post";
const Home = () => {
    const { posts } = useSelector((state) => state.posts);
    const { users } = useSelector((state) => state.users);
    return (
    <div className="b-home">
        {posts.map((post) => {
            const userPosted = users.find(userPosted => userPosted._id === post.user);
            return(
                <div key={post._id}>
                    <Post post={post} userPosted={userPosted}/>
                </div>
            )
        })}
    </div>
  )
}

export default Home