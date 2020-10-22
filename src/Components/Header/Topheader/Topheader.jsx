import React from "react";
import { NavLink } from "react-router-dom";

const Topheader = () => {
  
 let topHeaderLinks = [
    {
      href: "/home",
      name: "Log In",
      className: "nav-link",
    },
    {
      href: "/#",
      name: "Sign Up",
      className: "nav-link",
    },
    {
      href: "/chat",
      name: "Chat with us",
      className: "nav-link",
    },
  ];

  return (
    <nav className="nav justify-content-end top-header-cont">
       {topHeaderLinks.map(({ href, name, className }, index) => {
        return (
          <NavLink key={index} className={className} to={href}>
            {name}
          </NavLink>
        );
      })}
    </nav>
  );
};

export default Topheader;
