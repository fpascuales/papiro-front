import React from "react";
import "./Post.scss";
import UserPost from "../UserPost/UserPost";
const Post = ({ post }) => {
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
      <UserPost userId={post.user} />
    </div>
    </>

  );
};

export default Post;
