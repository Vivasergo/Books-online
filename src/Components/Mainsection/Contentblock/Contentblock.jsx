import React from "react";
import { Route, Switch } from "react-router-dom";
import All from "./Categories/All";
import Fiction from "./Categories/Fiction";
import Children from "./Categories/Children";
import Fantasy from "./Categories/Fantasy";
import Cook from "./Categories/Cook";
import Comic from "./Categories/Comic";
import NonFiction from "./Categories/NonFiction";
import Style from "./Contentblock.module.css";
import Sortmenu from "./Sortmenu/Sortmenu";
import Chat from "./Chat/Chat";

const Contentblock = (props) => {

  return (
    <section className="col pl-1 ">
      <Sortmenu />
      <div className={Style.cblock + " container"}>
        <Switch>
          <Route path="/all">
            {" "}
            <All allData={props.categories.all} />{" "}
          </Route>
          <Route path="/fiction">
            <Fiction
              commentFieldText={props.categories.fiction.commentFieldText}
              fictionData={props.categories.fiction}
              dispatch={props.dispatch}
            />
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
          <Route path="/chat">
            <Chat dispatch={props.dispatch} />{" "}
          </Route>
        </Switch>
      </div>
    </section>
  );
};

export default Contentblock;
