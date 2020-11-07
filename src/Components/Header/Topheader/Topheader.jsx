import React from "react";
import { NavLink } from "react-router-dom";

const Topheader = (props) => {
  return (
    <nav className="nav justify-content-end top-header-cont">
      {props.isLogged ? (
        <>
          <span>{props.fullName}</span>
        </>
      ) : (
        <>
          <NavLink className="nav-link" to="/#">
            Log In
          </NavLink>
          <NavLink className="nav-link" to="/#">
            Sign Up
          </NavLink>
        </>
      )}

      <NavLink className="nav-link" to="/social-network">
        Our social network
      </NavLink>
    </nav>
  );
};

export default Topheader;
