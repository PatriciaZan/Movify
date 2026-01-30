import Card from "../Card/Card";

export default function Favorites({ favorites }) {
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
