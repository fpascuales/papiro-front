import React from "react";
import "./ButtonEdit.scss";
import { updateUser } from "../../redux/users/users.actions";
const ButtonEdit = ({ setIsEditMode, isEditMode, editedUser, userId, onOpenSuccess }) => {
  const handleClick = () => {
    if(isEditMode){
        updateUser(userId, editedUser);
        setIsEditMode(isEditMode);
        onOpenSuccess();
    }
    setIsEditMode(!isEditMode);
  };
  return (
    <button className="btn-edit" onClick={handleClick}>
      {isEditMode ? "GUARDAR" : "EDITAR"}
    </button>
  );
};

export default ButtonEdit;
