import "./navBar.sass";
import React from "react";
import { NavLink } from "react-router-dom";

import { IoIosSearch } from "react-icons/io";

function NavBar() {
  return (
    <div className="NavBar-container">
      <ul className="NavBar-ul">
        <NavLink to="/">Movies</NavLink>
        <NavLink to="series">Series</NavLink>
        <NavLink>Favorites</NavLink>

        <button>
          <IoIosSearch />
        </button>
      </ul>
    </div>
  );
}

export default NavBar;
