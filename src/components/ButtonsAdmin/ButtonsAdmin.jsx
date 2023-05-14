import React from "react";
import "./ButtonsAdmin.scss";
import { DeleteForever, Help, } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import { useModalUser } from "../../customHooks/useModalUser";
import { useModalConfirm } from "../../customHooks/useModalConfirm";
import ModalUser from "../ModalUser/ModalUser";
import ModalConfirm from "../ModalConfirm/ModalConfirm";
const ButtonsAdmin = ({ user, onOpenSuccess }) => {
  const { isOpenUser, onOpenUser, onCloseUser } = useModalUser();
  const { isOpenConfirm, onOpenConfirm, onCloseConfirm } = useModalConfirm();
  return (
    <div className="b-btn-admin">
      <Tooltip title="Editar" placement="bottom">
        <Help className="b-btn-admin__icon" onClick={onOpenUser}/>
      </Tooltip>
      {user.rol !== "admin" && (
        <Tooltip title="Eliminar" placement="bottom">
          <DeleteForever className="b-btn-admin__icon" onClick={onOpenConfirm}/>
        </Tooltip>
      )}
      {isOpenUser && (
          <ModalUser onCloseUser={onCloseUser} user={user} onOpenSuccess={onOpenSuccess} />
      )}
      {isOpenConfirm && (
        <ModalConfirm onCloseConfirm={onCloseConfirm} user={user} onOpenSuccess={onOpenSuccess} />
      )
      }
    </div>
  );
};

export default ButtonsAdmin;
