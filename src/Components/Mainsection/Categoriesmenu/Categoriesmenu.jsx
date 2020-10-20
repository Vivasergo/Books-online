import React from "react";
import { NavLink } from "react-router-dom";

const Categoriesmenu = (props) => {

  let categoriesMenu = [
    {
      link: "/all",
      name: "All",
      isChapter: true,
    },
    {
      link: "/fiction",
      name: "Fiction & Literature",
      isChapter: true,
    },
    {
      link: "/children",
      name: "Children",
      isChapter: false,
    },
    {
      link: "/fantasy",
      name: "Fantasy",
      isChapter: false,
    },
    {
      link: "/nonfiction",
      name: "Non - Fiction",
      isChapter: true,
    },
    {
      link: "/comic",
      name: "Comic",
      isChapter: false,
    },
    {
      link: "/cook",
      name: "Cook",
      isChapter: false,
    },
  ];

  return (
    <div
      id="categories-menu"
      className="col-md-4 col-lg-3 categories-menu pl-0 pr-0 mr-md-2 mb-2 mb-md-0"
    >
      <h2 className="h5 text-secondary mt-2 ml-3 mr-3">Categories</h2>
      <ul className="nav flex-row flex-md-column w-100">
        {categoriesMenu.map(({ name, link, isChapter }, indx) => {
          return (
            <li key={indx} className="nav-item cat-menu-li">
              <NavLink
                activeClassName="active-cat-menu-point"
                className={
                  isChapter
                    ? "nav-link pt-0 pb-0 pl-3 pr-3 font-weight-bold"
                    : "nav-link pt-0 pb-0 pl-3 pr-3 "
                }
                to={link}
              >
                {name}
                <span className="link-border"></span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categoriesmenu;
