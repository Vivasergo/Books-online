import React from "react";
import Midheader from "./Midheader/Midheader";
import Topheader from "./Topheader/Topheader";

const Header = () => {

  return (
    <header className="header-cont w-100">
      <div className="top-header-row">
        <div className="container">
          <Topheader />
        </div>
      </div>
      <div className="mid-header-row">
        <div className="container">
          <Midheader />
          
        </div>
      </div>
    </header>
  );
};

export default Header;
