import React from "react";
import Maintopmenu from "./Maintopmenu";
import Bannersection from "./Bannersection";

const Mainsection = () => {
  const mainCatMenuArr = [
    {
      link: "/#",
      name: "ALL",
      isActive: true,
      isChapter: true,
    },
    {
      link: "/#",
      name: "Fiction & Literature",
      isActive: false,
      isChapter: true,
    },
    {
      link: "/#",
      name: "Children",
      isActive: false,
      isChapter: false,
    },
    {
      link: "/#",
      name: "Science Fiction",
      isActive: false,
      isChapter: false,
    },
    {
      link: "/#",
      name: "Fantasy",
      isActive: false,
      isChapter: false,
    },
    {
      link: "/#",
      name: "Mystery",
      isActive: false,
      isChapter: false,
    },
    {
      link: "/#",
      name: "Romance",
      isActive: false,
      isChapter: false,
    },
    {
      link: "/#",
      name: "Horror",
      isActive: false,
      isChapter: false,
    },
    {
      link: "/#",
      name: "Poetry",
      isActive: false,
      isChapter: false,
    },
    {
      link: "/#",
      name: "Literature",
      isActive: false,
      isChapter: false,
    },
    {
      link: "/#",
      name: "Non - Fiction",
      isActive: false,
      isChapter: true,
    },
    {
      link: "/#",
      name: "Comic",
      isActive: false,
      isChapter: false,
    },
    {
      link: "/#",
      name: "Cook",
      isActive: false,
      isChapter: false,
    },
    {
      link: "/#",
      name: "Psychology",
      isActive: false,
      isChapter: false,
    },
    {
      link: "/#",
      name: "Medical",
      isActive: false,
      isChapter: false,
    },
    {
      link: "/#",
      name: "Art",
      isActive: false,
      isChapter: false,
    },
    {
      link: "/#",
      name: "Law",
      isActive: false,
      isChapter: false,
    },
    {
      link: "/#",
      name: "History",
      isActive: false,
      isChapter: false,
    },
    {
      link: "/#",
      name: "Computer",
      isActive: false,
      isChapter: false,
    },
    {
      link: "/#",
      name: "Other",
      isActive: false,
      isChapter: true,
    },
    {
      link: "/#",
      name: "Baby",
      isActive: false,
      isChapter: false,
    },
    {
      link: "/#",
      name: "Sex",
      isActive: false,
      isChapter: false,
    },
    {
      link: "/#",
      name: "Travel",
      isActive: false,
      isChapter: false,
    },
    {
      link: "/#",
      name: "Science",
      isActive: false,
      isChapter: false,
    },
    {
      link: "/#",
      name: "Sports",
      isActive: false,
      isChapter: false,
    },
  ];

  return (
    <>
      <Maintopmenu />
      <Bannersection />

      <div className="container mt-3 central-cont-block">
        <div className="row">
          <div
            id="categories-menu"
            className="col-md-4 col-lg-3 categories-menu pl-0 pr-0"
          >
            <h2 className="h5 text-secondary mt-2 ml-3 mr-3">Categories</h2>
            <ul className="nav flex-row flex-md-column w-100">
              {mainCatMenuArr.map(
                ({ name, link, isActive, isChapter }, indx) => {
                  return (
                    <li
                      key={indx}
                      className={
                        isActive ? "nav-item active-cat-menu-point cat-menu-li" : "nav-item cat-menu-li"
                      }
                    >
                      <a
                        className={
                          isChapter
                            ? "nav-link pt-0 pb-0 pl-3 pr-3 font-weight-bold text-secondary "
                            : "nav-link pt-0 pb-0 pl-3 pr-3 text-secondary"
                        }
                        href={link}
                      >
                        {name}
                        <span className={isActive ? "d-none" : "link-border"}></span>
                      </a>
                      
                    </li>
                  );
                }
              )}
            </ul>
          </div>
          <div className="col-9"></div>
        </div>
      </div>
    </>
  );
};

export default Mainsection;
