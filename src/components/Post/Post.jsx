import React from 'react'
import "./Post.scss";
import UserPost from '../UserPost/UserPost';
const Post = ({ post }) => {
  const date = new Date(post.createdAt);
  const formattedDate = date.toLocaleDateString();
  return (
    <div className='b-post'>
      <p>Título: {post.title}</p>
      <p>Cuerpo: {post.body}</p>
      <p>Fecha: {formattedDate}</p>
      <UserPost userId={post.user}/>
    </div>
  )
}

export default Post