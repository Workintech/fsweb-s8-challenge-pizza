import React from "react";

function Navbar({ name, logo }) {
  return (
    <a
      href=""
      className="w-[95px] rounded-full px-1 py-3 bg-white flex justify-center items-center gap-x-2 xs:justify-start xs:py-4 xs:w-[100px]"
    >
      <img className="w-6 xs:w-9" src={logo} alt="#" />
      <span>{name}</span>
    </a>
  );
}

export default Navbar;
