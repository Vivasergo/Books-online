import React from "react";
import style from "./footer.module.css";


const Footer = () => {
  return (
    <div className={style.footer + " container"}>
      <div className="row">
        <div className="col">All rights reserved.</div>
      </div>
    </div>
  );
};

export default Footer;