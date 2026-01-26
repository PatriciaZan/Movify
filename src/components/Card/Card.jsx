import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Card({ content, type }) {
  const navigate = useNavigate();

  const handleNavigate = (item, type) => {
    const dataToPass = {
      id: item.id === undefined ? item.mal_id : item.id,
      typeToPass: type,
    };

    navigate(`/about/${item.id === undefined ? item.mal_id : item.id}`, {
      state: dataToPass,
    });
  };

  const handleFavorite = (item) => {
    console.log(item);
  };

  return (
    <div style={{ display: "flex" }}>
      {content.map((item) => (
        <div>
          <div>
            <button onClick={() => handleFavorite(item)}>Favorite</button>
            <button>Wish Watch</button>
          </div>
          <div onClick={() => handleNavigate(item, type)}>
            {/* <Link to={`/about/${itemID}`} state={itemID}> */}
            {type === "anime" ? (
              <img
                style={{ width: "100px" }}
                src={item.images.jpg.image_url}
                alt=""
              />
            ) : (
              <img
                style={{ width: "100px" }}
                src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                alt=""
              />
            )}
            {/* <h3>{item.name ? item.name : item.title}</h3> */}
            {/* </Link> */}
          </div>
        </div>
      ))}
    </div>
  );
}
