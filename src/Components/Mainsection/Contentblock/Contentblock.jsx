import React from "react";
import { Route, Switch } from "react-router-dom";
import Children from "./Categories/Children/Children";
import Fantasy from "./Categories/Fantasy/Fantasy";
import Cook from "./Categories/Cook/Cook";
import Comic from "./Categories/Comic/Comic";
import NonFiction from "./Categories/Nonfiction/NonFiction";
import Style from "./Contentblock.module.css";
import Sortmenu from "./Sortmenu/Sortmenu";
import AllContainer from "./Categories/All/AllContainer";
import FictionContainer from "./Categories/Fiction/FictionContainer";
import UsersContainer from "./SocialNetwork/Users/UsersContainer";


const Contentblock = () => {

  return (
    <section className="col pl-1 ">
      <Sortmenu />
      <div className={Style.cblock + " container"}>
        <Switch>
          <Route path="/all">
            {" "}
            <AllContainer />{" "}
          </Route>
          <Route path="/fiction">
            <FictionContainer />
          </Route>
          {/* <Route path="/fiction/:id" ><ItemDetails /> </Route>  */}
          <Route path="/children">
            <Children />{" "}
          </Route>
          <Route path="/fantasy">
            <Fantasy />{" "}
          </Route>
          <Route path="/cook">
            <Cook />{" "}
          </Route>
          <Route path="/comic">
            <Comic />{" "}
          </Route>
          <Route path="/nonfiction">
            <NonFiction />{" "}
          </Route>
          <Route path="/social-network">
            <UsersContainer />{" "}
          </Route>
        </Switch>
      </div>
    </section>
  );
};

export default Contentblock;
