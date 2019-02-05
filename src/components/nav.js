import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <NavLink className="nav-link ll" to="/">
        Home
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <NavLink className="nav-link ll ml-5" to="/details">
              Details
            </NavLink>
          </li>
          <li className="nav-item ml-5">
            <NavLink className="nav-link ll" to="/cart">
              Cart
            </NavLink>
          </li>
          <li className="nav-item ml-5">
            <a className="nav-link" href="/">
              Pricing
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);
export default Nav;
