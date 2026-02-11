import { Outlet } from "react-router-dom";
import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import { FavoriteProvider } from "./context/FavoritesContext";
import { TypeProvider } from "./context/TypeContext";

export default function App() {
  return (
    <>
      <FavoriteProvider>
        <TypeProvider>
          <NavBar />
          <Outlet className="outlet" />
        </TypeProvider>
      </FavoriteProvider>
    </>
  );
}
