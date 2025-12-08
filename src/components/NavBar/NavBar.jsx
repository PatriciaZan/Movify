import "./navBar.sass";
import React from "react";

import { IoIosSearch } from "react-icons/io";

function NavBar({ page, handlePage }) {
  return (
    <div className="NavBar-container">
      <ul className="NavBar-ul">
        <button onClick={() => handlePage("home")}>Movies</button>
        <button onClick={() => handlePage("series")}>Series</button>
        <button onClick={() => handlePage("yours")}>Yours</button>
        <button>
          <IoIosSearch />
        </button>
      </ul>
    </div>
  );
}

export default NavBar;
