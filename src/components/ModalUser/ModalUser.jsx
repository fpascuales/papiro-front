import React, { useEffect, useState } from "react";
import "./ModalUser.scss";
import { useForm } from "react-hook-form";
import { updateOtherUser } from "../../redux/users/users.actions";
import UserInfo from "../UserInfo/UserInfo";
import { Cancel } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
const ModalUser = ({ onCloseUser, user, onOpenSuccess }) => {
  const { register, handleSubmit, setValue } = useForm();
  const [isEditMode, setIsEditMode] = useState(false);
  const onSubmit = (dataUser) => {
    if (isEditMode && user) {
      updateOtherUser(user._id, dataUser, onCloseUser, onOpenSuccess);
      setIsEditMode(isEditMode);
    }
    setIsEditMode(!isEditMode);
  };
  useEffect(() => {
    if (user) {
      setValue("username", user.username);
      setValue("email", user.email);
      setValue("rol", user.rol);
    }
  }, [user, setValue]);
  return (
    <div className="modal-user">
      <Tooltip title="Cancelar" placement="bottom">
        <Cancel className="modal-user-close" onClick={onCloseUser}/>
      </Tooltip>
      <form onSubmit={handleSubmit(onSubmit)}>
        <UserInfo isEditMode={isEditMode} register={register} userInfo={user} adminView={true}/>
      </form>
    </div>
  );
};

export default ModalUser;