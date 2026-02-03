import React from "react";
import { Link, useNavigate } from "react-router-dom";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function Card({ content, type }) {
  const navigate = useNavigate();

  const getImagSrc = (item) => {
    // JIKAN
    if (item?.images?.jpg?.image_url) {
      //console.log("JINKAN");
      return item.images.jpg.image_url;
    }

    // TMDB
    if (item?.poster_path) {
      //console.log("TMDB");
      return `https://image.tmdb.org/t/p/original${item.poster_path}`;
    }

    // Fallback?
  };

  const handleNavigate = (item, type) => {
    const dataToPass = {
      id: item.id === undefined ? item.mal_id : item.id,
      typeToPass: type,
    };

    navigate(`/about/${item.id === undefined ? item.mal_id : item.id}`, {
      state: dataToPass,
    });
  };

  return (
    <div style={{ display: "flex" }}>
      {content.map((item) => (
        <div>
          {type === "person" ? <></> : <FavoriteButton item={item} />}
          <div onClick={() => handleNavigate(item, type)}>
            <img style={{ width: "100px" }} src={getImagSrc(item)} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
}
