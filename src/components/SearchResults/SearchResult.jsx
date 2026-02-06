import React from "react";
import { useNavigate } from "react-router-dom";

export default function SearchResult({ element, type }) {
  console.log("SEARCH RESULT: ", element);
  //console.log("SEARCH TYPE: ", type);

  const navigate = useNavigate();

  const handleSelect = (e, item) => {
    e.preventDefault();
  };

  const handleNavigate = (item, type) => {
    const dataToPass = {
      item: item,
      id: item.id === undefined ? item.mal_id : item.id,
      typeToPass: type,
    };

    navigate(`about/${item.id === undefined ? item.mal_id : item.id}`, {
      state: dataToPass,
    });
  };

  return (
    <article>
      {element.map((item) => (
        <div onClick={() => handleNavigate(item, type)}>
          <h4>{item.name ? item.name : item.title}</h4>
        </div>
      ))}
    </article>
  );
}
