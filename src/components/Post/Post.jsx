import React, { useEffect, useState } from "react";
import "./Post.scss";
import { useSelector } from "react-redux";
// import { DeleteForever, RateReview } from "@mui/icons-material";
// import { deletePost } from "../../redux/posts/posts.actions";
const Post = ({ post }) => {
  const { users,  } = useSelector((state) => state.users);
  const [userPosted, setUserPosted] = useState(null);
  useEffect(() => {
    const foundUser = users.find((user) => user._id === post.user);
    setUserPosted(foundUser);
  }, [users]);
  const date = new Date(post.createdAt);
  const formattedDate = date.toLocaleDateString();

  // const deletePostSelected = () => {
  //   deletePost(post._id);
  // }

  return (
    <>
      <div className="b-post">
        <div className="b-post__title">
          <h3>{post.title}</h3>
        </div>
        <p className="b-post__body">{post.body}</p>
        {post.image && <img className="b-post__image" src={post.image} />}
        <div className="b-post__date">
          <p>{formattedDate}</p>
        </div>
      </div>
      <div className="b-post__user">
        {userPosted && (
          <div className="b-post-user-info">
            <div className="b-post-user-info__avatar">
              <img
                className={
                  userPosted.image
                    ? "b-post-user-info__avatar"
                    : "b-post-user-info__avatar b-post-user-info__avatar__default"
                }
                src={userPosted.image}
              />
            </div>
            <p className="b-post-user-info__name">{userPosted.username}</p>
            {/* {userPosted._id === user?._id && (
              <div>
              <RateReview className="b-post-user-info__icon"/>
              <DeleteForever className="b-post-user-info__icon" onClick={deletePostSelected}/>
              </div>
            )} */}
          </div>
        )}
      </div>
    </>
  );
};

export default Post;
