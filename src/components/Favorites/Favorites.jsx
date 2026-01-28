import React, { useEffect, useState } from "react";
import { getStoredFavorites } from "../../utils/LocalStorage";
import Card from "../Card/Card";

export default function Favorites({ favorites }) {
  //   const [movieFavorites, setMovieFavorites] = useState(
  //     getStoredFavorites("Favorite-movies"),
  //   );
  console.log("FAVORITES: ", favorites);

  useEffect(() => {}, [favorites]);

  return (
    <div>
      Favorites Aqui
      {favorites && favorites.length > 0 ? (
        <Card content={favorites} />
      ) : (
        <p>No Favorites yet</p>
      )}
    </div>
  );
}
