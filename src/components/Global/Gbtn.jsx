import React from "react";

const Gbtn = (props) => {
  if (props.onClick) {
    return (
      <button
        onClick={props.onClick}
        className="font-Outfit px-7 py-3 rounded-lg bg-linear-to-r from-purple-700 to-purple-800 font-semibold hover:scale-105 transition-all duration-250 ease-in-out cursor-pointer inline-block hover:text-black"
      >
        {props.data}
      </button>
    );
  }
  return (
    <a
      href={props.url}
      target="_blank"
      rel="noopener noreferrer"
      className="font-Outfit px-7 py-3 rounded-lg bg-linear-to-r from-purple-700 to-purple-800 font-semibold hover:scale-105 transition-all duration-250 ease-in-out cursor-pointer inline-block hover:text-black"
    >
      {props.data}
    </a>
  );
};
export default Gbtn;
