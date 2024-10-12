import React from "react";
import Logo from "./Logo";
import NavList from "./NavList";

function Navbar() {
  return (
    <>
      <header className="bg-black text-white ticky top-0 z-[20] mx-auto border-b flex items-center justify-between border-gray-500 p-12">
        <Logo />
        <NavList/>
      </header>
    </>
  );
}

export default Navbar;
