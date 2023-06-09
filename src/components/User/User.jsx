import React from "react";
import "./User.scss";
import ButtonsAdmin from "../ButtonsAdmin/ButtonsAdmin";
const User = ({ user, onOpenSuccess }) => {
  const defaultImage = '/assets/icons/papiro-icon-light.png';
  return (
    <div className="b-user">
      <div className="b-user b-user--left">
        <img className="b-user__image" src={user.image !== "undefined" ? user.image : defaultImage} />
        <p className="b-user__username">{user.username}</p>
      </div>
      <ButtonsAdmin user={user} onOpenSuccess={onOpenSuccess}/>
    </div>
  );
};

export default User;
