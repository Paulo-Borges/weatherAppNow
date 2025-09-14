import React from "react";
import Logo from "../../public/logo.svg";
import Units from "../../public/icon-units.svg";
import Dropdown from "../../public/icon-dropdown.svg";

const Navbar = () => {
  return (
    <div className="flex items-center w-[1440px] justify-between px-16 ">
      <div>
        <img src={Logo} alt="logo weather now" className="w-30 h-30" />
      </div>
      <button className="flex items-center gap-2 bg-Neutral-600 px-2 py-0.5 rounded cursor-pointer">
        <img src={Units} alt="logo" className="w-3 h-3" />
        <span className="text-sm">Units</span>
        <img src={Dropdown} alt="logo" className="w-3 h-3" />
      </button>
    </div>
  );
};

export default Navbar;
