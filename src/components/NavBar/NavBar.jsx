import React from "react";
import "./NavBar.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Home } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import IconsNoLogin from "../IconsNoLogin/IconsNoLogin";
import IconsLogin from "../IconsLogin/IconsLogin";
import { useModalSuccess } from "../../customHooks/useModalSuccess";
import Toast from "../Toast/Toast";
const NavBar = () => {
  const { user } = useSelector((state) => state.users);
  const { isOpenSuccess, onOpenSuccess, onCloseSuccess } = useModalSuccess();
  return (
    <>
      <nav className="b-menu-mobile">
        <ul className="b-menu">
          <li className="b-menu__link">
            <Tooltip title="Inicio" placement="bottom">
              <Link to="/">
                <Home className="b-menu__icon" />
              </Link>
            </Tooltip>
          </li>
          {user && <IconsLogin onOpenSuccess={onOpenSuccess}/>}
          <IconsNoLogin/>        
        </ul> 
      </nav>
      {isOpenSuccess && (
        <Toast
          isOpenSuccess={isOpenSuccess}
          onCloseSuccess={onCloseSuccess}
          isEditMode={true}
        />
      )}
    </>
  );
};
export default NavBar;