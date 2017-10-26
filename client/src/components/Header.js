import React from "react";
import { NavLink } from "react-router-dom";

// The Header creates links that can be used to navigate
// between routes.
const Header = () =>
  <ul className="header">
    <li><NavLink exact to="/" activeclassname="active">Home</NavLink></li>
    <li><NavLink exact to="/uk-lotto" activeclassname="active">Lotto</NavLink></li>
    <li>
      <NavLink exact to="/euro-million" activeclassname="active">
        Euro
      </NavLink>
    </li>
  </ul>;

export default Header;
