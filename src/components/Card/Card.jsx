import React from "react";

export default function Card({ content }) {
  const handleSelect = (e, item) => {
    e.preventDefault();
    console.log(item);
  };

  return (
    <div style={{ display: "flex" }}>
      {content.map((item) => (
        <div onClick={(e) => handleSelect(e, item)}>
          <img
            style={{ width: "100px" }}
            src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
            alt=""
          />
          {/* <h3>{item.name ? item.name : item.title}</h3> */}
        </div>
      ))}
    </div>
  );
}
