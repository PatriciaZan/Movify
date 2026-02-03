import { useFavorites } from "../../context/FavoritesContext";

export default function FavoriteButton({ item }) {
  const { favorites, setFavorites } = useFavorites();

  const localStorageSave = (items) => {
    localStorage.setItem("Favorite-movies", JSON.stringify(items));
  };

  const localStorageRemove = (item) => {
    localStorage.removeItem("Favorit-movies", JSON.stringify(item));
  };

  const getId = (item) => {
    // Anime
    if (item?.mal_id) {
      console.log("JINKAN");
      return item.mal_id;
    }

    // Series/Movies
    if (item?.id) {
      return item.id;
    }
  };

  const handleAddFavorite = (item) => {
    const exists = favorites.some((fav) => getId(fav) === getId(item));

    if (!exists) {
      const newFavouriteArray = [...favorites, item];
      setFavorites(newFavouriteArray);
      localStorageSave(newFavouriteArray);
    } else {
      console.log("Já está nos favoritos");
    }
  };

  const handleRemoveFavorite = (item) => {
    console.log("Removing", item);
    const removeFavoriteArray = favorites.filter(
      (fav) => getId(fav) !== getId(item),
    );

    console.log(removeFavoriteArray);

    setFavorites(removeFavoriteArray);
    //localStorageRemove(item);
    localStorageSave(removeFavoriteArray);
  };

  // Checks if is favorited
  const isFavorited = (item) => {
    return favorites.some((fav) => getId(fav) === getId(item));
  };

  const handleToggleFavorite = (item) => {
    if (isFavorited(item)) {
      handleRemoveFavorite(item);
    } else {
      handleAddFavorite(item);
    }
  };

  return (
    // <div>
    //   <button onClick={() => handleAddFavorite(item)}>Favorite</button>
    //   <button onClick={() => handleRemoveFavorite(item)}>Remove</button>
    // </div>

    <button onClick={() => handleToggleFavorite(item)}>
      {isFavorited(item) ? "Remover" : "Favoritar"}
    </button>
  );
}
