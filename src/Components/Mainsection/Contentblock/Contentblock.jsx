import React from "react";
import { Route, Switch } from "react-router-dom";
import Fantasy from "./Categories/Fantasy/Fantasy";
import Cook from "./Categories/Cook/Cook";
import Comic from "./Categories/Comic/Comic";
import NonFiction from "./Categories/Nonfiction/NonFiction";
import Style from "./Contentblock.module.css";
import AllContainer from "./Categories/All/AllContainer";
import FictionContainer from "./Categories/Fiction/FictionContainer";
import Login from "../../common/Login/Login";
import ChildrenContainer from "./Categories/Children/ChildrenContainer";

const Contentblock = () => {
  return (
    <section className="col pl-1 pr-0">
      {/* <Sortmenu /> */}
      <div className={Style.cblock + " container pb-2 pt-2"}>
        <Switch>
          <Route path="/all">
            {" "}
            <AllContainer />{" "}
          </Route>
          <Route path="/fiction">
            <FictionContainer />
          </Route>
          <Route path="/children">
            <ChildrenContainer />{" "}
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

          <Route path="/login">
            <Login />{" "}
          </Route>
        </Switch>
      </div>
    </section>
  );
};

export default Contentblock;
