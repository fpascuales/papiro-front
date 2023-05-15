import React, { useEffect, useState } from "react";
import "./Post.scss";
import { useSelector } from "react-redux";
import ButtonsPosts from "../ButtonsPosts/ButtonsPosts";
import moment from "moment/moment";
import "moment/locale/es";
const Post = ({ post, isAccount, onOpenSuccess }) => {
  moment.locale("es");
  const { users, user } = useSelector((state) => state.users);
  const [userPosted, setUserPosted] = useState(null);
  const date = new Date(post.createdAt);
  const postedAgo = moment(date).fromNow();
  const defaultImage = '/assets/icons/papiro-icon-light.png';
  useEffect(() => {
    const foundUser = users.find((user) => user._id === post.user);
    setUserPosted(foundUser);
  }, [users, user]);  
  return (
    <>
      <div className="b-post">
        <div className="b-post__title">
          <h3>{post.title}</h3>
        </div>
        <p className="b-post__body">{post.body}</p>
        {post.image && <img className="b-post__image" src={post.image} />}
        <div className="b-post__date">
          <p>{postedAgo}</p>
        </div>
      </div>
      <div className="b-post__user">
        {userPosted && (
          <>
          <div className="b-post-user-info">
            {!isAccount && (
            <>
              <div className="b-post-user-info__avatar">             
                <img className="b-post-user-info__avatar" src={userPosted.image !== "undefined" ? userPosted.image : defaultImage}/>
              </div>
              <p className="b-post-user-info__name">{userPosted.username}</p>
            </>
            )}
          </div>
          {(userPosted._id === user?._id ||user?.rol === "admin") && (
            <ButtonsPosts userPosted={userPosted} user={user} post={post} onOpenSuccess={onOpenSuccess}/>
          )}
          </>
        )}
      </div>
    </>
  );
};

export default Post;
