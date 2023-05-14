import React from "react";
import "../NavBar/NavBar.scss";
import { useSelector } from "react-redux";
import { Tooltip } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { HowToReg, LoginOutlined, Logout } from "@mui/icons-material";
import { logout } from "../../redux/users/users.actions";
import { useModalLogin } from "../../customHooks/useModalLogin";
import Login from "../Login/Login";
const IconsNoLogin = () => {
  const { user } = useSelector((state) => state.users);
  const { isOpenLogin, onOpenLogin, onCloseLogin } = useModalLogin();
  const navigate = useNavigate();
  return (
    <>
      {!user && (
        <li className="b-menu__link">
          <Tooltip title="Registro" placement="bottom">
            <Link to="/register">
              <HowToReg className="b-menu__icon" />
            </Link>
          </Tooltip>
        </li>
      )}
      <li className="b-menu__link">
        {!user ? (
          <Tooltip title="Iniciar Sesión" placement="bottom">
            <Link to="#" onClick={onOpenLogin}>
              <LoginOutlined className="b-menu__icon" />
            </Link>
          </Tooltip>
        ) : (
          <Tooltip title="Cerrar Sesión" placement="bottom">
            <Link to="#" onClick={() => logout(navigate)}>
              <Logout className="b-menu__icon" />
            </Link>
          </Tooltip>
        )}
      </li>
      <div className={`modal-login ${isOpenLogin ? "open" : ""}`}>
        <Login onCloseLogin={onCloseLogin} />
      </div>
    </>
  );
};

export default IconsNoLogin;
