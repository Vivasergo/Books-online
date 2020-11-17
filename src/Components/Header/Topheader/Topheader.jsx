import React from "react";
import { NavLink } from "react-router-dom";

const Topheader = () => {
  return (
    <nav className="nav justify-content-end top-header-cont">
      <NavLink className="nav-link" to="/login">
        Log In
      </NavLink>
      <NavLink className="nav-link" to="/sign-up">
        Sign Up
      </NavLink>

      <NavLink className="nav-link" to="/chat">
        Quick chat
      </NavLink>
      <NavLink className="nav-link" to="/contacts">
        Contacts
      </NavLink>
    </nav>
  );
};

export default Topheader;
