import React from "react";
import { Link } from "react-router-dom";

export default function Card({ content, type }) {
  let itemID;

  const handleSelect = (e, item) => {
    e.preventDefault();
    itemID = item.id;

    console.log(item);
    console.log(itemID);
  };

  return (
    <div style={{ display: "flex" }}>
      {content.map((item) => (
        <div onClick={(e) => handleSelect(e, item)}>
          <Link to={`/about/${itemID}`} state={itemID}>
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
          </Link>
        </div>
      ))}
    </div>
  );
}
