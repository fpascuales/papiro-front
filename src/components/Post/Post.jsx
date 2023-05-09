import React from "react";
import "./Post.scss";
const Post = ({ post, userPosted }) => {
  const date = new Date(post.createdAt);
  const formattedDate = date.toLocaleDateString();
  return (
    <>
      <div className="b-post">
        <div className="b-post__title">
          <h3>{post.title}</h3>
        </div>
        <p className="b-post__body">{post.body}</p>
        {post.image !== "undefined" && (
          <img className="b-post__image" src={post.image} />
        )}
        <div className="b-post__date">
          <p>{formattedDate}</p>
        </div>
      </div>
      <div className="b-post__user">
        <div className="b-post-user-info">
          <div className="b-post-user-info__avatar">
            <img
              className={userPosted.image ? "b-post-user-info__avatar": "b-post-user-info__avatar b-post-user-info__avatar__default"}
              // className="b-post-user-info__avatar b-post-user-info__avatar__image"
              src={userPosted.image}
            />
          </div>
          <p className="b-post-user-info__name">{userPosted.username}</p>
        </div>
      </div>
    </>
  );
};

export default Post;
