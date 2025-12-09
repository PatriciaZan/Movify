import "./banner.sass";
import React from "react";

function Banner({ onHandleShow, id, header, posterBig, title, overview }) {
  return (
    <div
      className="Banner-container"
      onClick={() => onHandleShow("/about", id)}
    >
      <div className="Banner-image">
        <img
          width={"200px"}
          src={`https://image.tmdb.org/t/p/original${posterBig}`}
          alt={`Poster`}
        />
      </div>
      <div className="Banner-text">
        <div className="text_top">
          <h2>{header}</h2>
        </div>
        <div className="text_bottom">
          <h1>{title}</h1>
          <p>{overview}</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
