import React from "react";
import { NavLink } from "react-router-dom";

const Sortmenu = (props) => {
  let sortMenu = [
    {
      id: "1",
      link: "/1",
      name: "Best sellers",
    },
    {
      id: "2",
      link: "/2",
      name: "New Arrivals",
    },
    {
      id: "3",
      link: "/3",
      name: "Used Books",
    },
    {
      id: "4",
      link: "/4",
      name: "Special Offers",
    },
  ];

  return (
    <ul className="nav nav-tabs">
      {sortMenu.map((item) => {
        return (
          <li className="nav-item" key={item.id}>
            <NavLink
              className="nav-link"
              activeClassName="activeCl"
              to={item.link}
            >
              {item.name}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default Sortmenu;
