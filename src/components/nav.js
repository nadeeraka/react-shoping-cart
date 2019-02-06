import React from "react";
import { NavLink } from "react-router-dom";
import { ButttonContainer } from "./button";
import styled from "styled-components";
const Nav = () => (
  <div>
    <NavWrapper className="navbar navbar-expand-lg navbar-dark ">
      <NavLink className="nav-link ll mr-6" to="/">
        <span className="mr-3">
          <i class="fas fa-fire" />
        </span>
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
    </NavWrapper>
  </div>
);

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.6rem;
    text-transform: capitalize;
  }
`;
export default Nav;
