import React, { useEffect, useState } from "react";
import "./ModalConfirm.scss";
import { Cancel, CheckCircle } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import { deleteUser } from "../../redux/users/users.actions";
import { useSelector } from "react-redux";
import { deleteAllPostFromUser, filteredPosts } from "../../redux/posts/posts.actions";
const ModalConfirm = ({ onCloseConfirm, user, onOpenSuccess }) => {
  const { posts, postsFiltered } = useSelector((state) => state.posts);
  const userToDelete = () =>{
    deleteAllPostFromUser(postsFiltered);
    deleteUser(user._id, onCloseConfirm, onOpenSuccess);
  }
  useEffect(() => {
    filteredPosts(posts, user);
  }, [user]);
  return (
    <div className="modal-confirm">
      <p>¿Estás seguro que quieres eliminar este usuario?</p>
      <p>(Se eliminarán todos sus post)</p>
      <div className="modal-confirm-icons">
        <Tooltip title="Cancelar" placement="bottom">
          <Cancel className="modal-confirm-icon" onClick={onCloseConfirm}/>
        </Tooltip>
        <Tooltip title="Confirmar" placement="bottom">
          <CheckCircle className="modal-confirm-icon" onClick={userToDelete}/>
        </Tooltip>
      </div>
    </div>
  );
};

export default ModalConfirm;