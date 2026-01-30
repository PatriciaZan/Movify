import React, { useState } from "react";

export default function CardCast({ content }) {
  console.log("CARD CAST CONTENT: ", content);
  //const content = content;
  const contentArr = content;
  const contentFiveElements = contentArr.slice(0, 5);

  return (
    <div className="cardcast-container">
      {contentFiveElements.map((item) => (
        <div>
          <img
            className="cardcast-img"
            src={`https://image.tmdb.org/t/p/original${item.profile_path}`}
            alt=""
            style={{ width: "100px" }}
          />
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
}
