import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";

import { getCharactersAnimeAPI, getTopAnimesAPI } from "../../services/Animes";
import Card from "../../components/Card/Card";
import BannerAnime from "../../components/BannerAnime/BannerAnime";
import Search from "../../components/Search/Search";
import Banner from "../../components/Banner/Banner";
import { useFavorites } from "../../context/FavoritesContext";
import Favorites from "../../components/Favorites/Favorites";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/SideBar/Sidebar";
import { useType } from "../../context/TypeContext";

export default function AnimesPage() {
  const [animes, setAnimes] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  const { favorites } = useFavorites();
  const { setType } = useType();

  async function getAnimes() {
    setLoading(true);
    setType("/animes");
    try {
      const resTopAnimes = await getTopAnimesAPI();
      const resCharacters = await getCharactersAnimeAPI();
      setAnimes(resTopAnimes.data);
      setCharacters(resCharacters.data);
      setLoading(false);
    } catch (err) {
      console.log("ERROR", err);
    }
  }

  useEffect(() => {
    getAnimes();
  }, []);

  // LOGS
  //console.log("Animes: ", animes);
  //console.log("CHARACTERS: ", characters);
  //console.log("ANIME FAVORITES: ", favorites);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <hr />
      <Search type={"anime"} />
      <hr />
      {animes && animes.length > 0 ? (
        <Banner contentBanner={animes.slice(0, 3)} type="anime" />
      ) : (
        <p>Loading</p>
      )}
      <Sidebar />
      <hr />
      {animes && animes.length > 0 ? (
        <Card content={animes} type={"anime"} />
      ) : (
        <p>Loading Animes</p>
      )}
      <hr />
      <div>
        {characters && characters.length > 0 ? (
          <Card content={characters} type={"person"} />
        ) : (
          <p>Loading</p>
        )}
      </div>
    </div>
  );
}
