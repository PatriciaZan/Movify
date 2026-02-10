import { createContext, useContext, useState } from "react";
import { getStoredFavorites } from "../utils/LocalStorage";

const FavoritesContext = createContext();

export function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useState(
    getStoredFavorites("Favorite-movies"),
  );

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}
