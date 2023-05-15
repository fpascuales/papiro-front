import React, { useState } from "react";
import "./UserInfo.scss";
import { DeleteForever } from "@mui/icons-material";
import UploadFile from "../UploadFile/UploadFile";
import { useSelector } from "react-redux";
const UserInfo = ({ isEditMode, register, userInfo, adminView, handleCancel}) => {
  const { user } = useSelector((state) => state.users);
  const [image, setImage] = useState(null);
  const defaultImage = import.meta.env.VITE_APP_DEFAULT_IMAGE;
  const onCancelClick = () => {
    handleCancel();
  }
  const onResetImage = () => {
    if(userInfo.image !== 'undefined'){
      setImage(userInfo.image);
    }
    else{
      setImage(defaultImage);
    }
  }
  return (
    <div className="b-account-info">
      {image && isEditMode && <DeleteForever className="e-del-image" onClick={onResetImage}/>}
      {image || userInfo.image !== "undefined" ? (
        <img className="b-account-info__image" src={image ? image : userInfo.image}/>
      ) : <img className="b-account-info__image" src={defaultImage}/>}      
      <div className="b-account-user">
        <div className="b-account-user__left">
          <p>Usuario</p>
          <p>Email</p>
          {adminView && <p>Rol</p>}
          {isEditMode && !adminView && <p>Contraseña</p>}
        </div>
        <div className="b-account-user__right">
          <input className="b-account-user__input" {...register("username")} readOnly/>
          {adminView ? (
            <input className="b-account-user__input" {...register("email")} readOnly/>
          ) : (
            <input
              className="b-account-user__input" {...register("email")} readOnly={!isEditMode}/>
          )}
          {adminView && user._id === userInfo._id && (
            <input className="b-account-user__input" {...register("rol")} readOnly/>
          )}
          {adminView && user._id !== userInfo._id && (
            <select className="b-account-user__select" {...register("rol")} disabled={!isEditMode}>
              <option value="user">user</option>
              <option value="admin">admin</option>
            </select>
          )}
          {isEditMode && !adminView && (
            <input className="b-account-user__input" type="password" {...register("password")}/>
          )}
        </div>
      </div>
      {isEditMode && (
        <>
          <div className={adminView ? "b-upload-hidden" : ""}>
            <p className="b-account-info__alert">Puedes cambiar: Email, Imagen y Contraseña</p>
          </div>          
          <div className={adminView ? "b-upload-hidden" : ""}>
          <UploadFile register={register} isRegister={true} funcion={(e) => {setImage(URL.createObjectURL(e.target.files[0]));}}/>
          </div>
        </>
      )}
      <div className="b-btns-account">
        {isEditMode && (
          <button className="btn-edit" onClick={onCancelClick}>CANCELAR</button>
        )}
        <button className="btn-edit">{isEditMode ? "GUARDAR" : "EDITAR"}</button>    
      </div>
    </div>
  );
};

export default UserInfo;
