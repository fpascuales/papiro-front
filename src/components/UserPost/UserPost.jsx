import React from 'react'
import "./UserPost.scss";
const UserPost = ({user}) => {
  return (
    <div>
      {user && (
        <p>{user.username}</p>
      )}
    </div>
  )
}

export default UserPost