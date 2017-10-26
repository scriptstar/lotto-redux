import React from "react"
import "./index.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return(
  <ul className="header">
    <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
    <li><NavLink to="/uk-lotto" activeClassName="active">Lotto</NavLink></li>
    <li>
      <NavLink to="/euro-million" activeClassName="active">
        Euro Million
      </NavLink>
    </li>
  </ul>
)
};

export default Header;