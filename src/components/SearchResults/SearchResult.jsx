import React from "react";

export default function SearchResult({ element }) {
  console.log("SEARCHRESULT: ", element);

  const handleSelect = (e, item) => {
    e.preventDefault();
    console.log(item);
  };

  return (
    <article>
      {element.map((item) => (
        <div onClick={(e) => handleSelect(e, item)}>
          <h4>{item.name ? item.name : item.title}</h4>
        </div>
      ))}
    </article>
  );
}
