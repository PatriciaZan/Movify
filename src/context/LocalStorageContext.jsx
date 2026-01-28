import { createContext, useContext, useEffect, useState } from "react";

const initFavorites = {
  favorites: [],
};

export const FavoritesContext = createContext();

const getInitialState = () => {
  const favorite = localStorage.getItem("Favorite-movies");
  return favorite ? JSON.parse(favorite) : initFavorites;
};

const FavoriteContextProvider = (props) => {
  const [favorite, setFavorites] = useState(getInitialState);

  useEffect(() => {
    localStorage.setItem("Favorite-movies", JSON.stringify(favorite));
  }, [favorite]);

  const addFavorite = (fav) => {
    setFavorites((prev) => ({
      ...prev,
      favorite: [...prev.favorite, favorite],
    }));

    const removeFavorite = (favId) => {
      setFavorites((prev) => ({
        ...prev,
        favorite: prev.favorite.filter((p) => p.id !== favId), // ! ID local correto!
      }));

      return (
        <FavoritesContext.Provider
          value={{ addFavorite, removeFavorite, ...favorite }}
        >
          {props.children}
        </FavoritesContext.Provider>
      );
    };
  };
};

//export const useFavorite = () => useContext(FavoritesContext);

export default FavoriteContextProvider;
