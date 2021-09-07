import React from "react";
import { NavLink } from "react-router-dom";

/**
 * Navbar that routes to home and new forms
*/
function Nav(): React.ReactElement {
  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid p-0">
      <NavLink className="navbar-brand" exact to="/">
        User Messages
      </NavLink>
      <ul className="nav navabar-nav">
        <li>
          <NavLink className="btn btn-secondary" to="/add-user">
            Add User
          </NavLink>
        </li>
        <li>
          <NavLink className="btn btn-secondary" to="/add-message">
            Add Message
          </NavLink>
        </li>
      </ul>
      </div>
    </nav>
  );
}

export default Nav;