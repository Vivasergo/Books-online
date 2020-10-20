import React from "react";
import Bannerleft from "../../../Images/wanted-man-ban.jpg";
import Bannerright from "../../../Images/deal-ban.jpg";

const Bannersection = () => {
  return (
    <div className="container d-flex justify-content-center">
      <div className="row w-100">
        <div className="col-8 mt-2 d-flex justify-content-center">
          <a href="/#">
            <img className="img-fluid" src={Bannerleft} alt="" />
          </a>
        </div>
        <div className="col-4 mt-2 d-flex justify-content-center">
          <a href="/#">
            <img className="img-fluid" src={Bannerright} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Bannersection;
