import React from "react";
import { Nav, NavLink, NavIcon } from "./NavbarElements";
import Shamlogo from "../../images/shamlogo.png";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to="/">Malaysian Delicacy</NavLink>
        <NavIcon onClick={toggle}>
          <p>Menu</p>
          <img src={Shamlogo} width="60px" alt="" />
       
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
