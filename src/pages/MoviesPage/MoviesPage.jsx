import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";

import { getTopMovies, getTopRatedMovies } from "../../services/Movies";
import Card from "../../components/Card/Card";
import Banner from "../../components/Banner/Banner";
import Genres from "../../components/Genres/Genres";
import Search from "../../components/Search/Search";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getTop() {
    setLoading(true);
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
    <>
      {/* <NavBar /> */}
      <Search type="movies" />
      <hr />
      MoviesPage
      <hr />
      {movies && movies.length > 0 ? (
        <Banner contentBanner={movies.slice(0, 3)} />
      ) : (
        <p>Loading</p>
      )}
      <div>
        Top Movies
        {movies && movies.length > 0 ? (
          <Card content={movies} />
        ) : (
          <p>Loading</p>
        )}
      </div>
      <hr />
      <div>
        Top Movies
        {topRated && topRated.length > 0 ? (
          <Card content={topRated} />
        ) : (
          <p>Loading</p>
        )}
      </div>
      <hr />
      <Genres />
    </>
  );
}
