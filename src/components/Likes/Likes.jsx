import React, { useState } from 'react';
import "./Likes.scss";
import { Favorite, FavoriteBorder } from '@mui/icons-material';

const Likes = ({ likes }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(likes);
  const toggleLikes = () => {
    if(isLiked) {
      setLikesCount(likesCount - 1);
    } else {
      setLikesCount(likesCount + 1);
    }
    setIsLiked(!isLiked);
  };
  console.log(likesCount);
  return (
    <div className='b-likes'>
      {isLiked ? (
        <Favorite className='b-likes__icon' onClick={toggleLikes} />
      ) : (
        <FavoriteBorder className='b-likes__icon' onClick={toggleLikes} />
      )}
      <p>{likesCount}</p>
    </div>
  );
};

export default Likes;