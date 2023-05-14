import React from "react";
import "../NavBar/NavBar.scss";
import { Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import { AdminPanelSettings, FaceOutlined, RateReview } from "@mui/icons-material";
import { useModalPost } from "../../customHooks/useModalPost";
import ModalPost from "../ModalPost/ModalPost";
import { useSelector } from "react-redux";
const IconsLogin = ({ onOpenSuccess }) => {
  const { user } = useSelector((state) => state.users);
  const { isOpenPost, onOpenPost, onClosePost } = useModalPost();
  return (
    <>
      <li className="b-menu__link">
        <Tooltip title="Crear Post" placement="bottom">
          <Link to="#" onClick={onOpenPost}>
            <RateReview className="b-menu__icon" />
          </Link>
        </Tooltip>
      </li>
      <li className="b-menu__link">
        <Tooltip title="Mi Cuenta" placement="bottom">
          <Link to="/account">
            <FaceOutlined className="b-menu__icon" />
          </Link>
        </Tooltip>
      </li>
      {user && user.rol === "admin" && (
        <li className="b-menu__link">
        <Tooltip title="Administrar" placement="bottom">
          <Link to="/admin">
            <AdminPanelSettings className="b-menu__icon" />
          </Link>
        </Tooltip>
      </li>
      )}
      {isOpenPost && (
        <div className="modal-post">
          <ModalPost onClosePost={onClosePost} onOpenSuccess={onOpenSuccess} />
        </div>
      )}
    </>
  );
};

export default IconsLogin;
