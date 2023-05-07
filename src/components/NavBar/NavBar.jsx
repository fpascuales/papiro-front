import React from "react";
import "./NavBar.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useModal } from "../../customHooks/useModal";
import Login from "../Login/Login";
const NavBar = () => {
  const { user } = useSelector((state) => state.users);
  const { isOpen, onOpen, onClose } = useModal();
  return (
    <nav>
      <ul className="b-menu">
        <li className="b-menu__link">
          <Link to="/">Inicio</Link>
        </li>
        {user && (
          <li className="b-menu__link">
            <Link to="/createpost">Nuevo Post</Link>
          </li>
        )}

        <li className="b-menu__link">
          <Link to="/register">Registrarse</Link>
        </li>
        <li className="b-menu__link">
          <Link to="#" onClick={onOpen}>Iniciar Sesión</Link>
        </li>
      </ul>
      <div className={`modal-login ${isOpen ? "open" : ""}`}>
        <button className='btn-close' onClick={onClose}>x</button>
        <Login onClose={onClose}/>
        </div>
    </nav>
  );
};

export default NavBar;
