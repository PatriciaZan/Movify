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
  const localStorageSave = (items) => {
    localStorage.setItem("Favorite-movies", JSON.stringify(items));
  };

  const handleAddFavorite = (item) => {
    console.log("--- START ----");
    //console.log("2. StoreIds: ", storeIds);

    if (storeIds.includes(item.id)) {
      console.log("5. Já inclui o Item ID");
    } else {
      console.log("1. StoreIds - ", storeIds);
      //const newId = [...storeIds, item.id];
      //console.log("2. NewId - ", newId);

      setStoredIds([...storeIds, item.id]);
      console.log("3. setStoredIds - ", storeIds);
      console.log("7. Adicionando novo filme");

      const newFavouriteArray = [...favorites, item];
      setFavorites(newFavouriteArray);
      localStorageSave(newFavouriteArray);
      console.log("---Fim----");
    }

    // !
    // if (storeIds.includes(item.id)) {
    //   console.log("Já está nos favoritos");
    // } else { // !
    // Cria um array que irá conter os ids, serve para checar se o item já foi adicionado
    //const newId = [...storeIds, item.id];
    //setStoredIds(newId);

    // Se ele não foi adicionado antes agora ele é adicionado
    //const newFavouriteArray = [...favorites, item];
    //setFavorites(newFavouriteArray);
    //localStorageSave(newFavouriteArray);

    //}
  };

  // useEffect(() => {
  //   setStoredFavorites("favoritesList", favorites);
  // }, [favorites]);

  return (
    <div>
      <button onClick={() => handleAddFavorite(item)}>Favorite</button>
      <button>Remove</button>
    </div>
  );
}
