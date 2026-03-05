import React from "react";

const NavItem = (props) => {
  return (
    <li className="font-Outfit  font-medium text-white hover:text-black hover:font-semibold hover:scale-105 transition-all duration-300 cursor-pointer">
      {props.data}
    </li>
  );
};

export default NavItem;
