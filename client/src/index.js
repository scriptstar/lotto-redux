import {
  BrowserRouter as Router,
  Switch,
  NavLink,
  Route
} from "react-router-dom";
import React from "react";
import { render } from "react-dom";
import Home from "./components/Home";
import Lotto from "./components/Lotto";
import Euro from "./components/Euro";
import Pagenotfound from "./components/common/404";
import "./index.css";
import "./components/App.css";

render(
  <Router>
    <div>
      <ul className="header">
        <li>
          <NavLink exact to="/" activeclassname="active">Home</NavLink>{" "}
        </li>
        <li>
          <NavLink
            exact
            to={{ pathname: "/uk-lotto" }}
            activeclassname="active"
          >
            Lotto
          </NavLink>{" "}
        </li>
        <li>
          <NavLink exact to="/euro-million" activeclassname="active">
            Euro
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/uk-lotto" component={Lotto} />
        <Route path="/euro-million" component={Euro} />
        <Route component={Pagenotfound} />
      </Switch>
    </div>
  </Router>,
  document.getElementById("root")
);