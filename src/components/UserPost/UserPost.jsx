import React from 'react'
import "./UserPost.scss";
const UserPost = ({ userId }) => {
  return (
    <div className='b-post-user-info'>
      <div className='b-post-user-info__avatar'></div>
      <p>{userId}</p>
    </div>
  )
}

export default UserPost