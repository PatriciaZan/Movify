import { useFavorites } from "../../context/FavoritesContext";
import Card from "../Card/Card";

export default function Favorites() {
  const { favorites } = useFavorites();

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
