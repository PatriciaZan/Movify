import React from "react";

function Card({ info }) {
  return (
    <div>
      Card
      <img
        width={"200px"}
        src={`https://image.tmdb.org/t/p/original${info.results[0].poster_path}`}
        alt={`Poster`}
      />
      <h1>{info.results[0].original_title}</h1>
    </div>
  );
}

export default Card;
