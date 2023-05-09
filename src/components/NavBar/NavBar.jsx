import React from "react";
import "./NavBar.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useModalLogin } from "../../customHooks/useModalLogin";
import Login from "../Login/Login";
import { logout } from "../../redux/users/users.actions";
import { useModalPost } from "../../customHooks/useModalPost";
import CreatePost from "../CreatePost/CreatePost";
const NavBar = () => {
  const { user } = useSelector((state) => state.users);
  const { isOpenLogin, onOpenLogin, onCloseLogin } = useModalLogin();
  const { isOpenPost, onOpenPost, onClosePost } = useModalPost();
  return (
    <nav>
      <ul className="b-menu">
        <li className="b-menu__link">
          <Link to="/">Inicio</Link>
        </li>
        {user && (
          <li className="b-menu__link">
            <Link to="#" onClick={onOpenPost}>Nuevo Post</Link>
          </li>
        )}
        {user && (
          <li className="b-menu__link">
          <Link to="/account">Mi Cuenta</Link>
        </li>
        )}
        {!user && (
          <li className="b-menu__link">
            <Link to="/register">Registro</Link>
          </li>
        )}
        <li className="b-menu__link">
          {!user ? (
            <Link to="#" onClick={onOpenLogin}>
              Iniciar Sesión
            </Link>
          ) : (
            <Link to="#" onClick={logout}>
              Cerrar Sesión
            </Link>
          )}
        </li>
      </ul>
      <div className={`modal-login ${isOpenLogin ? "open" : ""}`}>
        <Login onCloseLogin={onCloseLogin}/>
      </div>
      {isOpenPost && (
        <div className="modal-post">
        <CreatePost onClosePost={onClosePost}/>
      </div>
      )}
      
    </nav>
  );
};

export default NavBar;
