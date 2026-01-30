import { createContext, useContext, useState } from "react";
import { getStoredFavorites } from "../utils/LocalStorage";

const FavoritesContext = createContext();

export function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useState(
    getStoredFavorites("Favorite-movies"),
  );

  //   function addFavorite(item) {
  //     setFavorites((prev) => {
  //       const exists = prev.find((fav) => fav.id === item.id);
  //       if (exists) return prev;
  //       return [...prev, item];
  //     });
  //   }

  //function removeFavorite(id) {
  //  return favorites.some((item) => item.id === id);
  //}

  //   function isFavorite(id) {
  //     setFavorites((prev) => prev.filter((item) => item.id !== id));
  //   }

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}
