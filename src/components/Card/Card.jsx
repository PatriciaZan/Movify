import "./card.sass";
import React from "react";

import { FaStar } from "react-icons/fa6";

function Card({ poster, title, votes, release }) {
  const stringLimit = 15;

  return (
    <div className="Card-container">
      <img
        src={`https://image.tmdb.org/t/p/original${poster}`}
        alt={`Poster`}
      />
      <div className="Card-infos">
        <h3>
          {title.length > stringLimit
            ? title.slice(0, stringLimit) + " ..."
            : title}
        </h3>
        <div className="span-container">
          <span>
            <FaStar /> {votes}
          </span>
          <span>{release.length > 4 ? release.slice(0, 4) : "no date"}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
