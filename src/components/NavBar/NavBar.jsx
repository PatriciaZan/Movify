import { NavLink } from "react-router-dom";
import Search from "../Search/Search";
import { useType } from "../../context/TypeContext";

export default function NavBar() {
  const { type } = useType();
  return (
    <nav>
      <ul>
        <NavLink to="/">Movies</NavLink>
        <NavLink to="/series">Series</NavLink>
        <NavLink to="/animes">Animes</NavLink>
        <Search type={type} />
      </ul>
    </nav>
  );
}
