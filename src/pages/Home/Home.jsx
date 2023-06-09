import "./Home.scss";
import { useSelector } from 'react-redux';
import Post from "../../components/Post/Post";
import { useModalSuccess } from "../../customHooks/useModalSuccess";
import Toast from "../../components/Toast/Toast";
import Loading from "../../components/Loading/Loading";
const Home = () => {
    const { loading, posts, postsByUser } = useSelector((state) => state.posts);
    const { isOpenSuccess, onOpenSuccess, onCloseSuccess } = useModalSuccess();
    const displayPosts = postsByUser.length <= 0 ? posts : postsByUser;
    return (
    <div className="b-home">
        {loading && <Loading/>}
        {displayPosts.map((post) => {         
            return(
                <div key={post._id}>
                    <Post post={post} onOpenSuccess={onOpenSuccess}/>
                </div>
            )
        })}
        {isOpenSuccess && (
            <Toast
              isOpenSuccess={isOpenSuccess}
              onCloseSuccess={onCloseSuccess}
              isEditMode={true}
            />
        )}
    </div>
  )
}

export default Home