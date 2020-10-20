import React from "react";
import Logo from "../../../Images/logo.png";

const Midheader = () => {
  return (
    <div className="row mid-header-cont">
      <div className="logo">
        <a href="/#">
          <img src={Logo} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Midheader;
