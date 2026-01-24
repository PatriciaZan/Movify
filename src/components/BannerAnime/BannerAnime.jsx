import React from "react";

export default function BannerAnime({ contentBanner, type }) {
  const handleSelect = (e, item) => {
    e.preventDefault();
    console.log(item);
    console.log(type);
  };
  return (
    <div>
      {contentBanner.map((item) => (
        <div onClick={(e) => handleSelect(e, item)}>
          <img
            style={{ height: "100px" }}
            src={
              type === "anime"
                ? item.images.jpg.image_url
                : `https://image.tmdb.org/t/p/original${item.backdrop_path}`
            }
            alt=""
          />
          {/* <h3>{item.name ? item.name : item.title}</h3> */}
        </div>
      ))}
    </div>
  );
}
