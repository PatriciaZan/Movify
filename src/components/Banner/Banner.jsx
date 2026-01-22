import React from "react";

export default function Banner({ contentBanner }) {
  return (
    <div>
      {contentBanner.map((item) => (
        <div onClick={(e) => handleSelect(e, item)}>
          <img
            style={{ height: "100px" }}
            src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
            alt=""
          />
          {/* <h3>{item.name ? item.name : item.title}</h3> */}
        </div>
      ))}
    </div>
  );
}
