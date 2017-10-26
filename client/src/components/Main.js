import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import Lottery from "./Lottery";

// The Main component renders one of the three provided
// Routes (provided that one matches).
const Main = () =>
  <main className="content">
    <Route exact path="/" component={Home} />
    <Route path="/uk-lotto" component={Lottery} />
    <Route path="/euro-million" component={Lottery} />
  </main>;

export default Main;
