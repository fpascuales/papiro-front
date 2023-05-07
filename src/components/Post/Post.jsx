import React, { useEffect } from 'react'
import "./Post.scss";
import { getUserById } from '../../redux/users/users.actions';
import { useSelector } from 'react-redux';
import UserPost from '../UserPost/UserPost';
const Post = ({post}) => {
  useEffect(() => {
    console.log(post.user);
    getUserById(post.user);
  }, [post.user]);
  const { userSelected } = useSelector((state) => state.users);
  console.log(userSelected);
  return (
    <div>
        <h4>{post.title}</h4>
        <p>{post.body}</p>
        <UserPost user={userSelected}/>
    </div>
  )
}

export default Post