import React from "react";
import { Route } from "react-router-dom";
import All from "./Categories/All";
import Fiction from "./Categories/Fiction";
import Children from "./Categories/Children";
import Fantasy from './Categories/Fantasy';
import Cook from "./Categories/Cook";
import Comic from "./Categories/Comic";
import NonFiction from "./Categories/NonFiction";


const Contentblock = () => {
  return (
    <div className="col-9">
      <Route path="/all" component={All} />
      <Route path="/fiction" component={Fiction} />
      <Route path="/children" component={Children} />
      <Route path="/fantasy" component={Fantasy} />
      <Route path="/cook" component={Cook} />
      <Route path="/comic" component={Comic} />
      <Route path="/nonfiction" component={NonFiction} />

    </div>
  );
};

export default Contentblock;
