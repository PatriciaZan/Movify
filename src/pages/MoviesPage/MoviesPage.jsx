import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";

import { getTopMovies, getTopRatedMovies } from "../../services/Movies";
import Card from "../../components/Card/Card";
import Banner from "../../components/Banner/Banner";
import Genres from "../../components/Genres/Genres";
import Search from "../../components/Search/Search";
import Favorites from "../../components/Favorites/Favorites";
import { useFavorites } from "../../context/FavoritesContext";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/SideBar/Sidebar";
import { useType } from "../../context/TypeContext";

import "./moviesPage.module.css";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [loading, setLoading] = useState(true);

  const { favorites } = useFavorites();
  const { type, setType } = useType();

  async function getTop() {
    setLoading(true);
    setType("/");
    try {
      const resTopMovies = await getTopMovies();
      const resTopRated = await getTopRatedMovies();

      setMovies(resTopMovies.results);
      setTopRated(resTopRated.results);
      setLoading(false);
    } catch (err) {
      console.log("ERROR", err);
    }
  }

  useEffect(() => {
    getTop();
  }, []);

  // LOGS
  //console.log("MOVIES: ", movies);
  //console.log("topRated: ", topRated);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="outlet-container">
      {/* <NavBar /> */}
      <Search type="movies" />

      {movies && movies.length > 0 ? (
        <Banner contentBanner={movies.slice(0, 3)} type={"movie"} />
      ) : (
        <p>Loading</p>
      )}
      <Sidebar />
      <div>
        Top Movies
        {movies && movies.length > 0 ? (
          <Card content={movies} type={"movie"} />
        ) : (
          <p>Loading</p>
        )}
      </div>

      <div className="Card-Container">
        Top Movies
        {topRated && topRated.length > 0 ? (
          <Card content={topRated} />
        ) : (
          <p>Loading</p>
        )}
      </div>

      <Genres />
    </div>
  );
}
