import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import About from "./About";

import "../styles/components/card.sass";

// Will recive an array (movies/series/favorites/search)
export default function Card({ content, addBtn, removeBtn, status }) {
  //const localStorageData = JSON.parse(localStorage.getItem("Favorite-movies"));
  const [favorites, setFavorites] = useState([]);
  const [modalAbout, setModalAbout] = useState(false);
  const [modalItem, setModalItem] = useState([]);

  const [storeIds, setStoredIds] = useState([]);

  //const [toggle, setToggle] = useState(false);
  //console.log("TOGGLE: ", toggle);
  //const type = status;
  //console.log(type);

  //console.log("CONTENT: ", content);
  //console.log("FAVORITE: ", favorites);

  // useEffect(() => {
  //   console.log("toggle");
  // }, [toggle]);

  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem("Favorite-movies")));
  }, []);

  //using localStorage to persist data and access in more pages
  const localStorageSave = (items) => {
    localStorage.setItem("Favorite-movies", JSON.stringify(items));
  };

  const handleAddFavorite = (item) => {
    //console.log("ADD FAVORITE");
    if (storeIds.includes(item.id)) {
      //console.log("Já está nos favoritos");
    } else {
      // Cria um array que irá conter os ids, serve para checar se o item já foi adicionado
      const newId = [...storeIds, item.id];
      setStoredIds(newId);
      //console.log("ID: ", storeIds);

      // Se ele não foi adicionado antes agora ele é adicionado
      const newFavouriteArray = [...favorites, item];
      alert("Added to Favorites");
      setFavorites(newFavouriteArray);
      //console.log("FAVORITE: ", favorites);
      localStorageSave(newFavouriteArray);
    }
  };

  const handleRemoveFavorite = (item) => {
    console.log("ITEM: ", item);
    const newFavoriteArray = favorites.filter(
      (favorite) => favorite.id !== item.id,
    );
    alert("Removed from favorites");
    setFavorites(newFavoriteArray);
    localStorageSave(newFavoriteArray);
  };

  function toggleModal(item) {
    setModalAbout(!modalAbout);
    setModalItem(item);

    //console.log(modalAbout);
    //console.log(item);
  }

  return (
    <>
      {/* <div className={toggle !== false ? "modal-open" : "modal-close"}> */}
      {/* <div className={toggle !== false ? "" : "modal-close"}> */}
      <div>
        {modalAbout && (
          <About
            onClose={toggleModal}
            modalContent={modalItem}
            status={status}
          />
        )}
      </div>

      <div className="card-container">
        {content.map((item) => (
          <div className="card-box">
            <div className="card-content">
              <img
                onClick={() => toggleModal(item)}
                src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                alt=""
                style={{ width: "200px" }}
              />
              {/* <h3>{item.title}</h3> */}{" "}
              {/* Descomente esta linha para visualizar o titulo */}
            </div>

            <div className="card-btns">
              {addBtn === false ? (
                <p className="p-off"></p>
              ) : (
                <button onClick={() => handleAddFavorite(item)}>❤</button>
              )}

              {removeBtn === false ? (
                <p className="p-off"></p>
              ) : (
                <button
                  // className={toggle ? "removed" : "add"}
                  // onClick={() => handleRemoveFavorite(item)}
                  onClick={() => handleRemoveFavorite(item)}
                >
                  ❤
                </button>
              )}
              {/* <button onClick={() => toggleModal(item)}>About</button> */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
