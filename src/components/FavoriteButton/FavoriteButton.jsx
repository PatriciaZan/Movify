import { useFavorites } from "../../context/FavoritesContext";

export default function FavoriteButton({ item }) {
  const { favorites, setFavorites } = useFavorites();

  const localStorageSave = (items) => {
    localStorage.setItem("Favorite-movies", JSON.stringify(items));
  };

  const localStorageRemove = (item) => {
    localStorage.removeItem("Favorit-movie", JSON.stringify(item));
  };

  const handleAddFavorite = (item) => {
    const exists = favorites.some((fav) => fav.id === item.id);

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
      (favorites) => favorites.id !== item.id,
    );

    console.log(removeFavoriteArray);

    setFavorites(removeFavoriteArray);
    localStorageRemove(item);
  };

  return (
    <div>
      <button onClick={() => handleAddFavorite(item)}>Favorite</button>
      <button onClick={() => handleRemoveFavorite(item)}>Remove</button>
    </div>
  );
}
