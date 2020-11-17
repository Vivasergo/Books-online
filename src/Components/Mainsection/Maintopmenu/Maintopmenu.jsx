import React from "react";
import { NavLink } from "react-router-dom";


const Maintopmenu = () => {

let mainTopMenu = [
    {
      link: "/all",
      catName: "All categories"
    },
    {
      link: "/best-2019",
      catName: "Best sellers 2019"
    },
    {
      link: "/best-2020",
      catName: "Best sellers 2020",
      isActive: true,
    },
    {
      link: "/newest",
      catName: "Newest"
    },
    {
      link: "/top",
      catName: "Top 50"
    },
    {
      link: "/sale",
      catName: "Sale"
    },
    {
      link: "/exclusive",
      catName: "Exclusive"
    },
  ];

  return (
    <>
      <div className="container vert-cat-menu-cont">
        <nav className="navbar navbar-expand-lg align-middle navbar-light justify-content-end h-100 pt-0 pb-0">
          <button
            className="navbar-toggler vert-cat-menu-toggler-but"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav nav-fill vertical-cat-menu-ul w-100">
              {mainTopMenu.map(({ link, catName}, indx) => {
                return (
                  <li
                    key={indx}
                    className="nav-item"
                  >
                    <NavLink activeClassName="active-vert-cat-menu" className="nav-link font-weight-bold" to={link}>
                      {catName}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </div>
      <div className="container-fluid vertical-line"></div>
    </>
  );
};

export default Maintopmenu;
