import React from "react";
import { render } from "react-dom";
import "./index.css";
import Header from "./Header.js";
import App from "./App";
import { BrowserRouter as Router, Route } from "react-router-dom";

const router = (
  <Router>
    <div>
      <Route path="/" component={Header} />
      <Route path="/uk-lotto" component={App} />
      <Route path="/euro-million" component={App} />
    </div>
  </Router>
);

render(router, document.getElementById("root"));
