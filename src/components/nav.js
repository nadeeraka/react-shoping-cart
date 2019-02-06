import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const Nav = () => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-primary bg-primary">
      <NavLink className="nav-link ll mr-6" to="/">
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
        <ul className="navbar-nav ml-auto">
          <li className="nav-item ml-5">
            <NavLink className="nav-link ll" to="/cart">
              <ButttonContainer>
                <span className="mr-2">
                  <i className="fas fa-cart-plus " />
                </span>
                Cart
              </ButttonContainer>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

const ButttonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
`;
export default Nav;
