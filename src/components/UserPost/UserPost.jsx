import React from 'react'
import "./UserPost.scss";
const UserPost = ({ userId }) => {
  return (
    <div className='b-post-user-info'>
      <div className='b-post-user-info__avatar'></div>
      <p className='b-post-user-info__name'>{userId}</p>
    </div>
  )
}

export default UserPost