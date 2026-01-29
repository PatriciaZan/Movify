import { Outlet } from "react-router-dom";
import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import { FavoriteProvider } from "./context/FavoritesContext";

export default function App() {
  return (
    <>
      <FavoriteProvider>
        <NavBar />
        <Outlet />
      </FavoriteProvider>
    </>
  );
}
