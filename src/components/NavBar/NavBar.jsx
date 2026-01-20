import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <ul>
        <NavLink to="/">Movies</NavLink>
        <NavLink to="/series">Series</NavLink>
        <NavLink to="/animes">Animes</NavLink>
      </ul>
    </nav>
  );
}
