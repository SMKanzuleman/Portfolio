import React from "react";

const NavItem = (props) => {
  return (
    <li className="font-Outfit lg:font-medium font-medium text-white hover:text-black hover:font-semibold hover:scale-105 transition-all duration-300 cursor-pointer">
      <a href={props.link}>
      {props.data}
      </a>
    </li>
  );
};

export default NavItem;
