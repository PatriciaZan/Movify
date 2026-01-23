import { NavLink } from "react-router-dom";
import Search from "../Search/Search";

export default function NavBar() {
  return (
    <nav>
      <ul>
        <NavLink to="/">Movies</NavLink>
        <NavLink to="/series">Series</NavLink>
        <NavLink to="/animes">Animes</NavLink>

        {/* <Search /> */}
      </ul>
    </nav>
  );
}
