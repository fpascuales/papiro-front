import React from "react";
import "./Routing.scss";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Register from "../../pages/Register/Register";
import Account from "../../pages/Account/Account";
import Admin from "../../pages/Admin/Admin";
import RequireAuth from "../RequireAuth/RequireAuth";
const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/register"
          element={
            <RequireAuth userAccess><Register /></RequireAuth>} />
        <Route
          path="/account"
          element={
            <RequireAuth>
              <Account />
            </RequireAuth>
          }
        />
        <Route
          path="/admin"
          element={
            <RequireAuth adminAccess>
              <Admin />
            </RequireAuth>
          }
        />
      </Routes>
    </>
  );
};

export default Routing;
