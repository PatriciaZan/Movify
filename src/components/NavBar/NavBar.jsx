import React from "react";

function NavBar({ page, handlePage }) {
  return (
    <div>
      <ul>
        <button onClick={() => handlePage("home")}>Movies</button>
        <button onClick={() => handlePage("series")}>Series</button>
        <button onClick={() => handlePage("yours")}>Yours</button>
      </ul>
    </div>
  );
}

export default NavBar;
