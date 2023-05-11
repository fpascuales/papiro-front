import React from "react";
import "./NavBar.scss";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useModalLogin } from "../../customHooks/useModalLogin";
import Login from "../Login/Login";
import { logout } from "../../redux/users/users.actions";
import { useModalPost } from "../../customHooks/useModalPost";
import CreatePost from "../CreatePost/CreatePost";
import { FaceOutlined, Home, HowToReg, LoginOutlined, Logout, RateReview, } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
const NavBar = () => {
  const { user } = useSelector((state) => state.users);
  const { isOpenLogin, onOpenLogin, onCloseLogin } = useModalLogin();
  const { isOpenPost, onOpenPost, onClosePost } = useModalPost();
  const navigate = useNavigate();
  return (
    <nav>
      <ul className="b-menu">
        <li className="b-menu__link">
          <Tooltip title="Inicio" placement="bottom">
            <Link to="/">
              <Home className="b-menu__icon" />
            </Link>
          </Tooltip>
        </li>
        {user && (
          <li className="b-menu__link">
            <Tooltip title="Crear Post" placement="bottom">
              <Link to="#" onClick={onOpenPost}>
                <RateReview className="b-menu__icon" />
              </Link>
            </Tooltip>
          </li>
        )}
        {user && (
          <li className="b-menu__link">
            <Tooltip title="Mi Cuenta" placement="bottom">
              <Link to="/account">
                <FaceOutlined className="b-menu__icon" />
              </Link>
            </Tooltip>
          </li>
        )}
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
      </ul>
      <div className={`modal-login ${isOpenLogin ? "open" : ""}`}>
        <Login onCloseLogin={onCloseLogin} />
      </div>
      {isOpenPost && (
        <div className="modal-post">
          <CreatePost onClosePost={onClosePost} />
        </div>
      )}
    </nav>
  );
};

export default NavBar;
