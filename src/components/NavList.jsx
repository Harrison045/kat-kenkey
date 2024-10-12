import React from "react";
import { NavLink } from "react-router-dom";

function NavList() {
  return (
    <>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/product">Product</NavLink>
      <NavLink to="/blog">Blog </NavLink>
    </>
  );
}

export default NavList;
