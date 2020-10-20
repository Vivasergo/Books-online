import React from "react";


const Maintopmenu = (props) => {

let mainTopMenu = [
    {
      link: "/#",
      catName: "Computers",
      isActive: false,
    },
    {
      link: "/#",
      catName: "Cooking",
      isActive: false,
    },
    {
      link: "/#",
      catName: "Education",
      isActive: true,
    },
    {
      link: "/#",
      catName: "Fiction",
      isActive: false,
    },
    {
      link: "/#",
      catName: "Health",
      isActive: false,
    },
    {
      link: "/#",
      catName: "Mathematics",
      isActive: false,
    },
    {
      link: "/#",
      catName: "Medical",
      isActive: false,
    },
    {
      link: "/#",
      catName: "Reference",
      isActive: false,
    },
    {
      link: "/#",
      catName: "Science",
      isActive: false,
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
              {mainTopMenu.map(({ link, catName, isActive }, indx) => {
                return (
                  <li
                    key={indx}
                    className={
                      isActive ? "nav-item active-vert-cat-menu" : "nav-item"
                    }
                  >
                    <a className="nav-link" href={link}>
                      {catName}
                    </a>
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
