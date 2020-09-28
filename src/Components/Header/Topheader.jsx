import React from "react";

const Topheader = () => {
  const links = [
    {
      href: "/home",
      name: "Sign In",
      className: "nav-link",
    },
    {
      href: "/#",
      name: "My account",
      className: "nav-link",
    },
    {
      href: "/#",
      name: "Order Status",
      className: "nav-link",
    },
    {
      href: "/#",
      name: "Help",
      className: "nav-link",
    },
  ];

  return (
    <nav className="nav justify-content-end top-header-cont">
       {links.map(({ href, name, className }, index) => {
        return (
          <a key={index} className={className} href={href}>
            {name}
          </a>
        );
      })}
    </nav>
  );
};

export default Topheader;
