import React, { useEffect, useState } from "react";
import {
  getStoredFavorites,
  setStoredFavorites,
} from "../../utils/LocalStorage";
import { useFavorites } from "../../context/FavoritesContext";

export default function FavoriteButton({ item }) {
  // const [favorites, setFavorites] = useState(
  //   getStoredFavorites("Favorite-movies"),
  // );
  const { favorites, setFavorites } = useFavorites();
  const [storeIds, setStoredIds] = useState([]);

  //const isFavorite = favorites.includes(itemId);

  //using localStorage to persist data and access in more pages
  const localStorageSave = (items) => {
    localStorage.setItem("Favorite-movies", JSON.stringify(items));
  };

  const handleAddFavorite = (item) => {
    //console.log("ADD FAVORITE");
    console.log(item);
    if (storeIds.includes(item.id)) {
      console.log("Já está nos favoritos");
    } else {
      // Cria um array que irá conter os ids, serve para checar se o item já foi adicionado
      const newId = [...storeIds, item.id];
      setStoredIds(newId);
      //console.log("ID: ", storeIds);

      // Se ele não foi adicionado antes agora ele é adicionado
      const newFavouriteArray = [...favorites, item];
      //alert("Added to Favorites");
      setFavorites(newFavouriteArray);
      //console.log("FAVORITE: ", favorites);
      localStorageSave(newFavouriteArray);
    }
  };

  useEffect(() => {
    setStoredFavorites("favoritesList", favorites);
  }, [favorites]);

  return (
    <div>
      <button onClick={() => handleAddFavorite(item)}>Favorite</button>
      <button>Wish Watch</button>
    </div>
  );
}
