import React, { useEffect, useState } from "react";
import "./Account.scss";
import { useSelector } from "react-redux";
import ButtonEdit from "../../components/ButtonEdit/ButtonEdit";
import { useModalSuccess } from "../../customHooks/useModalSuccess";
import Toast from "../../components/Toast/Toast";
const Account = () => {
  const { user } = useSelector((state) => state.users);
  const { isOpenSuccess, onOpenSuccess, onCloseSuccess } = useModalSuccess();
  const [isEditMode, setIsEditMode] = useState(false);  
  const [editedUser, setEditedUser] = useState({
    email: user ? user.email : ""
  });
  useEffect(() => {
    if(user) {
      setEditedUser((prevState) => ({
        ...prevState,
        email: user.email
      }));
    }
  }, [user]);
  const handleEditUser = (e) => {
    const { name, value } = e.target;
    setEditedUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <>
    {user !== null && (
      <div className="b-account">
      <div className="b-account__header">
        <h1 className="b-account__title">Mi Cuenta</h1>
        <ButtonEdit
          setIsEditMode={setIsEditMode}
          isEditMode={isEditMode}
          editedUser={editedUser}
          userId={user._id}
          onOpenSuccess={onOpenSuccess}
        />
      </div>
      <div className="b-account-info">
        <div>
          <img className="b-account-left" src={user.image} />
        </div>
        <div className="b-account-right">
          <div className="b-account-right__right-one">
            <p>Usuario</p>
            <p>Email</p>
            <p>Rol</p>
          </div>
          <div className="b-account-right__right-two">
            <input
              className="b-account-right__input"
              name="username"
              value={user.username}
              readOnly
            ></input>
            <input
              className="b-account-right__input"
              name="email"
              value={editedUser.email}
              onChange={handleEditUser}
              readOnly={!isEditMode}
            ></input>
            <input
              className="b-account-right__input"
              value={user.rol}
              readOnly
            ></input>
          </div>
        </div>
      </div>
      {isOpenSuccess && <Toast  isOpenSuccess={isOpenSuccess} onCloseSuccess={onCloseSuccess} isEditMode={isEditMode}/>}
    </div>
    )}
    </> 
  );
};

export default Account;
