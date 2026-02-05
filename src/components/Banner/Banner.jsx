import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Banner({ contentBanner, type }) {
  const navigate = useNavigate();

  const handleNavigate = (item, type) => {
    const dataToPass = {
      id: item.id === undefined ? item.mal_id : item.id,
      typeToPass: type,
    };

    navigate(`about/${item.id === undefined ? item.mal_id : item.id}`, {
      state: dataToPass,
    });

    console.log(item);
    console.log(type);
  };
  return (
    <div>
      {contentBanner.map((item) => (
        <div onClick={() => handleNavigate(item, type)}>
          <img
            style={{ height: "100px" }}
            src={
              type === "anime"
                ? item.images.jpg.image_url
                : `https://image.tmdb.org/t/p/original${item.backdrop_path}`
            }
            alt=""
          />
          <NavLink to="about">About</NavLink>
          {/* <h3>{item.name ? item.name : item.title}</h3> */}
        </div>
      ))}
    </div>
  );
}
